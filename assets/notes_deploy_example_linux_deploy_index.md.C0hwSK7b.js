import{_ as a,c as i,I as n,a8 as l,o as e,E as t}from"./chunks/framework.OlaoD5Y4.js";const p="/docs/assets/1.CFeBRciL.png",r="/docs/assets/2.m7LwMVW3.png",h="/docs/assets/3.B16m1r3N.gif",d="/docs/assets/4.DsvhZosZ.gif",o="/docs/assets/5.BZmgF4At.gif",c="/docs/assets/6.Dfhg9V2Q.gif",k="/docs/assets/7.Cpel5jnG.gif",u="/docs/assets/8.Du78UcfJ.gif",g="/docs/assets/9.CeBt0Mqe.gif",b="/docs/assets/10.CvQ8JeJ5.gif",m="/docs/assets/11.BQvdSFlZ.gif",F="/docs/assets/12.Bc0XWj_h.gif",y="/docs/assets/13.Dn0Zc7_b.gif",C="/docs/assets/14.D-ro2Mbp.gif",v="/docs/assets/15.C9Fn4cEb.png",E="/docs/assets/16.CX4rqkjI.png",B="/docs/assets/17.C5fQYomf.gif",_="/docs/assets/18.DPaMOObr.png",q="/docs/assets/19.BWjQEi5m.png",x="/docs/assets/20.DeXZnYeL.png",f="/docs/assets/21.CifZ5c6j.gif",D="/docs/assets/22.CwIKpxON.png",w="/docs/assets/23.DFPMmoIw.png",A="/docs/assets/24.pxQotP-T.png",z="/docs/assets/25.8U5elbvh.gif",P="/docs/assets/26.wqaMWNuU.gif",N="/docs/assets/27.BM1m6IlK.gif",M="/docs/assets/28.CLFJwy93.gif",I="/docs/assets/29.D1dyFcMP.png",V=JSON.parse('{"title":"第一章：Docker 安装和运行","description":"","frontmatter":{},"headers":[],"relativePath":"notes/deploy_example/linux_deploy/index.md","filePath":"notes/deploy_example/linux_deploy/index.md","lastUpdated":1725322024000}'),L={name:"notes/deploy_example/linux_deploy/index.md"},T=l('<p>作者：heqingpan <a href="mailto:heqingpan@126.com" target="_blank" rel="noreferrer">heqingpan@126.com</a>,许大仙 <a href="mailto:1900919313@qq.com" target="_blank" rel="noreferrer">1900919313@qq.com</a></p><h1 id="第一章-docker-安装和运行" tabindex="-1">第一章：Docker 安装和运行 <a class="header-anchor" href="#第一章-docker-安装和运行" aria-label="Permalink to &quot;第一章：Docker 安装和运行&quot;">​</a></h1><h2 id="_1-1-准备工作" tabindex="-1">1.1 准备工作 <a class="header-anchor" href="#_1-1-准备工作" aria-label="Permalink to &quot;1.1 准备工作&quot;">​</a></h2><ul><li>查看 Linux 操作系统的发行版：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/os-release</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+p+'" alt="image-20240306122747335" loading="lazy"></p><ul><li>查看内核版本：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uname</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sr</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+r+`" alt="image-20240306122841833" loading="lazy"></p><ul><li>关闭 SELinux ：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 SELinux 是否开启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getenforce</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 SELinux 是否开启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/selinux/config</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 永久关闭 SELinux ，需要重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/enforcing/disabled/&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/selinux/config</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭当前会话的 SELinux ，重启之后无效</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setenforce</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 SELinux 是否开启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/selinux/config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+h+`" alt="" loading="lazy"></p><ul><li>关闭 swap 分区：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 swap 分区是否存在</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">free</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 关闭当前会话的 swap ，重启之后无效</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">swapoff</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 永久关闭 swap ，需要重启</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/.*swap.*/#&amp;/&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/fstab</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 swap 分区是否存在</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">free</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+d+'" alt="" loading="lazy"></p><ul><li>关闭防火墙：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+o+`" alt="" loading="lazy"></p><h2 id="_1-2-docker-安装" tabindex="-1">1.2 Docker 安装 <a class="header-anchor" href="#_1-2-docker-安装" aria-label="Permalink to &quot;1.2 Docker 安装&quot;">​</a></h2><ul><li>增加 Docker 源：</li></ul><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p></p><p>某些国家，如：中国等，可能会有 Docker 域名污染等问题，导致官方的 Docker 仓库地址不可用，那么请使用<code> dnf config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</code>。</p></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config-manager</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	--add-repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://download.docker.com/linux/centos/docker-ce.repo</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+c+'" alt="" loading="lazy"></p><ul><li>安装 Docker ：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dnf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-ce-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> containerd.io</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose-plugin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+k+'" alt="" loading="lazy"></p><ul><li>启动 Docker ：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+u+'" alt="" loading="lazy"></p><ul><li>查看 Docker 是否安装成功：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+g+`" alt="" loading="lazy"></p><ul><li>Docker 镜像加速：</li></ul><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p></p><p>某些国家，如：中国等，可能会有 Docker 镜像源地址下线或不可用等问题，导致之前配置的 Docker 镜像源地址不可用；那么，请在<a href="https://status.1panel.top/status/docker" target="_blank" rel="noreferrer">这里</a>查询对应的镜像源地址，并替换。</p></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -pv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tee</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/docker/daemon.json</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;EOF&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;exec-opts&quot;: [&quot;native.cgroupdriver=systemd&quot;],	</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;registry-mirrors&quot;: [</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://du3ia00u.mirror.aliyuncs.com&quot;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.m.daocloud.io&quot;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://hub-mirror.c.163.com&quot;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://mirror.baidubce.com&quot;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.nju.edu.cn&quot;,</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;https://docker.mirrors.sjtug.sjtu.edu.cn&quot;</span></span>
<span class="line highlighted"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;live-restore&quot;: true,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;log-driver&quot;:&quot;json-file&quot;,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;log-opts&quot;: {&quot;max-size&quot;:&quot;500m&quot;, &quot;max-file&quot;:&quot;3&quot;},</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;max-concurrent-downloads&quot;: 10,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;max-concurrent-uploads&quot;: 5,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;storage-driver&quot;: &quot;overlay2&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><div class="note custom-block github-alert"><p class="custom-block-title">NOTE</p><p></p><p>如果上述<strong>阴影</strong>地方的 Docker 镜像源地址失效；那么，请在<a href="https://status.1panel.top/status/docker" target="_blank" rel="noreferrer">这里</a>查询，并替换。</p></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> daemon-reload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="`+b+`" alt="" loading="lazy"></p><h2 id="_1-3-docker-运行" tabindex="-1">1.3 Docker 运行 <a class="header-anchor" href="#_1-3-docker-运行" aria-label="Permalink to &quot;1.3 Docker 运行&quot;">​</a></h2><ul><li>Docker 运行命令：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nacos</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8848:8848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 9848:9848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	-p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 10848:10848</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">	-v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /var/nacos/io:/io:rw</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">	qingpan/rnacos:stable</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p></p><p><code>stable</code> 是最新正式版本号，也可以指定镜像版本号，如： <code>qingpan/rnacos:v0.4.0</code>。</p></div><p><img src="`+m+`" alt="" loading="lazy"></p><ul><li>Docker 镜像版本说明：</li></ul><table tabindex="0"><thead><tr><th>Docker 镜像版本</th><th>tag 格式</th><th>示例</th><th>备注</th></tr></thead><tbody><tr><td>gnu debian包</td><td><code>$version</code></td><td>qingpan/rnacos:v0.4.0</td><td>基于 debian-slim，体积比较大(压缩包 36M，解压后102M)，运行性能相对较高。</td></tr><tr><td>musl alpine包</td><td><code>$version-alpine</code></td><td>qingpan/rnacos:v0.4.0-alpine</td><td>基于 alpine，体积比较小(压缩包 11M，解压后34M)，运行性能相对较低。</td></tr></tbody></table><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p></p><p>如果不关心版本，可以使用最新正式版本，如下所示：</p><ul><li>① 最新的 gnu 正式版本：<code>qingpan/rnacos:stable</code>。</li><li>② 最新的 alpine 正式版本: <code>qingpan/rnacos:stable-alpine</code>。</li><li>③ 目前 MacOS arm 系统运行<code>stable</code>镜像失败，可以先换成<code>stable-alpine</code>镜像，等后面解决 arm <code>stable</code>镜像问题后再把这个注意事项去掉。</li></ul></div><h2 id="_1-4-docker-compose-运行" tabindex="-1">1.4 Docker Compose 运行 <a class="header-anchor" href="#_1-4-docker-compose-运行" aria-label="Permalink to &quot;1.4 Docker Compose 运行&quot;">​</a></h2><ul><li>编写 docker-compose.yaml 文件：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker-compose.yaml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-yaml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  nacos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qingpan/rnacos:stable</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nacos</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8848:8848&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;9848:9848&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;10848:10848&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/var/nacos/io:/io:rw</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">always</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="`+F+'" alt="" loading="lazy"></p><ul><li>运行：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+y+'" alt="" loading="lazy"></p><ul><li>查看是否成功：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ps</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+C+'" alt="" loading="lazy"></p><h2 id="_1-5-使用-r-nacos-控制台" tabindex="-1">1.5 使用 r-nacos 控制台 <a class="header-anchor" href="#_1-5-使用-r-nacos-控制台" aria-label="Permalink to &quot;1.5 使用 r-nacos 控制台&quot;">​</a></h2><h3 id="_1-5-1-访问" tabindex="-1">1.5.1 访问 <a class="header-anchor" href="#_1-5-1-访问" aria-label="Permalink to &quot;1.5.1 访问&quot;">​</a></h3><ul><li>服务启动后，可以在浏览器通过 <code>http://192.168.10.100:8848</code> 来进行访问老控制台：</li></ul><p><img src="'+v+'" alt="image-20240306132348350" loading="lazy"></p><div class="warning custom-block github-alert"><p class="custom-block-title">WARNING</p><p></p><p><code>8848</code>端口属于老的控制台，不需要登录，也不支持用户管理，未来可能被废弃！！！</p></div><ul><li>服务启动后，可以在浏览器通过 <code>http://192.168.10.100:10848</code> 来进行访问新控制台：</li></ul><p><img src="'+E+'" alt="image-20240306132624905" loading="lazy"></p><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p></p><ul><li><p>① 默认的用户名和密码是 <code>admin</code>/<code>admin</code> 。</p></li><li><p>②<code>10848</code>端口属于新的控制台，有完备的用户管理、登陆校验、权限控制，支持对外网暴露。</p></li></ul></div><ul><li>此时，可以登录进去查看一下：</li></ul><p><img src="'+B+'" alt="" loading="lazy"></p><h3 id="_1-5-2-用户管理" tabindex="-1">1.5.2 用户管理 <a class="header-anchor" href="#_1-5-2-用户管理" aria-label="Permalink to &quot;1.5.2 用户管理&quot;">​</a></h3><ul><li>用户管理的角色如下：</li></ul><p><img src="'+_+'" alt="image-20240306133046221" loading="lazy"></p><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p></p><p>对外暴露的 nacos 控制台端口前，建议增加一个自定义管理员，把 admin 用户删除或禁用，默认的角色如下：</p><ul><li>管理员：所有控制台权限。</li><li>开发者：除了用户管理的所有控制台权限。</li><li>访客：只能查询配置中心与注册中心的数据，没有编辑权限。</li></ul></div><ul><li>可以新增几个用户，测试一下：</li></ul><p><img src="'+q+'" alt="image-20240306133443458" loading="lazy"></p><h3 id="_1-5-3-配置管理" tabindex="-1">1.5.3 配置管理 <a class="header-anchor" href="#_1-5-3-配置管理" aria-label="Permalink to &quot;1.5.3 配置管理&quot;">​</a></h3><ul><li>配置列表管理：</li></ul><p><img src="'+x+'" alt="image-20240306133857722" loading="lazy"></p><ul><li>配置编辑：</li></ul><p><img src="'+f+'" alt="" loading="lazy"></p><h3 id="_1-5-4-服务管理" tabindex="-1">1.5.4 服务管理 <a class="header-anchor" href="#_1-5-4-服务管理" aria-label="Permalink to &quot;1.5.4 服务管理&quot;">​</a></h3><ul><li>服务列表管理：</li></ul><p><img src="'+D+'" alt="image-20240306143332871" loading="lazy"></p><ul><li>服务实例管理：</li></ul><p><img src="'+w+'" alt="image-20240306143340543" loading="lazy"></p><h3 id="_1-5-5-命名空间管理" tabindex="-1">1.5.5 命名空间管理 <a class="header-anchor" href="#_1-5-5-命名空间管理" aria-label="Permalink to &quot;1.5.5 命名空间管理&quot;">​</a></h3><ul><li>命名空间列表：</li></ul><p><img src="'+A+`" alt="image-20240306143420569" loading="lazy"></p><h1 id="第二章-软件包安装" tabindex="-1">第二章：软件包安装 <a class="header-anchor" href="#第二章-软件包安装" aria-label="Permalink to &quot;第二章：软件包安装&quot;">​</a></h1><h2 id="_2-1-linux-或-mac-安装和运行" tabindex="-1">2.1 Linux 或 Mac 安装和运行 <a class="header-anchor" href="#_2-1-linux-或-mac-安装和运行" aria-label="Permalink to &quot;2.1 Linux 或 Mac 安装和运行&quot;">​</a></h2><h3 id="_2-1-1-概述" tabindex="-1">2.1.1 概述 <a class="header-anchor" href="#_2-1-1-概述" aria-label="Permalink to &quot;2.1.1 概述&quot;">​</a></h3><ul><li>（对于 Linux 或 Mac 只需要从 <a href="https://github.com/r-nacos/r-nacos/releases" target="_blank" rel="noreferrer">github</a> 下载对应的软件包，解压后即可运行）。</li></ul><div class="important custom-block github-alert"><p class="custom-block-title">IMPORTANT</p><p></p><p>目前，R-Nacos 的仓库已经迁移了，地址在<a href="https://github.com/nacos-group/r-nacos/" target="_blank" rel="noreferrer">这里</a>。</p></div><h3 id="_2-1-2-安装" tabindex="-1">2.1.2 安装 <a class="header-anchor" href="#_2-1-2-安装" aria-label="Permalink to &quot;2.1.2 安装&quot;">​</a></h3><ul><li>下载：</li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>wget -P /opt \\</span></span>
<span class="line"><span>https://github.com/r-nacos/r-nacos/releases/download/v0.4.3/rnacos-x86_64-unknown-linux-musl.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+z+'" alt="" loading="lazy"></p><ul><li>解压：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos-x86_64-unknown-linux-musl.tar.gz</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+P+'" alt="" loading="lazy"></p><h3 id="_2-1-3-前台运行" tabindex="-1">2.1.3 前台运行 <a class="header-anchor" href="#_2-1-3-前台运行" aria-label="Permalink to &quot;2.1.3 前台运行&quot;">​</a></h3><ul><li>命令：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./rnacos</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+N+'" alt="" loading="lazy"></p><h3 id="_2-1-4-后台运行" tabindex="-1">2.1.4 后台运行 <a class="header-anchor" href="#_2-1-4-后台运行" aria-label="Permalink to &quot;2.1.4 后台运行&quot;">​</a></h3><ul><li>后台运行：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./rnacos</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rnacos.log</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 2&gt;&amp;1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="'+M+`" alt="" loading="lazy"></p><ul><li>查看指定的进程：</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8848 或 10848</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -anp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8848</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p><img src="`+I+'" alt="image-20240311083941983" loading="lazy"></p><h2 id="_2-2-win-安装和运行" tabindex="-1">2.2 Win 安装和运行 <a class="header-anchor" href="#_2-2-win-安装和运行" aria-label="Permalink to &quot;2.2 Win 安装和运行&quot;">​</a></h2><ul><li>解压直接运行 rnacos.exe 即可：略。</li></ul>',114);function S(O,R,W,j,Z,G){const s=t("ArticleMetadata");return e(),i("div",null,[n(s),T])}const $=a(L,[["render",S]]);export{V as __pageData,$ as default};