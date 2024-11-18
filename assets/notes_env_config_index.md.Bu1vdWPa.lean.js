import{_ as a,B as e,o as s,c as r,G as n,a6 as i}from"./chunks/framework.-anpL5na.js";const A=JSON.parse('{"title":"部署参数说明","description":"","frontmatter":{},"headers":[],"relativePath":"notes/env_config/index.md","filePath":"notes/env_config/index.md","lastUpdated":1731892547000}'),p={name:"notes/env_config/index.md"};function l(o,t,_,c,h,O){const d=e("ArticleMetadata");return s(),r("div",null,[n(d),t[0]||(t[0]=i(`<p>作者：heqingpan <a href="mailto:heqingpan@126.com" target="_blank" rel="noreferrer">heqingpan@126.com</a></p><h1 id="部署参数说明" tabindex="-1">部署参数说明 <a class="header-anchor" href="#部署参数说明" aria-label="Permalink to &quot;部署参数说明&quot;">​</a></h1><p>同一个应用包需要支持不同场景，就需要支持设置自定义参数。</p><p>r-nacos 运行参数支持通过环境变量，或指定配置文件方式设置。 如果不设置则按默认参数运行。</p><h2 id="设置运行参数的方式" tabindex="-1">设置运行参数的方式 <a class="header-anchor" href="#设置运行参数的方式" aria-label="Permalink to &quot;设置运行参数的方式&quot;">​</a></h2><h3 id="通过环境变更设置参数" tabindex="-1">通过环境变更设置参数 <a class="header-anchor" href="#通过环境变更设置参数" aria-label="Permalink to &quot;通过环境变更设置参数&quot;">​</a></h3><p>例子：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">RNACOS_HTTP_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">8848</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ./rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>这种方式在自定义少量参数时比较方便</p><h3 id="通过指定配置文件方式设置参数" tabindex="-1">通过指定配置文件方式设置参数 <a class="header-anchor" href="#通过指定配置文件方式设置参数" aria-label="Permalink to &quot;通过指定配置文件方式设置参数&quot;">​</a></h3><p>例子</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从0.3.0版本开始支持 -e env_file 运行参数</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./rnacos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env_file</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>如果不指定文件时也会尝试从当前目录下.env文件加载配置参数</p><p>env_file内容的格式是</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>KEY1=VALUE1</span></span>
<span class="line"><span>KEY2=VALUE2</span></span>
<span class="line"><span>KEY3=VALUE3</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>rnacos 运行时支持的环境变量，如果不设置则按默认配置运行。</p><h2 id="运行参数说明" tabindex="-1">运行参数说明 <a class="header-anchor" href="#运行参数说明" aria-label="Permalink to &quot;运行参数说明&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数KEY</th><th>内容描述</th><th>默认值</th><th>示例</th><th>开始支持的版本</th></tr></thead><tbody><tr><td>RNACOS_HTTP_PORT</td><td>rnacos监听http端口</td><td>8848</td><td>8848</td><td>0.1.x</td></tr><tr><td>RNACOS_GRPC_PORT</td><td>rnacos监听grpc端口</td><td>默认是 HTTP端口+1000</td><td>9848</td><td>0.1.x</td></tr><tr><td>RNACOS_HTTP_CONSOLE_PORT</td><td>r-nacos独立控制台端口</td><td>默认是 HTTP端口+2000;设置为0可不开启独立控制台</td><td>10848</td><td>0.4.x</td></tr><tr><td>RNACOS_CONSOLE_LOGIN_ONE_HOUR_LIMIT</td><td>r-nacos控制台登录1小时失败次数限制</td><td>默认是5,一个用户连续登陆失败5次，会被锁定1个小时</td><td>5</td><td>0.4.x</td></tr><tr><td>RNACOS_HTTP_WORKERS</td><td>http工作线程数</td><td>cpu核数</td><td>8</td><td>0.1.x</td></tr><tr><td>RNACOS_CONFIG_DB_FILE</td><td>配置中心的本地数据库文件地址【0.2.x后不在使用】</td><td>config.db</td><td>config.db</td><td>0.1.x</td></tr><tr><td>RNACOS_CONFIG_DB_DIR</td><td>配置中心的本地数据库文件夹, 会在系统运行时自动创建【因语义原因，v0.6.x后推荐使用RNACOS_DATA_DIR】</td><td>nacos_db</td><td>nacos_db</td><td>0.2.x</td></tr><tr><td>RNACOS_DATA_DIR</td><td>本地数据库文件夹, 会在系统运行时自动创建【与RNACOS_CONFIG_DB_DIR等价，用于替代RNACOS_CONFIG_DB_DIR】</td><td>linux,MacOS默认为~/.local/share/r-nacos/nacos_db;windows,docker默认为nacos_db</td><td>nacos_db</td><td>0.6.x</td></tr><tr><td>RNACOS_RAFT_NODE_ID</td><td>节点id</td><td>1</td><td>1</td><td>0.3.0</td></tr><tr><td>RNACOS_RAFT_NODE_ADDR</td><td>节点地址Ip:GrpcPort,单节点运行时每次启动都会生效；多节点集群部署时，只取加入集群时配置的值</td><td>127.0.0.1:GrpcPort</td><td>127.0.0.1:9848</td><td>0.3.0</td></tr><tr><td>RNACOS_RAFT_AUTO_INIT</td><td>是否当做主节点初始化,(只在每一次启动时生效)</td><td>节点1时默认为true,节点非1时为false</td><td>true</td><td>0.3.0</td></tr><tr><td>RNACOS_RAFT_JOIN_ADDR</td><td>是否当做节点加入对应的主节点,LeaderIp:GrpcPort；只在第一次启动时生效</td><td>空</td><td>127.0.0.1:9848</td><td>0.3.0</td></tr><tr><td>RNACOS_RAFT_SNAPSHOT_LOG_SIZE</td><td>raft打包snapshot镜像的日志数量;即变更日志超过这个值则会触发一次打包镜像</td><td>默认值10000</td><td>10000</td><td>0.5.0</td></tr><tr><td>RUST_LOG</td><td>日志等级:debug,info,warn,error;所有http,grpc请求都会打info日志,如果不观注可以设置为error减少日志量</td><td>info</td><td>error</td><td>0.3.0</td></tr><tr><td>RNACOS_ENABLE_NO_AUTH_CONSOLE</td><td>是否开启无鉴权控制台</td><td>false</td><td>false</td><td>0.5.2</td></tr><tr><td>RNACOS_CONSOLE_LOGIN_TIMEOUT</td><td>控制台登陆有效时长(单位为秒)</td><td>一天,86400秒</td><td>86400</td><td>0.5.0</td></tr><tr><td>RNACOS_GMT_OFFSET_HOURS</td><td>日志时间的时区，单位小时；默认为本机时区，运行在docker时需要指定</td><td>local</td><td>8(东8区),-5(西5区)</td><td>0.5.7</td></tr><tr><td>RNACOS_ENABLE_OPEN_API_AUTH</td><td>是否对openapi开启鉴权；（注：nacos切换到r-nacos过程中不要开启鉴权）</td><td>false</td><td>true</td><td>0.5.8</td></tr><tr><td>RNACOS_API_LOGIN_TIMEOUT</td><td>open api鉴权有效时长，单位为秒；(注：从不鉴权到开启鉴权，需要间隔对应时长以保证客户端token能更新生效)</td><td>一小时,3600秒</td><td>3600</td><td>0.5.8</td></tr><tr><td>RNACOS_CLUSTER_TOKEN</td><td>集群间的通信请求校验token，空表示不开启校验，设置后只有相同token的节点间才可通讯</td><td>空字符串</td><td>1234567890abcdefg</td><td>0.5.8</td></tr><tr><td>RNACOS_BACKUP_TOKEN</td><td>数据备份接口请求校验token，空或长度小于32位表示不开启备份接口</td><td>空字符串</td><td>1234567890abcdefg1234567890abcdefg</td><td>0.6.6</td></tr><tr><td>RNACOS_INIT_ADMIN_USERNAME</td><td>初始化管理员用户名，只在主节点第一次启动时生效</td><td>admin</td><td>rnacos</td><td>0.5.11</td></tr><tr><td>RNACOS_INIT_ADMIN_PASSWORD</td><td>初始化管理员密码，只在主节点第一次启动时生效</td><td>admin</td><td>rnacos123456</td><td>0.5.11</td></tr><tr><td>RNACOS_ENABLE_METRICS</td><td>是否开启监控指标功能</td><td>true</td><td>true</td><td>0.5.13</td></tr><tr><td>RNACOS_METRICS_ENABLE_LOG</td><td>是否开启打印监控指标日志</td><td>false</td><td>false</td><td>0.5.21</td></tr><tr><td>RNACOS_METRICS_COLLECT_INTERVAL_SECOND</td><td>监控指标采集指标间隔,单位秒,最小间隔为1秒,不能小于RNACOS_METRICS_LOG_INTERVAL_SECOND</td><td>15</td><td>5</td><td>0.5.14</td></tr><tr><td>RNACOS_METRICS_LOG_INTERVAL_SECOND</td><td>监控指标采集打印到日志的间隔,单位秒,最小间隔为5秒</td><td>60</td><td>30</td><td>0.5.13</td></tr><tr><td>RNACOS_CONSOLE_ENABLE_CAPTCHA</td><td>验证码的开关</td><td>true</td><td>true</td><td>0.5.14</td></tr></tbody></table><p>注：从v0.3.0开始，默认参数启动的节点会被当做只有一个节点，当前节点是主节点的集群部署。支持其它新增的从节点加入。</p>`,19))])}const C=a(p,[["render",l]]);export{A as __pageData,C as default};
