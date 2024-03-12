import{_ as a,c as t,o as r,a6 as e}from"./chunks/framework.C8_IbLF-.js";const g=JSON.parse('{"title":"性能与容量说明","description":"","frontmatter":{},"headers":[],"relativePath":"p/performance/index.md","filePath":"p/performance/index.md","lastUpdated":1710206557000}'),s={name:"p/performance/index.md"},o=e('<h1 id="性能与容量说明" tabindex="-1">性能与容量说明 <a class="header-anchor" href="#性能与容量说明" aria-label="Permalink to &quot;性能与容量说明&quot;">​</a></h1><h2 id="压测工具" tabindex="-1">压测工具 <a class="header-anchor" href="#压测工具" aria-label="Permalink to &quot;压测工具&quot;">​</a></h2><p>主要使用goose压测。</p><p>参考项目中的子工程 <a href="https://github.com/heqingpan/rnacos/tree/master/loadtest" target="_blank" rel="noreferrer">loadtest</a></p><h2 id="性能压测结果" tabindex="-1">性能压测结果 <a class="header-anchor" href="#性能压测结果" aria-label="Permalink to &quot;性能压测结果&quot;">​</a></h2><table><thead><tr><th>模块</th><th>场景</th><th>单节点qps/tps</th><th>集群qps/tps</th><th>总结/备注</th></tr></thead><tbody><tr><td>配置中心</td><td>配置写入,单机模式</td><td>1.76万</td><td>-</td><td></td></tr><tr><td>配置中心</td><td>配置写入,集群模式</td><td>1.76万</td><td>7.6千</td><td>集群写入压测是在同一台电脑运行3个节点,如果换成多个机器部署,tps应该还能有所提升。</td></tr><tr><td>配置中心</td><td>配置查询</td><td>8万</td><td>n*8万</td><td>集群的查询总qps是节点的倍数</td></tr><tr><td>注册中心</td><td>服务实例注册,http协议</td><td>1.2万</td><td>1.0万</td><td>注册中心单机模式与集群模式写入的性能一致</td></tr><tr><td>注册中心</td><td>服务实例注册,grpc协议</td><td>1.2万</td><td>1.2万</td><td>grpc协议压测工具没有支持，目前没有实际压测，理论不会比http协议低</td></tr><tr><td>注册中心</td><td>服务实例心跳,http协议</td><td>1.2万</td><td>1.0万</td><td>心跳是按实例计算和服务实例注册一致共享qps</td></tr><tr><td>注册中心</td><td>服务实例心跳,grpc协议</td><td>8万以上</td><td>n*8万</td><td>心跳是按请求链接计算,且不过注册中心处理线程,每个节点只需管理当前节点的心跳，集群总心跳qps是节点的倍数</td></tr><tr><td>注册中心</td><td>查询服务实例</td><td>3万</td><td>n*3万</td><td>集群的查询总qps是节点的倍数</td></tr></tbody></table><p><strong>注：</strong> 具体结果和压测环境有关</p><h3 id="压测记录" tabindex="-1">压测记录 <a class="header-anchor" href="#压测记录" aria-label="Permalink to &quot;压测记录&quot;">​</a></h3><p>注册中心查询：</p><p><img src="https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230903202816.png" alt=""></p><p>配置中心查询，两个进程分别限流4万qps同时压测(共8万qps)，其中一个的压测记录：</p><p><img src="https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230903205737.png" alt=""></p><h2 id="容量分析" tabindex="-1">容量分析 <a class="header-anchor" href="#容量分析" aria-label="Permalink to &quot;容量分析&quot;">​</a></h2><h3 id="配置中心" tabindex="-1">配置中心 <a class="header-anchor" href="#配置中心" aria-label="Permalink to &quot;配置中心&quot;">​</a></h3><ol><li>配置中心的单机查询8万qps，很高，又支持水平扩容；集群基本没有查询瓶颈。</li><li>配置中心所占用的内存和配置内存有关，在内存没有满前，基本没有瓶颈。</li><li>配置中心集群写入时统一在主节点写入，写入可能有瓶颈；目前1.5千tps,后面优化后应该能到1万 tps以上。</li></ol><h3 id="注册中心" tabindex="-1">注册中心 <a class="header-anchor" href="#注册中心" aria-label="Permalink to &quot;注册中心&quot;">​</a></h3><ol><li>注册中心的单机查询3万qps，比较高，又支持水平扩容；集群基本没有查询瓶颈。</li><li>注册中心所占用的内存和配置内存有关，在内存没有满前，基本没有瓶颈。</li><li>注册中心集群写入时每个节点都要写一遍，整体集群的写入性能tps和单机理论上相当。</li><li>http协议(v1.x版本)和grpc协议(v2.x)的心跳维护机制不同；http心跳是按实例计算和服务实例注册一致共享qps, grpc的心跳是按请求链接计算且不过注册中心处理线程。所有这类协议理论支持的容量差别很大。</li></ol><h4 id="注册中心集群注册容量推理" tabindex="-1">注册中心集群注册容量推理 <a class="header-anchor" href="#注册中心集群注册容量推理" aria-label="Permalink to &quot;注册中心集群注册容量推理&quot;">​</a></h4><ol><li>http协议注册+心跳qps是1万，每个实例5秒钟一次心跳；理论上只能支持5万服务实例左右。</li><li>grpc协议，注册qps假设也是1万，心跳qps单实例8万，3节点集群总心跳24万；如果平均一个应用实例1小时重连一次；支持注册的服务实例总数为：60<em>60</em>10000 = 3600万，心跳支持的链接实例总数为：5*24万=120万个链接实例（和集群节点有关）。</li></ol><p>结论: 如果使用v1.0x http协议，支持的实例在5万个左右。 如果使用v2.0x grpc协议，理论上基本没有瓶颈。</p><hr><h2 id="r-nacos与java-nacos性能压测对比-单机模式" tabindex="-1">r-nacos与java nacos性能压测对比 （单机模式） <a class="header-anchor" href="#r-nacos与java-nacos性能压测对比-单机模式" aria-label="Permalink to &quot;r-nacos与java nacos性能压测对比 （单机模式）&quot;">​</a></h2><p>旧版本的单机压测记录，有和java 版本nacos的比较.</p><h3 id="压测环境与工具" tabindex="-1">压测环境与工具 <a class="header-anchor" href="#压测环境与工具" aria-label="Permalink to &quot;压测环境与工具&quot;">​</a></h3><p>压测环境:macos i7四核 /16G ， 施压、受压机器是同一台机器（会拉低压测结果）。 压测工具: * wrk ,qps: 24450左右 * goose, qps 17000左右 （单进程加限流施压比 wrk低） * 单进程施压请求wrk比goose 输出高</p><p>r-nacos server版本：v0.1.1 java nacos server版本: 2.1.0</p><p><strong>因wrk,goose暂时不支持grpc协议，暂时只压测http协议接口</strong></p><h3 id="配置中心-1" tabindex="-1">配置中心 <a class="header-anchor" href="#配置中心-1" aria-label="Permalink to &quot;配置中心&quot;">​</a></h3><p>配置中心，不会频繁更新，写入不做压测。</p><h4 id="rust-r-nacos-server" tabindex="-1">rust r-nacos server： <a class="header-anchor" href="#rust-r-nacos-server" aria-label="Permalink to &quot;rust r-nacos server：&quot;">​</a></h4><ol><li>配置中心单机查询 wrk 压测 qps 在2.4万左右.</li></ol><h4 id="java-nacos-server" tabindex="-1">java nacos server： <a class="header-anchor" href="#java-nacos-server" aria-label="Permalink to &quot;java nacos server：&quot;">​</a></h4><ol><li>配置中心单机查询 wrk 压测, qps 在7700左右</li></ol><h3 id="注册中心-1" tabindex="-1">注册中心 <a class="header-anchor" href="#注册中心-1" aria-label="Permalink to &quot;注册中心&quot;">​</a></h3><h4 id="rust-r-nacos-server-1" tabindex="-1">rust r-nacos server： <a class="header-anchor" href="#rust-r-nacos-server-1" aria-label="Permalink to &quot;rust r-nacos server：&quot;">​</a></h4><ol start="2"><li>naming 注册1000 x 1个实例，每秒200qps，单核cpu: 4.5% 左右</li><li>naming 单查询1.5万 QPS 左右 <ol><li>wrk 查询单个服务 ，1.65万 qps</li><li>goose 查询1000个服务 ，1.5万 qps</li></ol></li><li>naming 单注册服务 <ol><li>goose,5万到7万实例数 0.7万 qps左右。</li></ol></li><li>查询与注册混合 <ol><li>wrk 查询单个服务（1.5万 qps) + goose 注册（0.075 万qps) 【5千实例】</li><li>goose 查询1000个服务（1.3万 qps) + goose 注册（0.07万 qps) 【5千实例】</li><li>wrk 查询单个服务（1.5万 qps) + goose 注册（0.15万qps) 【1万实例】</li><li>goose 查询1000个服务（1.3万 qps) + goose 注册（0.13万 qps) 【1万实例】</li></ol></li></ol><h4 id="java-nacos-server-1" tabindex="-1">java nacos server： <a class="header-anchor" href="#java-nacos-server-1" aria-label="Permalink to &quot;java nacos server：&quot;">​</a></h4><ol><li>配置中心查询 wrk 压测, 7700 qps 左右</li><li>naming 注册1000 x 1个实例，每秒200qps，单核cpu: 17% 左右</li><li>naming 单查询 <ol><li>wrk 查询单个服务 ，1.35万 qps 。</li><li>goose 查询1000个服务，1万 qps（前期应该还能上去一些）。前30秒能稳定在1万左右，30秒后，跌到200左右之后再上下浮动，可能受 GC 影响。</li></ol></li><li>naming 单注册 <ol><li>goose,5万到7万实例数 0.45万 qps左右。</li></ol></li><li>查询与注册混合 <ol><li>wrk 查询单个服务（1.3万 qps) + goose 注册（0.07 万qps) 【5千实例】</li><li>goose 查询1000个服务（1万 qps) + goose 注册（0.07万 qps) 【5千实例】; 前期能保持，后期 qps 上下浮动比较大，最低小于50。</li><li>wrk 查询单个服务（0.9万 qps) + goose 注册（0.12万qps) 【1万实例】</li><li>goose 查询1000个服务（0.6万 qps) + goose 注册（0.08万 qps) 【1万实例】</li></ol></li></ol><h3 id="性能压测总结" tabindex="-1">性能压测总结 <a class="header-anchor" href="#性能压测总结" aria-label="Permalink to &quot;性能压测总结&quot;">​</a></h3><ol><li><p>r-nacos,除了服务服务注册不能稳定在1万以上，其它的接口qps都能稳定在1万以上。</p></li><li><p>java 的查询接口基本能压到1万以上，但不平稳，后继浮动比较大。如果降低压测流程，qps 可以相对平稳。</p></li><li><p>在多服务查询叠加上多服务注册场景，r-nacos qps能稳定在1.3万左右, java nacos qps 下降明显在0.6万左右。</p></li><li><p>r-nacos 综合 qps是 java版的2倍以上，因 java 有 GC，qps水位稳定性上 java较差（相同施压流量，qps 能从峰值1万能降到1百以下）。</p></li><li><p>r-nacos 服务,线程数稳定在7，cpu 用例率最大200%左右（相当用个2核），内存在50M 以下</p></li><li><p>java nacos 服务，线程数最大300左右， cpu 用例率最大500%左右，内存600M到900M。</p></li></ol>',40),l=[o];function i(d,n,p,h,c,q){return r(),t("div",null,l)}const m=a(s,[["render",i]]);export{g as __pageData,m as default};
