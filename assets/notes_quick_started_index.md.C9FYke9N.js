import{_ as a,D as i,c as n,I as e,a6 as l,o as p}from"./chunks/framework.DxTFFumn.js";const F=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"notes/quick_started/index.md","filePath":"notes/quick_started/index.md","lastUpdated":1725241628000}'),t={name:"notes/quick_started/index.md"},h=l(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><h2 id="一、-安装运行-r-nacos" tabindex="-1">一、 安装运行 r-nacos <a class="header-anchor" href="#一、-安装运行-r-nacos" aria-label="Permalink to &quot;一、 安装运行 r-nacos&quot;">​</a></h2><p>【单机部署】</p><p>方式1：从 <a href="https://github.com/heqingpan/rnacos/releases" target="_blank" rel="noreferrer">github release</a> 下载对应系统的应用包，解压后即可运行。</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解压</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos-x86_64-apple-darwin.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p>Windows 解压后直接运行 rnacos.exe 即可。</p></div><p>方式2: 通过docker 运行</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># stable 是最新正式版本号，也可以指定镜像版本号，如： qingpan/rnacos:v0.4.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qingpan/rnacos:stable</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	--name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mynacos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8848:8848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 9848:9848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10848:10848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	qingpan/rnacos:stable</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p>docker 的容器运行目录是 /io，会从这个目录读写配置文件。</p></div><h4 id="docker-版本说明" tabindex="-1">docker 版本说明 <a class="header-anchor" href="#docker-版本说明" aria-label="Permalink to &quot;docker 版本说明&quot;">​</a></h4><p>应用每次打包都会同时打对应版本的docker包 ，qingpan/rnacos:$tag 。</p><p>每个版本会打两类docker包</p><table tabindex="0"><thead><tr><th>docker包类型</th><th>tag 格式</th><th>示例</th><th>说明</th></tr></thead><tbody><tr><td>gnu debian包</td><td>$version</td><td>qingpan/rnacos:v0.4.0</td><td>docker包基于debian-slim,体积比较大(压缩包36M,解压后102M),运行性能相对较高;</td></tr><tr><td>musl alpine包</td><td>$version-alpine</td><td>qingpan/rnacos:v0.4.0-alpine</td><td>docker包基于alpine,体积比较小(压缩包11M,解压后34M),运行性能相对较低;</td></tr></tbody></table><p>如果不观注版本，可以使用最新正式版本tag:</p><ul><li>最新的gnu正式版本: <code>qingpan/rnacos:stable</code></li><li>最新的alpine正式版本: <code>qingpan/rnacos:stable-alpine</code></li></ul><p>方式3：通过 cargo 编译安装</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>方式4: 下载源码编译运行</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/heqingpan/rnacos.git</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --release</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cargo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>方式5: MacOS 支持通过 brew 安装</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把r-nacos加入taps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tap</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r-nacos/r-nacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># brew 安装 r-nacos</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r-nacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 运行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p></p><p>后续可以直接通过以下命令更新到最新版本：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> r-nacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p>测试、试用推荐使用第1、第2种方式，直接下载就可以使用。</p><p>在 Linux 下第 1、第 2 种方式默认是 musl 版本(性能比 gnu 版本差一些)，在生产服务对性能有要求的可以考虑使用第 3、第 4种在对应环境编译 gnu 版本部署。</p><p>启动配置可以参考： <a href="./../env_config/">运行参数说明</a></p></div><h2 id="二、运行nacos-应用" tabindex="-1">二、运行nacos 应用 <a class="header-anchor" href="#二、运行nacos-应用" aria-label="Permalink to &quot;二、运行nacos 应用&quot;">​</a></h2><p>服务启动后，即可运行原有的 nacos 应用。</p><h3 id="配置中心http-api例子" tabindex="-1">配置中心http api例子 <a class="header-anchor" href="#配置中心http-api例子" aria-label="Permalink to &quot;配置中心http api例子&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 发送 POST 请求到 Nacos 配置中心以发布配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/cs/configs&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dataId=t001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # 配置的唯一标识符，例如 t001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;group=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 配置所属的分组名称，例如 foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;content=contentTest&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 配置的内容，例如 contentTest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/cs/configs?dataId=t001&amp;group=foo&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="注册中心http-api例子" tabindex="-1">注册中心http api例子 <a class="header-anchor" href="#注册中心http-api例子" aria-label="Permalink to &quot;注册中心http api例子&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注册服务实例：发送 POST 请求到 Nacos 注册中心以注册服务实例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/ns/instance&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;port=8000&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 服务实例的端口号，例如 8000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;healthy=true&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # 服务实例的健康状态，true 表示健康</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ip=192.168.1.11&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # 服务实例的 IP 地址，例如 192.168.1.11</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;weight=1.0&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                     # 服务实例的权重，例如 1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;serviceName=nacos.test.001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 服务的名称，例如 nacos.test.001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;groupName=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # 服务实例所属的分组名称，例如 foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;metadata={&quot;app&quot;:&quot;foo&quot;,&quot;id&quot;:&quot;001&quot;}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 服务实例的元数据，以 JSON 字符串形式表示</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注册服务实例：发送 POST 请求到 Nacos 注册中心以注册服务实例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/ns/instance&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;port=8000&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 服务实例的端口号，例如 8000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;healthy=true&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                    # 服务实例的健康状态，true 表示健康</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ip=192.168.1.12&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 服务实例的 IP 地址，例如 192.168.1.12</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;weight=1.0&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 服务实例的权重，例如 1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;serviceName=nacos.test.001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 服务名称，例如 nacos.test.001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;groupName=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # 服务实例所属的分组名称，例如 foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;metadata={&quot;app&quot;:&quot;foo&quot;,&quot;id&quot;:&quot;002&quot;}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 服务实例的元数据，格式为 JSON 字符串</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注册服务实例：发送 POST 请求到 Nacos 注册中心以注册服务实例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;http://127.0.0.1:8848/nacos/v1/ns/instance&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-d </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;port=8000&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     					# 服务实例的端口号，例如 8000</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;healthy=true&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  					# 服务实例的健康状态，true 表示健康</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ip=192.168.1.13&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 服务实例的 IP 地址，例如 192.168.1.13</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;weight=1.0&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 服务实例的权重，例如 1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;serviceName=nacos.test.001&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 服务名称，例如 nacos.test.001</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;groupName=foo&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\ </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                   # 服务实例所属的分组名称，例如 foo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;metadata={&quot;app&quot;:&quot;foo&quot;,&quot;id&quot;:&quot;003&quot;}&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	# 服务实例的元数据，格式为 JSON 字符串</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询服务实例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;http://127.0.0.1:8848/nacos/v1/ns/instance/list?&amp;namespaceId=public&amp;serviceName=foo%40%40nacos.test.001&amp;groupName=foo&amp;clusters=&amp;healthyOnly=true&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>具体的用法参考 nacos.io 的用户指南。</p><p><a href="https://nacos.io/zh-cn/docs/sdk.html" target="_blank" rel="noreferrer">JAVA-SDK</a></p><p><a href="https://nacos.io/zh-cn/docs/other-language.html" target="_blank" rel="noreferrer">其它语言</a></p><p><a href="https://nacos.io/zh-cn/docs/open-api.html" target="_blank" rel="noreferrer">open-api</a></p><h2 id="三、使用r-nacos控制台" tabindex="-1">三、使用r-nacos控制台 <a class="header-anchor" href="#三、使用r-nacos控制台" aria-label="Permalink to &quot;三、使用r-nacos控制台&quot;">​</a></h2><p>从0.4.0版本开始，支持独立端口号的新控制台。新控制台有完备的用户管理、登陆校验、权限控制，支持对外网暴露。</p><p>启动服务后可以在浏览器通过 <code>http://127.0.0.1:10848/rnacos/</code> 访问r-nacos新控制台。</p><p>老控制台<code>http://127.0.0.1:8848/rnacos/</code> 标记废弃，默认不开启，可通过配置开启。老控制台不需要登陆鉴权、不支持用户管理。</p><p>控制台主要包含用户管理、命名空间管理、配置管理、服务管理、服务实例管理。</p><blockquote><p>控制台线上演示</p></blockquote><p>地址： <a href="https://www.bestreven.top/rnacos/" target="_blank" rel="noreferrer">https://www.bestreven.top/rnacos/</a> (演示服务与网址由一位热心用户提供）</p><p>演示用户：</p><ul><li>开发者: <ul><li>用户名: <code>dev</code> ,密码: <code>dev</code></li></ul></li><li>访客: <ul><li>用户名: <code>guest</code>, 密码: <code>guest</code></li></ul></li></ul><p>演示内容：</p><ul><li>配置中心：接近5千个配置</li><li>服务中心：30个服务，每个服务有15个实例，共450个服务实例。</li></ul><blockquote><p>1、用户登陆</p></blockquote><p>在新控制台打开一个地址，如果检测到没有登陆，会自动跳转到登陆页面。 一个用户连续登陆失败5次，会被锁定1个小时。这个次数可以通过启动参数配置。</p><img style="width:400px;" width="400" src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223220425.png"><blockquote><p>2、用户管理</p></blockquote><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20231223222325.png" alt="" loading="lazy"></p><p>系统会默认创建一个名为<code>admin</code>的用户，密码为<code>admin</code>。</p><p>进去控制台后可按需管理用户。</p><p>用户角色权限说明：</p><ol><li>管理员: 所有控制台权限</li><li>开发者：除了用户管理的所有控制台权限</li><li>访客：只能查询配置中心与注册中心的数据，没有编辑权限。</li></ol><p><strong>注意：</strong> 对外暴露的nacos控制台端口前，建议增加一个自定义管理员，把admin用户删除或禁用。</p><blockquote><p>3、配置管理</p></blockquote><p>配置列表管理</p><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155441.png" alt="" loading="lazy"></p><p>新建、编辑配置</p><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155545.png" alt="" loading="lazy"></p><blockquote><p>4、服务列表管理</p></blockquote><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155133.png" alt="" loading="lazy"></p><blockquote><p>5、服务实例管理</p></blockquote><p><img src="https://github.com/r-nacos/r-nacos/raw/master/doc/assets/imgs/20230506155158.png" alt="" loading="lazy"></p><blockquote><p>6、命名空间管理</p></blockquote><p><img src="https://user-images.githubusercontent.com/1174480/268299574-4947b9f8-79e1-48e2-97fe-e9767e26ddc0.png" alt="" loading="lazy"></p>`,77);function r(k,d,c,o,g,u){const s=i("ArticleMetadata");return p(),n("div",null,[e(s),h])}const m=a(t,[["render",r]]);export{F as __pageData,m as default};
