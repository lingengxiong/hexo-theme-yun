"use strict";(self.webpackChunkhexo_theme_yun=self.webpackChunkhexo_theme_yun||[]).push([[807],{9570:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-fffb8e28",path:"/guide/",title:"使用指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"快速开始",slug:"快速开始",children:[{level:3,title:"安装主题",slug:"安装主题",children:[]},{level:3,title:"启用主题",slug:"启用主题",children:[]},{level:3,title:"配置主题",slug:"配置主题",children:[]},{level:3,title:"升级主题",slug:"升级主题",children:[]},{level:3,title:"自动升级",slug:"自动升级",children:[]}]},{level:2,title:"Markdown 样式扩展",slug:"markdown-样式扩展",children:[]},{level:2,title:"其他方式",slug:"其他方式",children:[{level:3,title:"Docker",slug:"docker",children:[]}]}],filePathRelative:"guide/README.md",git:{updatedTime:1638795371e3,contributors:[{name:"喵二",email:"66155308+miaoermua@users.noreply.github.com",commits:1}]}}},6423:(n,s,a)=>{a.r(s),a.d(s,{default:()=>ps});var e=a(6252);const p=(0,e._)("h1",{id:"使用指南",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#使用指南","aria-hidden":"true"},"#"),(0,e.Uk)(" 使用指南")],-1),l=(0,e._)("p",null,"本主题为 Hexo 主题，请确保您已了解 Hexo 的基本使用方式。",-1),o=(0,e.Uk)("你也可以参考我写的新手教程 "),t={href:"https://www.yunyoujun.cn/share/how-to-build-your-site/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("教你如何从零开始搭建一个属于自己的网站 - 云游君的小站"),c=(0,e.Uk)("。"),u=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hexo-cli -g\nhexo init your-blog\n<span class="token builtin class-name">cd</span> your-blog\n<span class="token function">npm</span> <span class="token function">install</span>\nhexo server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',1),i=(0,e.Uk)("更多信息请参见 "),m={href:"https://hexo.io/",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("Hexo 官网"),b=(0,e.Uk)("有任何关于本主题的缺陷报告与功能建议，可以发起 "),d={href:"https://github.com/YunYouJun/hexo-theme-yun/issues",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("Issues"),g=(0,e.Uk)("。"),y=(0,e.Uk)("如果您想要展示您的成果、或者还有其他相关的想法与问题，可前往 "),_={href:"https://github.com/YunYouJun/hexo-theme-yun/discussions",target:"_blank",rel:"noopener noreferrer"},v=(0,e.Uk)("Discussions"),x=(0,e.Uk)("。"),f={href:"https://github.com/YunYouJun/hexo-theme-yun/releases",target:"_blank",rel:"noopener noreferrer"},U=(0,e.Uk)("更新日志"),E=(0,e._)("h2",{id:"快速开始",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#快速开始","aria-hidden":"true"},"#"),(0,e.Uk)(" 快速开始")],-1),w={class:"custom-container tip"},A=(0,e._)("p",{class:"custom-container-title"},"渲染器",-1),N=(0,e.Uk)("如果您没有 "),q=(0,e._)("code",null,"pug",-1),C=(0,e.Uk)(" 与 "),j=(0,e._)("code",null,"stylus",-1),G=(0,e.Uk)(" 的渲染器，请先安装： "),H={href:"https://github.com/hexojs/hexo-renderer-pug",target:"_blank",rel:"noopener noreferrer"},R=(0,e.Uk)("hexo-renderer-pug"),O=(0,e.Uk)(" （这个是 Hexo 官方在维护，但是好像没有下面的星多，更新的勤快。） 或 "),W={href:"https://github.com/maxknee/hexo-render-pug",target:"_blank",rel:"noopener noreferrer"},P=(0,e.Uk)("hexo-render-pug"),Y=(0,e.Uk)(" （以及前者尚未支持开发时热更新，后者支持。） 和 "),D={href:"https://github.com/hexojs/hexo-renderer-stylus",target:"_blank",rel:"noopener noreferrer"},M=(0,e.Uk)("hexo-renderer-stylus"),L=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> hexo-render-pug hexo-renderer-stylus --save\n<span class="token comment"># or</span>\n<span class="token function">yarn</span> <span class="token function">add</span> hexo-render-pug hexo-renderer-stylus\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),S=(0,e.uE)('<h3 id="安装主题" tabindex="-1"><a class="header-anchor" href="#安装主题" aria-hidden="true">#</a> 安装主题</h3><p>进入您的 Hexo 博客根目录，克隆或下载 <code>hexo-theme-yun</code> 主题，置于 <code>themes/yun</code>。</p><blockquote><p>你也可以考虑加上 <code>--depth 1</code> 的参数来只克隆当前版本（体积更小，速度更快）。</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master https://github.com/YunYouJun/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>如果你使用了持续集成，并希望每次构建的版本保持稳定。你可以 fork 本项目，然后克隆你 fork 的项目。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b master https://github.com/你的名字/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote>',5),B=(0,e.Uk)("如果你想体验新版 "),K=(0,e._)("code",null,"hexo-theme-yun",-1),I=(0,e.Uk)("。（"),J={href:"https://www.yunyoujun.cn",target:"_blank",rel:"noopener noreferrer"},V=(0,e.Uk)("云游君的小站"),T=(0,e.Uk)(" 将始终使用最新版作为示例。）"),F=(0,e.uE)('<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone -b dev https://github.com/YunYouJun/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>您可以采用子模块的方式将博客与主题仓库建立关联，而无需将主题一并上传至仓库。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> submodule <span class="token function">add</span> https://github.com/YunYouJun/hexo-theme-yun themes/yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="启用主题" tabindex="-1"><a class="header-anchor" href="#启用主题" aria-hidden="true">#</a> 启用主题</h3><p>修改 Hexo 站点配置文件 <code>_config.yml</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 将主题设置为 hexo-theme-yun</span>\ntheme: yun\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="配置主题" tabindex="-1"><a class="header-anchor" href="#配置主题" aria-hidden="true">#</a> 配置主题</h3><p>在 Hexo 工作目录下新建 <code>source/_data/yun.yml</code>。（若 <code>source/_data</code> 目录不存在，请新建。）</p><p>采用约定大于配置的方式，您仅需在 <code>yun.yml</code> 中自定义您想要覆盖的配置，其余将自动与主题默认配置合并。（这样做也更方便日后的升级）</p>',9),$=(0,e.Uk)("你可以参考我的配置文件 "),z={href:"https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/source/_data/yun.yml",target:"_blank",rel:"noopener noreferrer"},X=(0,e.Uk)("yun.yml - yunyoujun.github.io"),Z=(0,e.Uk)("，是不是很短。"),Q=(0,e._)("br",null,null,-1),nn=(0,e.Uk)(" 因为我开启了 "),sn=(0,e._)("code",null,"algolia",-1),an=(0,e.Uk)("、"),en=(0,e._)("code",null,"wordcount",-1),pn=(0,e.Uk)(" 等需要在其他地方安装或额外配置的东西，所以如果你直接复制我的配置，记得删掉 "),ln=(0,e._)("code",null,"algolia_search",-1),on=(0,e.Uk)(" 和 "),tn=(0,e._)("code",null,"wordcount",-1),rn=(0,e.Uk)("字段。（以及请务必不要照抄我的 "),cn=(0,e._)("code",null,"waline",-1),un=(0,e.Uk)(" 字段！）"),mn=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>如：</p><p><code>avatar</code> 的完整配置如下</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">avatar</span><span class="token punctuation">:</span>\n  <span class="token key atrule">url</span><span class="token punctuation">:</span> /images/avatar.jpg\n  <span class="token key atrule">rounded</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token key atrule">opacity</span><span class="token punctuation">:</span> <span class="token number">1</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>你可以在 <code>yun.yml</code> 中仅定义（当然，全部覆盖也是可以的）</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">avatar</span><span class="token punctuation">:</span>\n  <span class="token key atrule">url</span><span class="token punctuation">:</span> /images/avatar.jpg\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div><h3 id="升级主题" tabindex="-1"><a class="header-anchor" href="#升级主题" aria-hidden="true">#</a> 升级主题</h3><p>如果您是在 <code>yun.yml</code> 中进行配置，那么仅需在 Hexo 工作路径中输入以下命令：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> themes/yun\n<span class="token function">git</span> pull\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>当主题配置出现不兼容更新时，请参见 <a href="/guide/migrate">迁移指南</a>。</p></div><p>如果您修改了主题的 <code>themes/yun/_config.yml</code> 配置文件，那么您升级时可能会遭遇冲突，需要自行调整。</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>请最好不要对主题的任何文件进行修改，除非你确认你拥有一定的开发能力或此后将不会对主题进行升级。</p></div><p>如果你想对主题进行一些定制，你可以在 <code>head</code> 配置项中引入你的资源。</p>',8),kn=(0,e.Uk)("head 头部资源"),bn=(0,e.Uk)("譬如，你想为网站全局添加一个 Aplayer 播放器挂件。（实际上，现在你可以根据这里的 "),dn=(0,e.Uk)("配置"),hn=(0,e.Uk)(" 直接开启全局播放器。）"),gn=(0,e._)("p",null,"这里主要起一个示例作用。",-1),yn=(0,e.Uk)("文章内部播放器，你可以考虑直接使用 "),_n={href:"https://github.com/MoePlayer/hexo-tag-aplayer",target:"_blank",rel:"noopener noreferrer"},vn=(0,e.Uk)("hexo-tag-aplayer"),xn=(0,e.uE)('<p>你可以在 Hexo 根目录的 <code>source/js</code> 文件夹下新建 <code>load-aplayer.js</code> 文件。</p><blockquote><p>若 <code>js</code> 文件夹不存在，请新建。</p></blockquote><p>通过 <code>createElement</code> 的方式，<code>append</code> 到 <code>body</code> 容器中。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;DOMContentLoaded&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> apContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  apContainer<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token string">&quot;aplayer&quot;</span><span class="token punctuation">;</span>\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>apContainer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> ap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">APlayer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    container<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;aplayer&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    fixed<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    audio<span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        name<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>\n        artist<span class="token operator">:</span> <span class="token string">&quot;artist&quot;</span><span class="token punctuation">,</span>\n        url<span class="token operator">:</span> <span class="token string">&quot;url.mp3&quot;</span><span class="token punctuation">,</span>\n        cover<span class="token operator">:</span> <span class="token string">&quot;cover.jpg&quot;</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>并在 <code>yun.yml</code> 中设置 <code>head</code> 选项来引入 css 或 js。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">head</span><span class="token punctuation">:</span>\n  <span class="token key atrule">css</span><span class="token punctuation">:</span>\n    <span class="token key atrule">aplayer</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css\n  <span class="token key atrule">js</span><span class="token punctuation">:</span>\n    <span class="token key atrule">defer</span><span class="token punctuation">:</span>\n      <span class="token key atrule">aplayer</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js\n      <span class="token key atrule">loadAplayer</span><span class="token punctuation">:</span> /js/load<span class="token punctuation">-</span>aplayer.js\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="自动升级" tabindex="-1"><a class="header-anchor" href="#自动升级" aria-hidden="true">#</a> 自动升级</h3>',7),fn=(0,e.Uk)("你想要完全自动更新，时刻保持最新主题，可以采用持续集成（如 "),Un={href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"},En=(0,e.Uk)("GitHub Actions"),wn=(0,e.Uk)(", "),An={href:"https://travis-ci.com/",target:"_blank",rel:"noopener noreferrer"},Nn=(0,e.Uk)("Travis"),qn=(0,e.Uk)(" 等）。"),Cn=(0,e.Uk)("你可以参考我的 GitHub Action 配置文件 "),jn={href:"https://github.com/YunYouJun/yunyoujun.github.io/blob/hexo/.github/workflows/gh-pages.yml",target:"_blank",rel:"noopener noreferrer"},Gn=(0,e.Uk)("gh-pages.yml"),Hn=(0,e.Uk)("。(照抄配置，放在对应文件夹下即可，GitHub Actions 为 GitHub 自带的服务。) 若你没有使用 "),Rn=(0,e._)("code",null,"algolia_search",-1),On=(0,e.Uk)("，请删除 "),Wn=(0,e._)("code",null,"algolia",-1),Pn=(0,e.Uk)(" 相关部分。"),Yn=(0,e.uE)('<blockquote><p>我采用的是这种做法，但我从良心上并不推荐你也如此，因为这是我自己的主题，自然对潜在的 BUG 拥有一定的容忍度。<br> 时刻保持与仓库版本相同，可能会遇到新引入的 BUG。<br> 当然你愿意当小白鼠的话，可以一试。顺便给咱反馈问题。个人角度上，是十分欢迎的。</p></blockquote><p>如果你想要克隆稳定版本的主题，你可以自行 fork，然后修改源项目地址为你 fork 后的项目地址即可。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n  git clone -b dev https://github.com/YunYouJun/hexo-theme-yun.git themes/yun</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="markdown-样式扩展" tabindex="-1"><a class="header-anchor" href="#markdown-样式扩展" aria-hidden="true">#</a> Markdown 样式扩展</h2>',4),Dn={href:"https://www.yunyoujun.cn/yun/markdown.html",target:"_blank",rel:"noopener noreferrer"},Mn=(0,e.Uk)("效果预览与说明"),Ln=(0,e.uE)('<ul><li>多彩引用标签</li></ul><h2 id="其他方式" tabindex="-1"><a class="header-anchor" href="#其他方式" aria-hidden="true">#</a> 其他方式</h2><h3 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h3><p>如果你已对 Docker 有所了解，并想要使用配置完毕的现有环境。</p><p>可以按照下面的说明使用 Docker 构建一个定制好的环境，里面包含了大部分的插件。 这样您后续基本就不需要关心插件问题了，需要关心的只有如何书写配置文件。</p><p>请在 hexo 根目录创建名为 <code>docker-compose.yml</code> 的文件并填入下列内容。</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">cli</span><span class="token punctuation">:</span>\n    <span class="token key atrule">user</span><span class="token punctuation">:</span> root\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> hexo<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>yun\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> hexo\n    <span class="token key atrule">build</span><span class="token punctuation">:</span>\n      <span class="token key atrule">context</span><span class="token punctuation">:</span> .\n      <span class="token key atrule">dockerfile</span><span class="token punctuation">:</span> Dockerfile\n      <span class="token key atrule">args</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> CHANGE_APK_SOURCE=true <span class="token comment"># 更换 APK 源为阿里源</span>\n        <span class="token punctuation">-</span> CHANGE_NPM_SOURCE=true <span class="token comment"># 更换 NPM 源为腾讯源</span>\n    <span class="token key atrule">working_dir</span><span class="token punctuation">:</span> /blog\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> NODE_ENV=production <span class="token comment"># 将 node 的配置切换到生产环境</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> ./_config.yml<span class="token punctuation">:</span>/blog/_config.yml <span class="token comment"># 挂载根目录配置文件</span>\n      <span class="token punctuation">-</span> ./themes<span class="token punctuation">:</span>/blog/themes <span class="token comment"># 挂载主题目录</span>\n      <span class="token punctuation">-</span> ./scaffolds<span class="token punctuation">:</span>/blog/scaffolds <span class="token comment"># 挂载模板目录</span>\n      <span class="token punctuation">-</span> ./source<span class="token punctuation">:</span>/blog/source <span class="token comment"># 挂载资源目录</span>\n      <span class="token punctuation">-</span> ./public<span class="token punctuation">:</span>/blog/public <span class="token comment"># 挂载 HTML 的生成目录</span>\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 4000<span class="token punctuation">:</span><span class="token number">4000</span> <span class="token comment"># 将 Docker 内的 4000 端口映射到主机的 4000 端口</span>\n    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token string">&quot;sleep 24h&quot;</span> <span class="token comment"># 休眠 shell 24 小时防止容器自动关闭</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>然后在 hexo 根目录创建名为 <code>Dockerfile</code> 的文件并填入下列内容。</p><div class="language-docker ext-docker line-numbers-mode"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> node:12.20.2-alpine <span class="token keyword">AS</span> base</span>\n<span class="token instruction"><span class="token keyword">ARG</span> CHANGE_APK_SOURCE=false</span>\n<span class="token instruction"><span class="token keyword">ARG</span> CHANGE_NPM_SOURCE=false</span>\n<span class="token instruction"><span class="token keyword">ENV</span> NPM_CONFIG_LOGLEVEL=info</span>\n<span class="token instruction"><span class="token keyword">ENV</span> NODE_ENV=production</span>\n<span class="token instruction"><span class="token keyword">WORKDIR</span> /</span>\n<span class="token instruction"><span class="token keyword">RUN</span>     set -xe <span class="token operator">\\</span>\n    &amp;&amp;  if [ <span class="token variable">${CHANGE_APK_SOURCE}</span> = true ]; then <span class="token operator">\\</span>\n            sed -i <span class="token string">&#39;s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/&#39;</span> /etc/apk/repositories ; <span class="token operator">\\</span>\n        fi <span class="token operator">\\</span>\n    &amp;&amp;  if [ <span class="token variable">${CHANGE_NPM_SOURCE}</span> = true ] ; then <span class="token operator">\\</span>\n            npm config set registry http://mirrors.cloud.tencent.com/npm/ ; <span class="token operator">\\</span>\n        fi <span class="token operator">\\</span>\n    &amp;&amp;  apk update <span class="token operator">\\</span>\n    &amp;&amp;  apk add --no-cache <span class="token operator">\\</span>\n            git <span class="token operator">\\</span>\n            libc6-compat <span class="token operator">\\</span>\n    &amp;&amp;  npm -g config set user root <span class="token operator">\\</span>\n    &amp;&amp;  npx hexo init blog <span class="token operator">\\</span>\n    &amp;&amp;  cd blog <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-cli <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-server <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-render-pug <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-renderer-stylus <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-tag-aplayer <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-generator-sitemap <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-generator-search <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-generator-tag <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-generator-category <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-algoliasearch <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-wordcount <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-generator-feed <span class="token operator">\\</span>\n    <span class="token comment"># &amp;&amp;  npm install --save hexo-helper-live2d \\</span>\n    <span class="token comment"># &amp;&amp;  npm install --save hexo-abbrlink \\</span>\n    <span class="token comment"># &amp;&amp;  npm install --save hexo-math \\</span>\n    <span class="token comment"># &amp;&amp;  npm install --save hexo-filter-mathjax \\</span>\n    &amp;&amp;  npm install --save hexo-tag-common <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-widget-tree <span class="token operator">\\</span>\n    &amp;&amp;  npm install --save hexo-blog-encrypt</span>\n\n<span class="token instruction"><span class="token keyword">FROM</span> node:12.20.2-alpine</span>\n<span class="token instruction"><span class="token keyword">ENV</span> NPM_CONFIG_LOGLEVEL=info</span>\n<span class="token instruction"><span class="token keyword">ENV</span> NODE_ENV=production</span>\n<span class="token instruction"><span class="token keyword">ARG</span> CHANGE_APK_SOURCE=false</span>\n<span class="token instruction"><span class="token keyword">ARG</span> CHANGE_NPM_SOURCE=false</span>\n<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">base</span></span> /blog /blog</span>\n<span class="token instruction"><span class="token keyword">WORKDIR</span> /</span>\n<span class="token instruction"><span class="token keyword">RUN</span>     set -xe <span class="token operator">\\</span>\n    &amp;&amp;  if [ <span class="token variable">${CHANGE_APK_SOURCE}</span> = true ]; then <span class="token operator">\\</span>\n            sed -i <span class="token string">&#39;s/dl-cdn.alpinelinux.org/mirrors.aliyun.com/&#39;</span> /etc/apk/repositories ; <span class="token operator">\\</span>\n        fi <span class="token operator">\\</span>\n    &amp;&amp;  if [ <span class="token variable">${CHANGE_NPM_SOURCE}</span> = true ] ; then <span class="token operator">\\</span>\n            npm config set registry http://mirrors.cloud.tencent.com/npm/ ; <span class="token operator">\\</span>\n        fi <span class="token operator">\\</span>\n    &amp;&amp;  apk update <span class="token operator">\\</span>\n    &amp;&amp;  apk add --no-cache git <span class="token operator">\\</span>\n    &amp;&amp;  npm -g config set user root</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><p>然后请在 hexo 根目录执行 <code>docker-compose build</code> 来构建镜像。</p><p>镜像构建完成后可以在 hexo 根目录执行 <code>docker-compose up -d</code> 来启动容器。</p><p>启动容器后您可以继续按照文档的指示来配置您的博客， 配置完毕后可以执行下列命令来进行测试和部署等操作。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 启动测试服务器并可以在 http://localhost:4000 查看测试效果</span>\ndocker <span class="token builtin class-name">exec</span> hexo npx hexo s\n\n<span class="token comment"># 生成 HTML 文件到 hexo 根目录的 public 目录下</span>\ndocker <span class="token builtin class-name">exec</span> hexo npx hexo g\n\n<span class="token comment"># 部署博客到 Github 等平台</span>\ndocker <span class="token builtin class-name">exec</span> hexo npx hexo d\n\n<span class="token comment"># 清理生成的文件</span>\ndocker <span class="token builtin class-name">exec</span> hexo npx hexo c\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',13),Sn={class:"custom-container warning"},Bn=(0,e._)("p",{class:"custom-container-title"},"WARNING",-1),Kn=(0,e._)("p",null,"出于一些考虑容器中并未提供下列插件：",-1),In={href:"https://github.com/EYHN/hexo-helper-live2d",target:"_blank",rel:"noopener noreferrer"},Jn=(0,e.Uk)("hexo-helper-live2d"),Vn=(0,e.Uk)("：此插件一旦安装便默认开启， 故默认不予安装。"),Tn={href:"https://github.com/rozbo/hexo-abbrlink",target:"_blank",rel:"noopener noreferrer"},Fn=(0,e.Uk)("hexo-abbrlink"),$n=(0,e.Uk)("：此插件一旦安装便默认开启， 故默认不予安装。"),zn={href:"https://github.com/hexojs/hexo-math",target:"_blank",rel:"noopener noreferrer"},Xn=(0,e.Uk)("hexo-math"),Zn=(0,e.Uk)("：此插件是 KaTeX 的备用项， 如果您不打算使用 KaTeX 可以启用此插件，但此插件默认不予安装。"),Qn={href:"https://github.com/next-theme/hexo-filter-mathjax",target:"_blank",rel:"noopener noreferrer"},ns=(0,e.Uk)("hexo-filter-mathjax"),ss=(0,e.Uk)("：同 hexo-math。"),as=(0,e._)("p",null,[(0,e.Uk)("如果您对插件有特殊需求可以自行修改 "),(0,e._)("code",null,"Dockerfile"),(0,e.Uk)(" 文件。")],-1),es={},ps=(0,a(3744).Z)(es,[["render",function(n,s){const a=(0,e.up)("OutboundLink"),es=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,l,(0,e._)("p",null,[o,(0,e._)("a",t,[r,(0,e.Wm)(a)]),c]),u,(0,e._)("blockquote",null,[(0,e._)("p",null,[i,(0,e._)("a",m,[k,(0,e.Wm)(a)])])]),(0,e._)("p",null,[b,(0,e._)("a",d,[h,(0,e.Wm)(a)]),g]),(0,e._)("p",null,[y,(0,e._)("a",_,[v,(0,e.Wm)(a)]),x]),(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("a",f,[U,(0,e.Wm)(a)])])]),E,(0,e._)("div",w,[A,(0,e._)("p",null,[N,q,C,j,G,(0,e._)("a",H,[R,(0,e.Wm)(a)]),O,(0,e._)("a",W,[P,(0,e.Wm)(a)]),Y,(0,e._)("a",D,[M,(0,e.Wm)(a)])]),L]),S,(0,e._)("p",null,[B,K,I,(0,e._)("a",J,[V,(0,e.Wm)(a)]),T]),F,(0,e._)("blockquote",null,[(0,e._)("p",null,[$,(0,e._)("a",z,[X,(0,e.Wm)(a)]),Z,Q,nn,sn,an,en,pn,ln,on,tn,rn,cn,un])]),mn,(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Wm)(es,{to:"/guide/config.html#head-%E5%A4%B4%E9%83%A8%E8%B5%84%E6%BA%90"},{default:(0,e.w5)((()=>[kn])),_:1})])]),(0,e._)("p",null,[bn,(0,e.Wm)(es,{to:"/guide/additional-package-support.html#%E5%85%A8%E5%B1%80%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A8"},{default:(0,e.w5)((()=>[dn])),_:1}),hn]),gn,(0,e._)("blockquote",null,[(0,e._)("p",null,[yn,(0,e._)("a",_n,[vn,(0,e.Wm)(a)])])]),xn,(0,e._)("p",null,[fn,(0,e._)("a",Un,[En,(0,e.Wm)(a)]),wn,(0,e._)("a",An,[Nn,(0,e.Wm)(a)]),qn]),(0,e._)("p",null,[Cn,(0,e._)("a",jn,[Gn,(0,e.Wm)(a)]),Hn,Rn,On,Wn,Pn]),Yn,(0,e._)("p",null,[(0,e._)("a",Dn,[Mn,(0,e.Wm)(a)])]),Ln,(0,e._)("div",Sn,[Bn,Kn,(0,e._)("ul",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",In,[Jn,(0,e.Wm)(a)]),Vn])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",Tn,[Fn,(0,e.Wm)(a)]),$n])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",zn,[Xn,(0,e.Wm)(a)]),Zn])]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e._)("a",Qn,[ns,(0,e.Wm)(a)]),ss])])]),as])],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}}}]);