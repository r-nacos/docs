import{_ as s,c as a,o as i,a6 as n}from"./chunks/framework.C8_IbLF-.js";const l="/docs/assets/1.GJyBM4IG.png",e="/docs/assets/2.Bmi9ZET8.gif",p="/docs/assets/3.Dq04gYpw.gif",t="/docs/assets/4.DHMsGcxK.gif",h="/docs/assets/5.Cv_mxUfI.png",r="/docs/assets/6.CFIB3Lf0.png",_=JSON.parse('{"title":"第一章：简介","description":"","frontmatter":{},"headers":[],"relativePath":"notes/intro/cluster_deploy/index.md","filePath":"notes/intro/cluster_deploy/index.md","lastUpdated":1710227504000}'),k={name:"notes/intro/cluster_deploy/index.md"},d=n('<h1 id="第一章-简介" tabindex="-1">第一章：简介 <a class="header-anchor" href="#第一章-简介" aria-label="Permalink to &quot;第一章：简介&quot;">​</a></h1><h2 id="_1-1-概述" tabindex="-1">1.1 概述 <a class="header-anchor" href="#_1-1-概述" aria-label="Permalink to &quot;1.1 概述&quot;">​</a></h2><ul><li>R-Nacos 在 v0.3.0 版本后支持集群部署，集群部署的目标是通过多实例部署的方式，支持服务的水平扩容，支持部分节点异常后继续提供服务，提升稳定性。</li></ul><h2 id="_1-2-配置中心" tabindex="-1">1.2 配置中心 <a class="header-anchor" href="#_1-2-配置中心" aria-label="Permalink to &quot;1.2 配置中心&quot;">​</a></h2><ul><li>对于<code>配置中心</code>而言，R-Nacos 采用 raft 集群协议+本地存储，持久化数据，<strong>不需要再依赖 MySQL 存储配置</strong>，其持久化机制类似<code>etcd</code>：</li></ul><table><thead><tr><th style="text-align:left;">请求方式</th><th style="text-align:left;">说明</th><th style="text-align:left;">性能</th></tr></thead><tbody><tr><td style="text-align:left;">写入</td><td style="text-align:left;">只有主节点能写入，其它节点收到写入请求后转发到主节点写入</td><td style="text-align:left;">集群 2000 tps 左右，有优化空间。</td></tr><tr><td style="text-align:left;">读取</td><td style="text-align:left;">每个节点都能读取全量数据</td><td style="text-align:left;">单节点 80 000 qps 左右，集群总容量为 n*8 万。</td></tr></tbody></table><blockquote><p>温馨提示ℹ️：TPS（Transactions Per Second）和QPS（Queries Per Second）都是衡量系统性能的指标，但它们关注的方面有所不同。</p><ul><li><strong>TPS（每秒事务数）</strong>： <ul><li>TPS 指的是服务器在单位时间内（通常是每秒）能够完成的事务数量。</li><li>一个事务通常是指一个完整的操作过程，例如：一个客户机向服务器发送请求并接收响应的整个过程。</li><li>TPS 更侧重于整个系统的性能，包括处理能力、响应时间和并发处理能力。</li><li>TPS 的高低反映了系统的整体吞吐量，即系统在单位时间内能够处理的工作量。</li></ul></li><li><strong>QPS（每秒查询率）</strong>： <ul><li>QPS 是指服务器在单位时间内能够响应的查询次数。</li><li>QPS 更侧重于数据库或其他存储系统的性能，尤其是在处理读取操作（查询）时的能力。</li><li>对于一个页面的一次访问，可能只形成一个 TPS，但可能会产生多次对服务器的请求，这些请求都可以计入 QPS。</li><li>高 QPS 值表示系统能够快速响应查询请求，并具有较高的读取效率。</li></ul></li></ul><p>简而言之，TPS 关注的是系统整体处理事务的能力，而 QPS 关注的是系统处理查询请求的效率。在实际应用中，提高 TPS 可能涉及到并发编程、缓存优化、数据库优化和负载均衡等技术手段，而提高 QPS 则更多地关注于数据库查询性能的优化。</p></blockquote><h2 id="_1-3-注册中心" tabindex="-1">1.3 注册中心 <a class="header-anchor" href="#_1-3-注册中心" aria-label="Permalink to &quot;1.3 注册中心&quot;">​</a></h2><ul><li>对于<code>注册中心</code>而言，R-Nacos 采用类 distor 协议，同步集群间的数据；注册中心复用配置中心节点列表信息，两者协议是分别单独实现的。</li></ul><table><thead><tr><th style="text-align:left;">请求方式</th><th style="text-align:left;">说明</th><th style="text-align:left;">性能</th></tr></thead><tbody><tr><td style="text-align:left;">写入</td><td style="text-align:left;">注册中心每个节点平等，按 hash 划分每个节点负责的内容；节点对负责的服务可写，否则转发到对应负责的节点处理。</td><td style="text-align:left;">集群 10 000 tps 左右。</td></tr><tr><td style="text-align:left;">读取</td><td style="text-align:left;">每个节点都能读取全量数据</td><td style="text-align:left;">单节点 30 000 qps 左右。集群总容量为 n*3万</td></tr></tbody></table><h1 id="第二章-集群部署" tabindex="-1">第二章：集群部署 <a class="header-anchor" href="#第二章-集群部署" aria-label="Permalink to &quot;第二章：集群部署&quot;">​</a></h1><h2 id="_2-1-概述" tabindex="-1">2.1 概述 <a class="header-anchor" href="#_2-1-概述" aria-label="Permalink to &quot;2.1 概述&quot;">​</a></h2><ul><li>集群部署和单机部署类似，只是对应的运行参数不同，增加了集群节点的配置。</li></ul><h2 id="_2-2-集群规则说明" tabindex="-1">2.2 集群规则说明 <a class="header-anchor" href="#_2-2-集群规则说明" aria-label="Permalink to &quot;2.2 集群规则说明&quot;">​</a></h2><ul><li>集群部署相关的配置参数有 4 个：</li></ul><table><thead><tr><th>集群相关的配置参数</th><th>说明</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>RNACOS_RAFT_NODE_ID</td><td>节点 ID</td><td>1</td><td>单节点运行时无需配置。</td></tr><tr><td>RNACOS_RAFT_NODE_ADDR</td><td>节点地址IP:GrpcPort</td><td>127.0.0.1:9848</td><td>单节点运行时每次启动都会生效；<br>多节点集群部署时，只取加入集群时配置的值。</td></tr><tr><td>RNACOS_RAFT_AUTO_INIT</td><td>是否当做主节点初始化(只在每一次启动时生效)</td><td>true</td><td>节点 1 时默认为 true。<br>节点非 1 时为 false。</td></tr><tr><td>RNACOS_RAFT_JOIN_ADDR</td><td>是否作为节点加入对应的主节点（只在第一次启动时生效）</td><td>空</td><td>127.0.0.1:9848</td></tr></tbody></table><blockquote><p>温馨提示ℹ️：具体参数说明在<a href="./../../high/run_params_performance/">这里</a>。</p></blockquote><ul><li>集群配置规则： <ul><li>① 所有的<code>集群节点</code>都需要设置 <code>RNACOS_RAFT_NODE_ID</code> 和 <code>RNACOS_RAFT_NODE_ADDR</code>；其中，不同节点的 <code>node_id</code> 和 <code>node_addr</code> 不能相同，并且 <code>node_id</code> 是一个<code>正整数</code>，<code>node_addr</code> 是 <code>ip:grpc_port</code>。</li><li>② 对于集群<code>主</code>节点，初始设置 <code>RNACOS_RAFT_AUTO_INIT</code> 为 <code>true</code> （如果节点为 1，默认是 true，不用额外设置）。</li><li>③ 对于集群<code>从</code>节点， 初始设置 <code>RNACOS_RAFT_AUTO_INIT</code> 为 <code>false</code> (节点非 1，默认就是 false，不用额外设置)；另外需要设置 <code>RNACOS_RAFT_JOIN_ADDR</code> 为当前<code>主</code>节点的地址，以方便启动时自动加入集群中。</li><li>④ <code>第 ② 步骤</code>和 <code>第 ③步骤</code> 只是为了初始化组建集群。集群运行起来之后，后继启动配置从 raft db 中加载。</li><li>⑤ <code>集群节点数量不要求</code>，可以是 1、2、3、4、... ； 不过 raft 协议只支持小于集群半数节点异常后继续提供写入服务(查询不影响)，例如：3 个节点集群支持 1 个节点异常后提供写入服务，2 个节点集群可以正常运行，不支持节点异常后提供服务。</li><li>⑥ <code>从节点可以在使用过程中按需加入</code>，如：原来 3 个节点，可能在使用一段时间后增加 2 个节点扩容。</li></ul></li></ul><h2 id="_2-3-集群规划" tabindex="-1">2.3 集群规划 <a class="header-anchor" href="#_2-3-集群规划" aria-label="Permalink to &quot;2.3 集群规划&quot;">​</a></h2><ul><li>本次使用的是 Docker Compose 的 <code>bridge</code> 网络，以避免同台主机端口冲突问题，即：</li></ul><p><img src="'+l+`" alt="image-20240312135638114"></p><h2 id="_2-4-docker-compose-运行" tabindex="-1">2.4 Docker Compose 运行 <a class="header-anchor" href="#_2-4-docker-compose-运行" aria-label="Permalink to &quot;2.4 Docker Compose 运行&quot;">​</a></h2><ul><li>编写 docker-compose.yaml 文件：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose.yaml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3.8&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 指定版本号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 所有需要启动的服务</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  r-nacos-master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 主节点</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qingpan/rnacos:stable</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r-nacos-master</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RUST_LOG=warn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_HTTP_PORT=8848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_NODE_ADDR=r-nacos-master:9848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_CONFIG_DB_DIR=db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_NODE_ID=1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_AUTO_INIT=true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/nacos/io1:/io:rw</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/etc/localtime:/etc/localtime:ro</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 宿主机和容器的端口映射关系</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8848:8848&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 左边宿主机端口:右边容器端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9848:9848&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 左边宿主机端口:右边容器端口</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10848:10848&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 左边宿主机端口:右边容器端口</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 配置容器连接的网络，引用顶级networks下的条目</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rnacos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  r-nacos-slave1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从节点</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qingpan/rnacos:stable</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r-nacos-slave1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RUST_LOG=warn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_HTTP_PORT=8848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_NODE_ADDR=r-nacos-slave1:9848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_CONFIG_DB_DIR=db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_NODE_ID=2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_JOIN_ADDR=r-nacos-master:9848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/nacos/io2:/io:rw</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/etc/localtime:/etc/localtime:ro</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rnacos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r-nacos-master</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  r-nacos-slave2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从节点</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qingpan/rnacos:stable</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r-nacos-slave2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 环境变量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RUST_LOG=warn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_HTTP_PORT=8848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_NODE_ADDR=r-nacos-slave2:9848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_CONFIG_DB_DIR=db</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_NODE_ID=3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">RNACOS_RAFT_JOIN_ADDR=r-nacos-master:9848</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">TZ=Asia/Shanghai</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/nacos/io3:/io:rw</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/etc/localtime:/etc/localtime:ro</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rnacos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    depends_on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r-nacos-master</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">r-nacos-slave1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 定义网络，可以多个，如果不声明，默认会创建一个网络名称为“工程名称_default”的bridge网络</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">networks</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  rnacos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一个具体网络的条目名称</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">rnacos</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 网络名称，默认为“工程名称_网络条目名称”</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    driver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">bridge</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 网络模式，默认为bridge</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><p><img src="`+e+'" alt=""></p><ul><li>运行 Docker Compose ：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt=""></p><ul><li>查看是否运行成功：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose ps</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+t+'" alt=""></p><ul><li>通过浏览器（地址是<code>http://192.168.10.100:10848/</code>）访问：</li></ul><p><img src="'+h+'" alt="image-20240312140306007"></p><h2 id="_2-5-不使用-docker-部署" tabindex="-1">2.5 不使用 Docker 部署 <a class="header-anchor" href="#_2-5-不使用-docker-部署" aria-label="Permalink to &quot;2.5 不使用 Docker 部署&quot;">​</a></h2><h3 id="_2-5-1-概述" tabindex="-1">2.5.1 概述 <a class="header-anchor" href="#_2-5-1-概述" aria-label="Permalink to &quot;2.5.1 概述&quot;">​</a></h3><ul><li>部署方式和<a href="./../quick_start/#第二章-源码安装">软件包单机部署</a>类似，只不过 R-Nacos 支持通过环境变量启动或通过配置文件方式启动，对应的文档在<a href="./.html">这里</a>。</li></ul><h3 id="_2-5-2-集群规划" tabindex="-1">2.5.2 集群规划 <a class="header-anchor" href="#_2-5-2-集群规划" aria-label="Permalink to &quot;2.5.2 集群规划&quot;">​</a></h3><ul><li>使用三台 Linux 主机作为 R-Nacos 的节点，即：</li></ul><p><img src="'+r+`" alt="image-20240312140920694"></p><ul><li>假设三台 Linux 主机的配置信息如下：</li></ul><table><thead><tr><th>Linux 主机</th><th>IP 地址</th><th>说明</th></tr></thead><tbody><tr><td>r-nacos-master</td><td>192.168.10.100</td><td>主节点</td></tr><tr><td>r-nacos-slave1</td><td>192.168.10.101</td><td>从节点</td></tr><tr><td>r-nacos-slave2</td><td>192.168.10.102</td><td>从节点</td></tr></tbody></table><blockquote><p>注意⚠️：需要保证三台 Linux 主机能互相通信，测试环境中，可以选择关闭防火墙！！！</p></blockquote><h3 id="_2-5-3-集群部署" tabindex="-1">2.5.3 集群部署 <a class="header-anchor" href="#_2-5-3-集群部署" aria-label="Permalink to &quot;2.5.3 集群部署&quot;">​</a></h3><h4 id="_2-5-3-1-各个节点的配置信息" tabindex="-1">2.5.3.1 各个节点的配置信息 <a class="header-anchor" href="#_2-5-3-1-各个节点的配置信息" aria-label="Permalink to &quot;2.5.3.1 各个节点的配置信息&quot;">​</a></h4><ul><li><code>r-nacos-master</code> 的 <code>env01</code> 配置文件的信息如下：</li></ul><div class="language-env vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#file:env01 , Initialize with the leader node role</span></span>
<span class="line"><span>RUST_LOG=warn</span></span>
<span class="line"><span>RNACOS_HTTP_PORT=8848</span></span>
<span class="line"><span>RNACOS_RAFT_NODE_ADDR=127.0.0.1:9848</span></span>
<span class="line"><span>RNACOS_CONFIG_DB_DIR=db01</span></span>
<span class="line"><span>RNACOS_RAFT_NODE_ID=1</span></span>
<span class="line"><span>RNACOS_RAFT_AUTO_INIT=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>r-nacos-slave1</code> 的 <code>env02</code> 配置文件的信息如下：</li></ul><div class="language-env vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">env</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#file:env02 , Initialize with the follower node role</span></span>
<span class="line"><span>RUST_LOG=warn</span></span>
<span class="line"><span>RNACOS_HTTP_PORT=8849</span></span>
<span class="line"><span>RNACOS_RAFT_NODE_ADDR=127.0.0.1:9849</span></span>
<span class="line"><span>RNACOS_CONFIG_DB_DIR=db02</span></span>
<span class="line"><span>RNACOS_RAFT_NODE_ID=2</span></span>
<span class="line"><span>RNACOS_RAFT_JOIN_ADDR=127.0.0.1:9848</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><code>r-nacos-slave2</code> 的 <code>env03</code> 配置文件的信息如下：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#file:env03 , Initialize with the follower node role</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RUST_LOG</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">warn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RNACOS_HTTP_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8850</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RNACOS_RAFT_NODE_ADDR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1:9850</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RNACOS_CONFIG_DB_DIR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">db03</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RNACOS_RAFT_NODE_ID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RNACOS_RAFT_JOIN_ADDR</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0.1:9848</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="_2-5-3-2-启动集群" tabindex="-1">2.5.3.2 启动集群 <a class="header-anchor" href="#_2-5-3-2-启动集群" aria-label="Permalink to &quot;2.5.3.2 启动集群&quot;">​</a></h4><ul><li>依次启动各个节点，需要先启动主节点：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./rnacos -e env01</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos.log </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;&amp;1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>再启动从节点，让其加入到集群中：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./rnacos -e env02</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos.log </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;&amp;1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./rnacos -e env03</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos.log </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">2&gt;&amp;1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="_2-6-集群重启" tabindex="-1">2.6 集群重启 <a class="header-anchor" href="#_2-6-集群重启" aria-label="Permalink to &quot;2.6 集群重启&quot;">​</a></h2><h3 id="_2-6-1-概述" tabindex="-1">2.6.1 概述 <a class="header-anchor" href="#_2-6-1-概述" aria-label="Permalink to &quot;2.6.1 概述&quot;">​</a></h3><ul><li>如果是 Docker Compose 搭建的集群，重新启动非常方便，选择下面的任意一条命令即可：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 该命令会移除容器，再启动容器；如果没有进行挂载，将会丢失数据。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose down </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止并重新启动所有服务，但不会移除容器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose restart</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>如果是软件包搭建的集群，重新启动和第一次启动的方式一样：略。</li></ul><h3 id="_2-6-2-说明" tabindex="-1">2.6.2 说明 <a class="header-anchor" href="#_2-6-2-说明" aria-label="Permalink to &quot;2.6.2 说明&quot;">​</a></h3><ul><li>集群启动后，集群的节点信息已久化节点本地数据库中。 在节点重启时后直接从本地数据库加载集群节点的信息。这时就不需要读取需要加入的集群地址，<code>RNACOS_RAFT_JOIN_ADDR</code> 不会再被使用(留在配置中也不影响)。</li><li>部分节点重启，在重启一个心跳时间（<code>0.5s</code>）就会被重新加入集群。</li><li>全部节点重启， raft 需要启动静默 <code>5s</code> + 选举超时 <code>3s</code> 后才重新选举主节点；<code>10s</code> 左右集群才提供配置写入服务。 期间配置查询，和注册中心的读写可以正常使用。</li></ul>`,65),c=[d];function o(E,g,b,u,y,F){return i(),a("div",null,c)}const A=s(k,[["render",o]]);export{_ as __pageData,A as default};
