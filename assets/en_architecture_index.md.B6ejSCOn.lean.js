import{_ as a,B as l,o as c,c as d,a3 as i,j as r,a as t,G as n,w as s}from"./chunks/framework.C4orK2dt.js";const w=JSON.parse('{"title":"Architecture","description":"","frontmatter":{},"headers":[],"relativePath":"en/architecture/index.md","filePath":"en/architecture/index.md","lastUpdated":1738043441000}'),h={name:"en/architecture/index.md"};function u(p,e,g,f,m,y){const o=l("VPNolebaseInlineLinkPreview");return c(),d("div",{"data-pagefind-body":!0},[e[9]||(e[9]=i('<h1 id="architecture" tabindex="-1">Architecture <a class="header-anchor" href="#architecture" aria-label="Permalink to &quot;Architecture&quot;">​</a></h1><h2 id="r-nacos-architecture-diagram" tabindex="-1">r-nacos Architecture Diagram <a class="header-anchor" href="#r-nacos-architecture-diagram" aria-label="Permalink to &quot;r-nacos Architecture Diagram&quot;">​</a></h2><p><img src="https://raw.githubusercontent.com/r-nacos/r-nacos/master/doc/assets/imgs/r-nacos_L2_0.3.7.svg" alt="Architecture Diagram" loading="lazy"></p><p>Description:</p>',4)),r("ul",null,[e[3]||(e[3]=r("li",null,"r-nacos is designed to support cluster deployment by default. A single machine acts as a one-node cluster, and additional nodes can be added as needed.",-1)),e[4]||(e[4]=r("li",null,"Data persistence is handled by a distributed database using the raft protocol (raft protocol + node file storage), similar to etcd.",-1)),e[5]||(e[5]=r("li",null,[t("To back up and restore data, you only need to manage the files in the "),r("code",null,"RNACOS_CONFIG_DB_DIR:nacos_db"),t(" directory.")],-1)),r("li",null,[e[1]||(e[1]=t("The r-nacos console follows a front-end and back-end separation architecture. The front-end, which relies on nodejs, is hosted in a separate project ")),n(o,{href:"https://github.com/r-nacos/rnacos-console-web",target:"_blank",rel:"noreferrer"},{default:s(()=>e[0]||(e[0]=[t("r-nacos-console-web")])),_:1}),e[2]||(e[2]=t(". The front-end resources are then integrated into this project using cargo, eliminating the need for nodejs during Rust development."))])]),e[10]||(e[10]=i('<p>Details on multi-instance raft and distro distributed protocols will be provided later.</p><h2 id="configuration-center" tabindex="-1">Configuration Center <a class="header-anchor" href="#configuration-center" aria-label="Permalink to &quot;Configuration Center&quot;">​</a></h2><p>Configuration Model Diagram</p><p><img src="https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/rnacos_L4_config001_LR.svg" alt="" loading="lazy"></p><h2 id="configuration-center-raft-protocol" tabindex="-1">Configuration Center Raft Protocol <a class="header-anchor" href="#configuration-center-raft-protocol" aria-label="Permalink to &quot;Configuration Center Raft Protocol&quot;">​</a></h2><p>Key aspects of the raft protocol:</p><ol><li>Nodes are categorized into roles: leader (primary node), follower (secondary node), and candidate (election node).</li><li>The stable state consists of one primary node and multiple secondary nodes.</li><li>The primary node handles write operations. Before committing a write, it must synchronize the log with other nodes. The log is only committed to the state machine once a majority of nodes have successfully written it.</li><li>The primary node periodically sends heartbeats to the secondary nodes. If a secondary node misses a heartbeat, it initiates an election. If it secures votes from a majority of nodes, it becomes the new primary node.</li></ol>',7)),r("p",null,[e[7]||(e[7]=t("For more details, refer to the ")),n(o,{href:"https://docs.qq.com/doc/DY0VxSkVGWHFYSlZJ",target:"_blank",rel:"noreferrer"},{default:s(()=>e[6]||(e[6]=[t("raft protocol paper")])),_:1}),e[8]||(e[8]=t("."))]),e[11]||(e[11]=i('<p>How r-nacos integrates raft:</p><ol><li>The raft protocol is implemented using the async-raft library, focusing on the network and storage layers. In r-nacos, the storage layer&#39;s state machine is the configuration center.</li><li>The configuration center connects to the raft protocol&#39;s state machine, which drives updates to the configuration center.</li></ol><p>Example of a three-node configuration center request processing in r-nacos:</p><p><img src="https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230917182416.png" alt="" loading="lazy"></p><p>Write Process:</p><ol><li>A client sends an update configuration request to a random node.</li><li>At the request entry layer, a raft routing check is performed. If the node is the primary, it processes the request; otherwise, it routes the request to the primary node.</li><li>The primary node writes the request to the raft log.</li><li>The request is synchronized with other secondary nodes.</li><li>Once a majority of nodes (including the primary) have successfully written the log, the request log is committed to the state machine, updating the configuration center. (Other secondary nodes commit during the next log sync or heartbeat.)</li><li>The result is returned to the client.</li></ol><p>Query Process:</p><ol><li>A client sends a query configuration request to a random node.</li><li>The node processes the request like a single machine, directly querying its configuration center data and returning the result.</li></ol><h2 id="registry-class-distro-protocol" tabindex="-1">Registry Class Distro Protocol <a class="header-anchor" href="#registry-class-distro-protocol" aria-label="Permalink to &quot;Registry Class Distro Protocol&quot;">​</a></h2><p>Key aspects of the protocol:</p><ol><li>Each node holds a complete dataset and can provide registration information query services.</li><li>All nodes in the registry are equal, with responsibilities divided by hash. A node can write to the services it manages; otherwise, it forwards the request to the responsible node.</li><li>Services registered via the gRPC protocol are handled directly by the receiving node.</li><li>After a node updates service instance information, it synchronizes the changes with other nodes.</li></ol><p>For more details, refer to the distro protocol implementation in Java Nacos. r-nacos follows the same main logic as the Java version but differs in some implementation details.</p><p>Example of a three-node registry request processing in r-nacos:</p><p><img src="https://github.com/heqingpan/rnacos/raw/master/doc/assets/imgs/20230917182622.png" alt="" loading="lazy"></p><p>HTTP Write Process:</p><ol><li>A client sends a register service instance request to a random node.</li><li>The request bypasses service routing checks. If the node is responsible for the service, it processes the request; otherwise, it routes it to the responsible node.</li><li>The responsible node registers the request in the registry.</li><li>The result is returned to the client.</li><li>The updated data is asynchronously synchronized with other nodes.</li></ol><p>gRPC Write Process (no routing, handled directly by the node):</p><ol><li>A client establishes a gRPC long connection with a random node.</li><li>The client sends a register service instance request.</li><li>The request is registered in the registry as if it were a single machine.</li><li>The result is returned to the client.</li><li>The updated data is asynchronously synchronized with other nodes.</li></ol><p>Query Process:</p><ol><li>A client sends a query service information request to a random node.</li><li>The node processes the request like a single machine, directly querying its registry data and returning the result.</li></ol><h3 id="why-is-the-routing-logic-for-http-writes-different-from-grpc-writes" tabindex="-1">Why is the routing logic for HTTP writes different from gRPC writes? <a class="header-anchor" href="#why-is-the-routing-logic-for-http-writes-different-from-grpc-writes" aria-label="Permalink to &quot;Why is the routing logic for HTTP writes different from gRPC writes?&quot;">​</a></h3><p>This is because gRPC heartbeats are managed as long-lived connections. If a client&#39;s connection drops, all requests on that connection become invalid. [Efficient]</p><p>In contrast, HTTP instance registration is stateless, and the status of instances can only be updated based on their registration time using a timer. Moreover, instances in the registration center are organized by service categories. As a result, HTTP-registered instances need to be routed by service, enabling different nodes to handle different service ranges. [Inefficient]</p><p>Therefore, using the gRPC protocol in the registration center will significantly outperform the HTTP protocol.</p>',24))])}const q=a(h,[["render",u]]);export{w as __pageData,q as default};
