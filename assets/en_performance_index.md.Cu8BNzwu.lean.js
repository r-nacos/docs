import{_ as s,B as o,o as i,c as n,j as t,a as r,G as l,w as c,ac as d}from"./chunks/framework.C8XEYcK3.js";const y=JSON.parse('{"title":"Performance and Capacity Overview","description":"","frontmatter":{},"headers":[],"relativePath":"en/performance/index.md","filePath":"en/performance/index.md","lastUpdated":1738043441000}'),h={name:"en/performance/index.md"};function u(p,e,g,m,f,v){const a=o("VPNolebaseInlineLinkPreview");return i(),n("div",null,[e[3]||(e[3]=t("h1",{id:"performance-and-capacity-overview",tabindex:"-1"},[r("Performance and Capacity Overview "),t("a",{class:"header-anchor",href:"#performance-and-capacity-overview","aria-label":'Permalink to "Performance and Capacity Overview"'},"​")],-1)),e[4]||(e[4]=t("h2",{id:"stress-testing-tools",tabindex:"-1"},[r("Stress Testing Tools "),t("a",{class:"header-anchor",href:"#stress-testing-tools","aria-label":'Permalink to "Stress Testing Tools"'},"​")],-1)),e[5]||(e[5]=t("p",null,"We primarily use the goose tool for stress testing.",-1)),t("p",null,[e[1]||(e[1]=r("Refer to the sub-project ")),l(a,{href:"https://github.com/heqingpan/rnacos/tree/master/loadtest",target:"_blank",rel:"noreferrer"},{default:c(()=>e[0]||(e[0]=[r("loadtest")])),_:1}),e[2]||(e[2]=r(" in the project for more details."))]),e[6]||(e[6]=d('<h2 id="performance-stress-testing-results" tabindex="-1">Performance Stress Testing Results <a class="header-anchor" href="#performance-stress-testing-results" aria-label="Permalink to &quot;Performance Stress Testing Results&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Module</th><th>Scenario</th><th>Single Node qps/tps</th><th>Cluster qps/tps</th><th>Summary/Remarks</th></tr></thead><tbody><tr><td>Configuration Center</td><td>Configuration Write, HTTP Protocol</td><td>17.6k</td><td>7.6k</td><td>Cluster write stress testing was performed on a single machine running 3 nodes. Deploying on multiple machines could further improve tps.</td></tr><tr><td>Configuration Center</td><td>Configuration Query, HTTP Protocol</td><td>80k</td><td>n*80k</td><td>The total query qps of the cluster is a multiple of the node.</td></tr><tr><td>Registry</td><td>Service Instance Registration, HTTP Protocol</td><td>48k</td><td>24k</td><td>Cluster write stress testing was performed on a single machine running 3 nodes. Deploying on multiple machines could further improve tps.</td></tr><tr><td>Registry</td><td>Service Instance Registration, gRPC Protocol</td><td>48k</td><td>24k</td><td>The stress testing tool does not support gRPC protocol, so no actual stress testing has been conducted. Theoretically, it should not be lower than the HTTP protocol.</td></tr><tr><td>Registry</td><td>Service Instance Heartbeat, HTTP Protocol</td><td>48k</td><td>24k</td><td>Heartbeat is calculated per instance and shares qps with service instance registration.</td></tr><tr><td>Registry</td><td>Service Instance Heartbeat, gRPC Protocol</td><td>80k+</td><td>n*80k</td><td>Heartbeat is calculated per request link and does not go through the registry processing thread. Each node only manages the heartbeat of the current node. The total heartbeat qps of the cluster is a multiple of the node.</td></tr><tr><td>Registry</td><td>Query Service Instance</td><td>54k</td><td>n*54k</td><td>The total query qps of the cluster is a multiple of the node.</td></tr></tbody></table><p><strong>Note:</strong> Specific results depend on the stress testing environment.</p><h3 id="stress-testing-records" tabindex="-1">Stress Testing Records <a class="header-anchor" href="#stress-testing-records" aria-label="Permalink to &quot;Stress Testing Records&quot;">​</a></h3><p>Registry Query:</p><p><img src="https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230903202816.png" alt="" loading="lazy"></p><p>Configuration Center Query, two processes each limited to 40k qps for simultaneous stress testing (total 80k qps), one of the stress testing records:</p><p><img src="https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230903205737.png" alt="" loading="lazy"></p><h2 id="capacity-analysis" tabindex="-1">Capacity Analysis <a class="header-anchor" href="#capacity-analysis" aria-label="Permalink to &quot;Capacity Analysis&quot;">​</a></h2><h3 id="configuration-center" tabindex="-1">Configuration Center <a class="header-anchor" href="#configuration-center" aria-label="Permalink to &quot;Configuration Center&quot;">​</a></h3><ol><li>The single-node query capacity of the configuration center is 80k qps, which is very high and supports horizontal scaling; the cluster has no query bottleneck.</li><li>The memory usage of the configuration center depends on the configuration memory. As long as the memory is not full, there is no bottleneck.</li><li>The cluster write operation of the configuration center is centralized on the master node, which may create a write bottleneck; currently, it is 1.5k tps, but it should reach over 10k tps after optimization.</li></ol><h3 id="registry" tabindex="-1">Registry <a class="header-anchor" href="#registry" aria-label="Permalink to &quot;Registry&quot;">​</a></h3><ol><li>The single-node query capacity of the registry is 30k qps, which is relatively high and supports horizontal scaling; the cluster has no query bottleneck.</li><li>The memory usage of the registry depends on the configuration memory. As long as the memory is not full, there is no bottleneck.</li><li>The cluster write operation of the registry requires each node to write once, so the overall cluster write performance tps is theoretically equivalent to that of a single node.</li><li>The heartbeat maintenance mechanisms of the HTTP protocol (v1.x version) and gRPC protocol (v2.x) are different; HTTP heartbeat is calculated per instance and shares qps with service instance registration, while gRPC heartbeat is calculated per request link and does not go through the registry processing thread. Therefore, the theoretical capacity supported by these protocols varies significantly.</li></ol><h4 id="registry-cluster-registration-capacity-inference" tabindex="-1">Registry Cluster Registration Capacity Inference <a class="header-anchor" href="#registry-cluster-registration-capacity-inference" aria-label="Permalink to &quot;Registry Cluster Registration Capacity Inference&quot;">​</a></h4><ol><li>The HTTP protocol registration + heartbeat qps is 10k, with each instance having a heartbeat every 5 seconds; theoretically, it can only support about 50k service instances.</li><li>For the gRPC protocol, assuming the registration qps is also 10k, the heartbeat qps per instance is 80k, and the total heartbeat qps for a 3-node cluster is 240k; if an application instance reconnects once per hour on average, the total number of service instances supported for registration is: 60<em>60</em>10000 = 36 million, and the total number of link instances supported by heartbeat is: 5*240k = 1.2 million link instances (related to the cluster nodes).</li></ol><p>Conclusion: If using v1.0x HTTP protocol, the supported instances are around 50k. If using v2.0x gRPC protocol, theoretically, there is no bottleneck.</p><h2 id="performance-comparison-between-r-nacos-and-java-nacos-single-machine-mode" tabindex="-1">Performance Comparison between r-nacos and Java Nacos (Single Machine Mode) <a class="header-anchor" href="#performance-comparison-between-r-nacos-and-java-nacos-single-machine-mode" aria-label="Permalink to &quot;Performance Comparison between r-nacos and Java Nacos (Single Machine Mode)&quot;">​</a></h2><p>Historical single-machine performance test records, comparing r-nacos with the Java version of Nacos.</p><h3 id="test-environment-and-tools" tabindex="-1">Test Environment and Tools <a class="header-anchor" href="#test-environment-and-tools" aria-label="Permalink to &quot;Test Environment and Tools&quot;">​</a></h3><p>Test environment: macOS i7 quad-core / 16GB RAM. The same machine is used for both applying and receiving pressure (which may lower the test results). Test tools: * wrk, achieving around 24,450 qps * goose, achieving around 17,000 qps (single process with rate limiting, lower than wrk) * Single process pressure application, wrk output is higher than goose</p><p>r-nacos server version: v0.1.1 Java nacos server version: 2.1.0</p><p><strong>Since wrk and goose do not currently support the gRPC protocol, only HTTP protocol interfaces were tested.</strong></p><h3 id="configuration-center-1" tabindex="-1">Configuration Center <a class="header-anchor" href="#configuration-center-1" aria-label="Permalink to &quot;Configuration Center&quot;">​</a></h3><p>The configuration center is not frequently updated, so write operations were not tested.</p><h4 id="rust-r-nacos-server" tabindex="-1">Rust r-nacos server: <a class="header-anchor" href="#rust-r-nacos-server" aria-label="Permalink to &quot;Rust r-nacos server:&quot;">​</a></h4><ol><li>Configuration center single-machine query with wrk achieved around 24,000 qps.</li></ol><h4 id="java-nacos-server" tabindex="-1">Java nacos server: <a class="header-anchor" href="#java-nacos-server" aria-label="Permalink to &quot;Java nacos server:&quot;">​</a></h4><ol><li>Configuration center single-machine query with wrk achieved around 7,700 qps.</li></ol><h3 id="registration-center" tabindex="-1">Registration Center <a class="header-anchor" href="#registration-center" aria-label="Permalink to &quot;Registration Center&quot;">​</a></h3><h4 id="rust-r-nacos-server-1" tabindex="-1">Rust r-nacos server: <a class="header-anchor" href="#rust-r-nacos-server-1" aria-label="Permalink to &quot;Rust r-nacos server:&quot;">​</a></h4><ol start="2"><li>Naming registration of 1000 x 1 instance, 200 qps per second, single-core CPU usage: around 4.5%</li><li>Naming single query achieved around 15,000 QPS <ol><li>wrk query for a single service, 16,500 qps</li><li>goose query for 1000 services, 15,000 qps</li></ol></li><li>Naming single service registration <ol><li>goose, 50,000 to 70,000 instances, around 7,000 qps.</li></ol></li><li>Mixed query and registration <ol><li>wrk query for a single service (15,000 qps) + goose registration (750 qps) [5,000 instances]</li><li>goose query for 1000 services (13,000 qps) + goose registration (700 qps) [5,000 instances]</li><li>wrk query for a single service (15,000 qps) + goose registration (1,500 qps) [10,000 instances]</li><li>goose query for 1000 services (13,000 qps) + goose registration (1,300 qps) [10,000 instances]</li></ol></li></ol><h4 id="java-nacos-server-1" tabindex="-1">Java nacos server: <a class="header-anchor" href="#java-nacos-server-1" aria-label="Permalink to &quot;Java nacos server:&quot;">​</a></h4><ol><li>Configuration center query with wrk achieved around 7,700 qps</li><li>Naming registration of 1000 x 1 instance, 200 qps per second, single-core CPU usage: around 17%</li><li>Naming single query <ol><li>wrk query for a single service, 13,500 qps.</li><li>goose query for 1000 services, 10,000 qps (should be able to go higher initially). Can stabilize around 10,000 in the first 30 seconds, then drops to around 200 after 30 seconds and fluctuates, possibly due to GC.</li></ol></li><li>Naming single registration <ol><li>goose, 50,000 to 70,000 instances, around 4,500 qps.</li></ol></li><li>Mixed query and registration <ol><li>wrk query for a single service (13,000 qps) + goose registration (700 qps) [5,000 instances]</li><li>goose query for 1000 services (10,000 qps) + goose registration (700 qps) [5,000 instances]; can maintain initially, but qps fluctuates significantly later, dropping below 50 at the lowest.</li><li>wrk query for a single service (9,000 qps) + goose registration (1,200 qps) [10,000 instances]</li><li>goose query for 1000 services (6,000 qps) + goose registration (800 qps) [10,000 instances]</li></ol></li></ol><h3 id="performance-test-summary" tabindex="-1">Performance Test Summary <a class="header-anchor" href="#performance-test-summary" aria-label="Permalink to &quot;Performance Test Summary&quot;">​</a></h3><ol><li><p>r-nacos, except for service registration which cannot stabilize above 10,000, other interfaces can stabilize above 10,000 qps.</p></li><li><p>Java&#39;s query interface can generally reach above 10,000, but it is not stable, with significant fluctuations later. Reducing the test flow can make qps relatively stable.</p></li><li><p>In scenarios with multiple service queries and multiple service registrations, r-nacos qps can stabilize around 13,000, while Java Nacos qps drops significantly to around 6,000.</p></li><li><p>r-nacos overall qps is more than double that of the Java version. Due to Java&#39;s GC, the stability of qps levels is worse in Java (with the same pressure flow, qps can drop from a peak of 10,000 to below 100).</p></li><li><p>r-nacos service, thread count stabilizes at 7, CPU usage rate maximum around 200% (equivalent to using 2 cores), memory below 50MB.</p></li><li><p>Java Nacos service, maximum thread count around 300, CPU usage rate maximum around 500%, memory 600MB to 900MB.</p></li></ol>',35))])}const b=s(h,[["render",u]]);export{y as __pageData,b as default};
