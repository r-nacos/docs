import{_ as t,c as a,o as s,a6 as e}from"./chunks/framework.C8_IbLF-.js";const b=JSON.parse('{"title":"版本说明","description":"","frontmatter":{},"headers":[],"relativePath":"p/version_describe/index.md","filePath":"p/version_describe/index.md","lastUpdated":1710206557000}'),n={name:"p/version_describe/index.md"},i=e(`<h1 id="版本说明" tabindex="-1">版本说明 <a class="header-anchor" href="#版本说明" aria-label="Permalink to &quot;版本说明&quot;">​</a></h1><h2 id="r-nacos版本说明" tabindex="-1">R-NACOS版本说明 <a class="header-anchor" href="#r-nacos版本说明" aria-label="Permalink to &quot;R-NACOS版本说明&quot;">​</a></h2><table><thead><tr><th>版本</th><th>对nacos兼容说明</th><th>版本特点说明</th><th>适用场景</th></tr></thead><tbody><tr><td>v0.3.3以上</td><td>支持2.x新最版nacos面向sdk的协议</td><td>支持集群部署版本，使用1个节点的集群方式当做单机模式,配置中心raft 协议没有充分优化，配置中心集群写入tps在1.5千左右</td><td>对配置中心没有太高频写入需求的应用都推荐使用这个版本 (后面会优化配置写入性能)</td></tr><tr><td>v0.2.3 (不再推荐,新版bugfix暂定不再同步)</td><td>支持2.x新最版nacos面向sdk的协议</td><td>单机部署版本,配置中心数据库使用sled, 初始内存多占用25M左右,配置中心单机写入tps在1.5万以上</td><td>对配置中心有高频写入需求的应用可以考虑使用</td></tr><tr><td>v0.1.10 (不再推荐,新版bugfix暂定不再同步)</td><td>支持1.x服务接口;除了查询服务中心服务列表外，支持2.x大部分接口</td><td>单机部署版本,配置中心数据库使用sqlite，内存占用比较低，但配置写入tps不高，7百左右</td><td>不使用2.x的注册中心服务，对内存占用敏感的小应用可以考虑使用</td></tr></tbody></table><h3 id="docker-版本说明" tabindex="-1">docker 版本说明 <a class="header-anchor" href="#docker-版本说明" aria-label="Permalink to &quot;docker 版本说明&quot;">​</a></h3><p>应用每次打包都会同时打对应版本的docker包 ，qingpan/rnacos:$tag 。</p><p>每个版本会打两类docker包</p><table><thead><tr><th>docker包类型</th><th>tag 格式</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td>gnu debian包</td><td>$version</td><td>qingpan/rnacos:v0.4.2</td><td>docker包基于debian-slim,体积比较大(压缩包36M,解压后102M),运行性能相对较高</td></tr><tr><td>musl alpine包</td><td>$version-alpine</td><td>qingpan/rnacos:v0.4.2-alpine</td><td>docker包基于alpine,体积比较小(压缩包11M,解压后34M),运行性能相对较低</td></tr></tbody></table><p>如果不观注版本，可以使用最新正式版本tag。</p><ul><li>最新的gnu正式版本: <code>qingpan/rnacos:stable</code></li><li>最新的alpine正式版本: <code>qingpan/rnacos:stable-alpine</code></li></ul><p><strong>MacOS arm系统补充说明</strong> ：目前MacOS arm系统运行<code>stable</code>镜像失败，可以先换成<code>stable-alpine</code>镜像。等后面解决arm <code>stable</code>镜像问题后再把这个注意事项去掉。</p><h2 id="nacos-client-sdk" tabindex="-1">nacos client sdk <a class="header-anchor" href="#nacos-client-sdk" aria-label="Permalink to &quot;nacos client sdk&quot;">​</a></h2><h3 id="java-nacos-sdk" tabindex="-1">java nacos sdk <a class="header-anchor" href="#java-nacos-sdk" aria-label="Permalink to &quot;java nacos sdk&quot;">​</a></h3><p><strong>nacos-client</strong></p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;com.alibaba.nacos&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;nacos-client&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;\${nacos.version}&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><table><thead><tr><th>协议</th><th>验证过版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>grpc协议(2.x)</td><td>2.1.0</td><td>&gt;2.1.x</td></tr><tr><td>http协议(1.x)</td><td>1.4.1</td><td>&gt;1.4.x</td></tr></tbody></table><h3 id="go-nacos-sdk" tabindex="-1">go nacos sdk <a class="header-anchor" href="#go-nacos-sdk" aria-label="Permalink to &quot;go nacos sdk&quot;">​</a></h3><p><strong>nacos-sdk-go</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nacos-sdk-go/v2 v2.2.5</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>协议</th><th>验证过版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>grpc协议(2.x)</td><td>2.2.5</td><td>&gt;=2.2.5</td></tr></tbody></table><h3 id="rust-nacos-sdk" tabindex="-1">rust nacos sdk <a class="header-anchor" href="#rust-nacos-sdk" aria-label="Permalink to &quot;rust nacos sdk&quot;">​</a></h3><p><strong>nacos-sdk-rust</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nacos-sdk = &quot;0.3.3&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>协议</th><th>验证过版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>grpc协议</td><td>0.3.3</td><td>&gt;=0.3.3</td></tr></tbody></table><p><strong>nacos_rust_client</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>nacos_rust_client = &quot;0.3.0&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><table><thead><tr><th>协议</th><th>验证过版本</th><th>推荐版本</th></tr></thead><tbody><tr><td>同时支持http协议与grpc协议</td><td>0.3.0</td><td>&gt;=0.3.0</td></tr><tr><td>http协议</td><td>0.2.2</td><td>&gt;=0.2.2</td></tr></tbody></table>`,26),d=[i];function r(l,h,o,p,c,k){return s(),a("div",null,d)}const u=t(n,[["render",r]]);export{b as __pageData,u as default};
