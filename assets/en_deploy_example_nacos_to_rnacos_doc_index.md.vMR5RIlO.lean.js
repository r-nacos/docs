import{_ as o,B as r,o as l,c,j as n,a,G as i,w as t,a3 as p}from"./chunks/framework.C4orK2dt.js";const d="/docs/assets/20240718235044.BJpPydPG.png",h="/docs/assets/20240719000940.AaqeeIsA.png",g="/docs/assets/20240719002254.u4Gy80V3.png",m="/docs/assets/20240719005524.LT0QBIL-.png",u="/docs/assets/20240719090037.CM9xjR00.png",b="/docs/assets/20240721224800.B5Mb9MBG.png",f="/docs/assets/20240721225717.BLwqj9Zy.png",y="/docs/assets/20240721225844.Dr5K9ZDj.png",v="/docs/assets/20240721230843.BD3JDO48.png",_="/docs/assets/20240721230943.C2Bk9i5X.png",k="/docs/assets/20240721231711.BL7lZurI.png",x="/docs/assets/20240721231944.DaFNMvqj.png",w="/docs/assets/20240721232033.Z_xiU6nU.png",P="/docs/assets/20240722075241.DkCwAQuX.png",N="/docs/assets/20240722005450.DJVb2n4-.png",C="/docs/assets/20240722075815.CBFoBxfI.png",z=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"en/deploy_example/nacos_to_rnacos_doc/index.md","filePath":"en/deploy_example/nacos_to_rnacos_doc/index.md","lastUpdated":1738043441000}'),S={name:"en/deploy_example/nacos_to_rnacos_doc/index.md"},A={class:"note custom-block github-alert"};function T(M,s,E,D,q,O){const e=r("VPNolebaseInlineLinkPreview");return l(),c("div",{"data-pagefind-body":!0},[s[10]||(s[10]=n("h2",{id:"_1-introduction",tabindex:"-1"},[a("1. Introduction "),n("a",{class:"header-anchor",href:"#_1-introduction","aria-label":'Permalink to "1. Introduction"'},"​")],-1)),s[11]||(s[11]=n("p",null,"Many students, after discovering the features of r-nacos, initially use it only in development and testing environments.",-1)),s[12]||(s[12]=n("p",null,"After some time, some students consider migrating from nacos to r-nacos for production environments as well.",-1)),s[13]||(s[13]=n("p",null,"Some students who previously used nacos services plan to switch to r-nacos after learning about it.",-1)),s[14]||(s[14]=n("p",null,"So, how can we smoothly migrate from nacos to r-nacos?",-1)),n("div",A,[s[2]||(s[2]=n("p",{class:"custom-block-title"},"提醒",-1)),s[3]||(s[3]=n("p",null,null,-1)),n("p",null,[i(e,{href:"https://github.com/nacos-group/r-nacos",target:"_blank",rel:"noreferrer"},{default:t(()=>s[0]||(s[0]=[a("r-nacos")])),_:1}),s[1]||(s[1]=a(" Overview:"))]),s[4]||(s[4]=n("ul",null,[n("li",null,[n("p",null,"① r-nacos is a nacos service built in rust. Compared to java nacos, it offers the same features, starts faster, uses fewer system resources (initial memory less than 10 M), performs better, and runs more stably.")]),n("li",null,[n("p",null,"② r-nacos is designed to be fully compatible with the latest nacos client SDK protocols (including 1.x http OpenApi and 2.x grpc protocol), allowing applications using nacos to migrate seamlessly to r-nacos.")])],-1))]),s[15]||(s[15]=p('<h2 id="_2-migration-plan" tabindex="-1">2. Migration Plan <a class="header-anchor" href="#_2-migration-plan" aria-label="Permalink to &quot;2. Migration Plan&quot;">​</a></h2><h3 id="_2-1-analyzing-the-data-to-migrate" tabindex="-1">2.1 Analyzing the Data to Migrate <a class="header-anchor" href="#_2-1-analyzing-the-data-to-migrate" aria-label="Permalink to &quot;2.1 Analyzing the Data to Migrate&quot;">​</a></h3><p>The migration goal is clear. Before planning the migration, we need to analyze the data to be migrated.</p><p><img src="'+d+'" alt="" loading="lazy"></p><p>Migrating from nacos to r-nacos mainly involves four types of data:</p><ol><li>Nacos authentication user data</li><li>Namespace data</li><li>Configuration data</li><li>Service instance data</li></ol><p>Nacos user data, namespace data, and configuration data are persistent and need to be set up and migrated beforehand. Service instance data is dynamic and should automatically register after the switch, so it doesn&#39;t need to be migrated in advance.</p><h3 id="_2-2-migration-phases-and-steps" tabindex="-1">2.2 Migration Phases and Steps <a class="header-anchor" href="#_2-2-migration-phases-and-steps" aria-label="Permalink to &quot;2.2 Migration Phases and Steps&quot;">​</a></h3><p>We can break the migration into three phases:</p><ol><li><p>Pre-migration preparation;</p></li><li><p>Migration;</p></li><li><p>Post-migration wrap-up;</p></li><li><p>Pre-migration Preparation</p></li></ol><p><img src="'+h+'" alt="" loading="lazy"></p><ol><li><p>Deploy r-nacos for data migration and entry before the migration. (If nacos and r-nacos are on the same machine, start r-nacos with a temporary port and update it during migration.)</p></li><li><p>Enter the application-dependent user information in the r-nacos console to initialize user data.</p></li><li><p>Enter namespace data in the r-nacos console;</p></li><li><p>Export data from the nacos console by namespace (each namespace exports a file); then import this configuration data into the corresponding namespace in the r-nacos console to complete the migration.</p></li><li><p>Migration Phase</p></li></ol><p>Once data migration is done, start the traffic migration.</p><p><img src="'+g+'" alt="" loading="lazy"></p><p>Switch the application request traffic to r-nacos. Different scenarios require different approaches:</p><div class="note custom-block github-alert"><p class="custom-block-title">提醒</p><p></p><ul><li>① For applications directly requesting nacos services: r-nacos must replace nacos on the same machine; shut down nacos first, then change r-nacos&#39;s port to the original nacos port and start it to complete the switch.</li><li>② For applications requesting nginx and reverse proxying to nacos: update the nginx configuration to point to r-nacos instead of nacos, then reload the configuration to complete the switch.</li></ul></div><p>After the traffic migration, monitor the application and r-nacos to ensure they perform as expected.</p><div class="caution custom-block github-alert"><p class="custom-block-title">注意</p><p></p><p>Even if the goal is to enable authentication, do not enable interface authentication (<code>RNACOS_ENABLE_OPEN_API_AUTH=false</code>) at this stage to avoid blocking applications using old tokens from nacos.</p></div><ol start="3"><li>Post-migration Wrap-up</li></ol><p><img src="'+m+'" alt="" loading="lazy"></p><p>After the migration is stable for a while, you can remove nacos and keep only r-nacos.</p><p>If you need to enable interface authentication, follow these steps:</p><div class="note custom-block github-alert"><p class="custom-block-title">提醒</p><p></p><ul><li>① Wait for the old tokens of the applications to expire (default is 5 hours) and have them reacquire new tokens from r-nacos, then enable the interface authentication configuration and restart r-nacos (r-nacos restarts in seconds, with minimal impact on applications).</li><li>② Alternatively, restart the applications in batches to force them to use r-nacos tokens, then enable the interface authentication configuration and restart r-nacos.</li></ul></div><p>This completes the migration from nacos to r-nacos.</p><h2 id="_3-migration-scenarios" tabindex="-1">3. Migration Scenarios <a class="header-anchor" href="#_3-migration-scenarios" aria-label="Permalink to &quot;3. Migration Scenarios&quot;">​</a></h2><p>The previous section outlined the migration steps, which might have seemed a bit abstract. To provide a clearer understanding, we’ll now present two specific migration scenarios.</p><h3 id="_3-1-migration-plan-for-applications-directly-connected-to-a-single-node-nacos" tabindex="-1">3.1 Migration Plan for Applications Directly Connected to a Single-Node Nacos <a class="header-anchor" href="#_3-1-migration-plan-for-applications-directly-connected-to-a-single-node-nacos" aria-label="Permalink to &quot;3.1 Migration Plan for Applications Directly Connected to a Single-Node Nacos&quot;">​</a></h3><p>Deployment Diagram:</p><p><img src="'+u+'" alt="" loading="lazy"></p><p>Nacos Persistence Content:</p><p><img src="'+b+'" alt="" loading="lazy"></p><div class="note custom-block github-alert"><p class="custom-block-title">提醒</p><p></p><p>Nacos Usage:</p><ul><li>① A single Nacos instance is deployed on 10.0.24.9, using the default ports 8848 and 8948 to provide services.</li><li>② Two namespaces, pre and prod, are configured on Nacos to serve the pre-production and production environments, respectively.</li><li>③ There are 3 applications, each with 2 instances using Nacos services; in total, there are two environments, with one environment containing 3 configuration files, 3 services, and 6 instances.</li><li>④ The application uses the username: <code>xxx_app_id</code>, password: <code>a07a6deb5e56</code>.</li></ul></div>',32)),n("p",null,[s[6]||(s[6]=a("Goal: Deploy r-nacos on the same machine to replace Nacos and provide services, using the ")),i(e,{href:"https://r-nacos.github.io/docs/notes/deploy_example/linux_systemd_deploy/",target:"_blank",rel:"noreferrer"},{default:t(()=>s[5]||(s[5]=[a("systemd deployment method")])),_:1}),s[7]||(s[7]=a("."))]),s[16]||(s[16]=p(`<h4 id="_3-1-1-migration-steps-—-pre-migration" tabindex="-1">3.1.1 Migration Steps — Pre-Migration <a class="header-anchor" href="#_3-1-1-migration-steps-—-pre-migration" aria-label="Permalink to &quot;3.1.1 Migration Steps — Pre-Migration&quot;">​</a></h4><p><strong>Step 1</strong>: Deploy r-nacos on 10.0.24.9 using a temporary port 8858. Here, we assume the deployment is done using the Linux systemd method. Refer to the r-nacos documentation for specific deployment details, which will not be expanded here. Key configuration items are as follows:</p><div class="language-properties vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">properties</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># r-nacos listens on HTTP port, using temporary port 8858, which will be adjusted later during the switchover</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RNACOS_HTTP_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=8858</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># r-nacos listens on gRPC port, gRPC port is not configured here, default value: HTTP port + 1000</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># RNACOS_GRPC_PORT=9858</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># r-nacos independent console port, no port conflict, can directly use the formal port</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RNACOS_HTTP_CONSOLE_PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=10848</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">RNACOS_ENABLE_OPEN_API_AUTH</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Note: If using the Docker startup method, the configuration ports do not need to be changed, only the corresponding external mapped ports need to be modified.</p><p><strong>Step 2</strong>: Initialize user information. Access <code>http://10.0.24.9:10848/rnacos/</code> to enter the console. Add application-dependent users, username: <code>xxx_app_id</code>, password: <code>a07a6deb5e56</code>.</p><p><img src="`+f+'" alt="" loading="lazy"></p><p><strong>Step 3</strong>: Initialize namespaces. Initialize namespaces pre and prod.</p><p><img src="'+y+'" alt="" loading="lazy"></p><p><strong>Step 4</strong>: Migrate configuration information.</p><ol><li>Export configurations from Nacos.</li></ol><p><img src="'+v+'" alt="" loading="lazy"></p><p>Export configurations under the pre and prod namespaces separately.</p><p><img src="'+_+'" alt="" loading="lazy"></p><p>The exported file name format is: <code>nacos_config_export_20240721230938.zip</code>.</p><p>Note: Remember to modify the file name to add namespace tags after each export to avoid selecting the wrong file during import.</p><ol start="2"><li>Import configurations into r-nacos. Import the configuration files exported from Nacos in the previous step into the pre and prod namespaces of r-nacos.</li></ol><p>a) Enter the r-nacos console -&gt; Configuration List page, select the corresponding namespace.</p><p><img src="'+k+'" alt="" loading="lazy"></p><p>b) Upload and import configuration files.</p><p><img src="'+x+'" alt="" loading="lazy"> After import: <img src="'+w+`" alt="" loading="lazy"></p><p>The above operations are for the pre namespace; repeat the same for the prod namespace, which will not be expanded here.</p><h4 id="_3-1-2-migration-steps-during-migration" tabindex="-1">3.1.2 Migration Steps - During Migration <a class="header-anchor" href="#_3-1-2-migration-steps-during-migration" aria-label="Permalink to &quot;3.1.2 Migration Steps - During Migration&quot;">​</a></h4><p><strong>Step 5</strong>: Once data initialization is complete, shut down r-nacos. First, update the temporary port to the official port to make it easier to start r-nacos directly later.</p><p>Stop the r-nacos service:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>systemctl stop rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Key configuration settings are as follows:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>properties</span></span>
<span class="line"><span># r-nacos http listening port</span></span>
<span class="line"><span>RNACOS_HTTP_PORT=8848</span></span>
<span class="line"><span># r-nacos grpc listening port, not configured here, default value: HTTP port + 1000</span></span>
<span class="line"><span># RNACOS_GRPC_PORT=9848</span></span>
<span class="line"><span># r-nacos independent console port</span></span>
<span class="line"><span>RNACOS_HTTP_CONSOLE_PORT=10848</span></span>
<span class="line"><span># Disable interface authentication during the switchover</span></span>
<span class="line"><span>RNACOS_ENABLE_OPEN_API_AUTH=false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><strong>Step 6</strong>: Shut down nacos</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Navigate to the nacos directory and run the following command to shut down nacos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./bin/shutdown.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><strong>Step 7</strong>: Start r-nacos</p><p>The configuration is already set up before shutting down nacos. Start the r-nacos service directly:</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="_3-1-3-migration-steps-post-migration" tabindex="-1">3.1.3 Migration Steps - Post Migration <a class="header-anchor" href="#_3-1-3-migration-steps-post-migration" aria-label="Permalink to &quot;3.1.3 Migration Steps - Post Migration&quot;">​</a></h4><p><strong>Step 8</strong>: After the traffic switch is complete, monitor the application and r-nacos to ensure they are functioning correctly.</p><p>Check the application service through the upstream application page to verify its status. Monitor r-nacos through the monitoring page to confirm it is being accessed by the application.</p><p><img src="`+P+`" alt="" loading="lazy"></p><p><strong>Step 9</strong>: Enable r-nacos interface authentication (optional)</p><p>Five hours after completing the traffic switch, enable r-nacos interface authentication.</p><p>Key configuration settings are as follows:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>properties</span></span>
<span class="line"><span># r-nacos http listening port</span></span>
<span class="line"><span>RNACOS_HTTP_PORT=8848</span></span>
<span class="line"><span># r-nacos grpc listening port, not configured here, default value: HTTP port + 1000</span></span>
<span class="line"><span># RNACOS_GRPC_PORT=9848</span></span>
<span class="line"><span># r-nacos independent console port</span></span>
<span class="line"><span>RNACOS_HTTP_CONSOLE_PORT=10848</span></span>
<span class="line"><span># Enable interface authentication</span></span>
<span class="line"><span>RNACOS_ENABLE_OPEN_API_AUTH=true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Restart the r-nacos service:</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>At this point, the migration from nacos to r-nacos is complete.</p><h3 id="_3-2-application-service-linking-nacos-via-nginx-migration-scenario" tabindex="-1">3.2 Application Service Linking Nacos via Nginx Migration Scenario <a class="header-anchor" href="#_3-2-application-service-linking-nacos-via-nginx-migration-scenario" aria-label="Permalink to &quot;3.2 Application Service Linking Nacos via Nginx Migration Scenario&quot;">​</a></h3><p>Deployment Diagram:</p><p><img src="`+N+`" alt="" loading="lazy"></p><p>The Nacos setup remains the same as in the previous scenario, with the addition of an Nginx proxy to facilitate service deployment.</p><p>To switch the Nacos connection through Nginx, simply update the Nginx configuration by replacing the original Nacos address with the r-nacos address. Then, reload the configuration using <code>nginx -s reload</code> to complete the traffic redirection.</p><h4 id="_3-2-1-migration-steps-before-migration" tabindex="-1">3.2.1 Migration Steps - Before Migration <a class="header-anchor" href="#_3-2-1-migration-steps-before-migration" aria-label="Permalink to &quot;3.2.1 Migration Steps - Before Migration&quot;">​</a></h4><p>The steps are identical to steps 1, 2, 3, and 4 from the previous scenario, so they won&#39;t be detailed here.</p><h4 id="_3-2-2-migration-steps-during-migration" tabindex="-1">3.2.2 Migration Steps - During Migration <a class="header-anchor" href="#_3-2-2-migration-steps-during-migration" aria-label="Permalink to &quot;3.2.2 Migration Steps - During Migration&quot;">​</a></h4><p><strong>Step 5</strong>: Update the Nginx configuration to replace the original Nacos address with the r-nacos address.</p><p>Original Nginx Configuration:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    # nacos http, using http reverse proxy</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       8848;</span></span>
<span class="line"><span>        listen  [::]:8848;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location /nacos {</span></span>
<span class="line"><span>            proxy_pass http://10.0.24.9:8848;</span></span>
<span class="line"><span>            proxy_set_header Host $proxy_host;</span></span>
<span class="line"><span>            proxy_set_header  Connection &quot;&quot;;</span></span>
<span class="line"><span>            proxy_http_version  1.1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stream {</span></span>
<span class="line"><span>    # nacos grpc, using tcp reverse proxy</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       9848;</span></span>
<span class="line"><span>        proxy_pass http://10.0.24.9:9848;</span></span>
<span class="line"><span>        proxy_connect_timeout 5s;</span></span>
<span class="line"><span>        proxy_timeout 20s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Updated Nginx Configuration:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http {</span></span>
<span class="line"><span>    # nacos http, using http reverse proxy</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       8848;</span></span>
<span class="line"><span>        listen  [::]:8848;</span></span>
<span class="line"><span>        server_name  localhost;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location /nacos {</span></span>
<span class="line"><span>            proxy_pass http://10.0.24.9:8858;</span></span>
<span class="line"><span>            proxy_set_header Host $proxy_host;</span></span>
<span class="line"><span>            proxy_set_header  Connection &quot;&quot;;</span></span>
<span class="line"><span>            proxy_http_version  1.1;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stream {</span></span>
<span class="line"><span>    # nacos grpc, using tcp reverse proxy</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       9848;</span></span>
<span class="line"><span>        proxy_pass http://10.0.24.9:9858;</span></span>
<span class="line"><span>        proxy_connect_timeout 5s;</span></span>
<span class="line"><span>        proxy_timeout 20s;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>Execute <code>nginx -s reload</code> to reload the configuration and finalize the traffic switch.</p><p>After switching:</p><p><img src="`+C+'" alt="" loading="lazy"></p><h4 id="_3-2-3-migration-steps-post-migration" tabindex="-1">3.2.3 Migration Steps - Post-Migration <a class="header-anchor" href="#_3-2-3-migration-steps-post-migration" aria-label="Permalink to &quot;3.2.3 Migration Steps - Post-Migration&quot;">​</a></h4><p>The steps are the same as steps 8 and 9 in the previous scenario, so they won&#39;t be detailed here.</p><h2 id="summary" tabindex="-1">Summary <a class="header-anchor" href="#summary" aria-label="Permalink to &quot;Summary&quot;">​</a></h2><p>When migrating from Nacos to R-Nacos, analyzing the data items to be migrated and planning the tasks for each phase can help create a suitable migration strategy.</p><p>The migration process can be divided into three stages: pre-migration, during migration, and post-migration. This article offers detailed steps based on example scenarios.</p><p>If the case above matches your situation, you might want to add an Nginx reverse proxy layer before accessing Nacos, and then follow the migration steps outlined in Case 2.</p><hr><p>Date: 2024-07-22</p>',67)),n("p",null,[s[9]||(s[9]=a("Author: ")),i(e,{href:"https://github.com/heqingpan",target:"_blank",rel:"noreferrer"},{default:t(()=>s[8]||(s[8]=[a("heqingpan")])),_:1})])])}const B=o(S,[["render",T]]);export{z as __pageData,B as default};
