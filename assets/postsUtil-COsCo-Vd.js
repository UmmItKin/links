const i=[{id:3,slug:"about_me/website-furture",filename:"about_me/website-furture.md",title:"Future destination of this website",date:"2025-05-30",lastmod:!1,excerpt:"This website destination. (繁體中文)",tags:["personal","website","tech","notification"],content:`
# 更新

最近靈感爆棚，想法超多！

我決定直接重寫現在的網站。

舊網站會繼續運作，不會馬上停掉。

新網站預計會用 Next.js + Vercel + Tailwind（如果沒意外的話）。

另外，我也想多試試後端開發，加入像是登錄功能和後台管理的程式碼。

就這樣決定啦！

新網站應該會用 ummit.dev 這個網域 :)

套件會繼續用 GitHub bot 自動更新。

如果沒什麼重大 bug，我應該也不會主動去修（X

## 為什麼想這樣做？

覺得用純 React 開發網站有點像是從零開始，太多東西要自己搞。

然後在工作上，感覺越來越多使用 Next.js

最後加上自己有興趣，那我直接轉戰去 Next.js好像更爽 (X

研究了一下 Next.js，發現它真的很香：

- Routing：用 pages 來處理路由，簡單又直觀。
- Blog：用 MDX 就能輕鬆實現部落格功能，超方便。
- SEO：Next.js 的 SEO 支援也很強大，省去不少麻煩。

感覺是時候告別純 React，轉戰 Next.js 了 XDD`},{id:4,slug:"about_me/why-i-build-it-website",filename:"about_me/why-i-build-it-website.md",title:"About this website story and why i build it",date:"2025-03-17",lastmod:"2025-05-17",excerpt:"The story behind this 'links' website and why I built it...",tags:["personal","website","story"],content:`

# Introduction

The story behind this 'links' website and the motivation for its creation.

## The Inspiration

This website began as a personal initiative to organize my online presence and serve as a central hub for all my projects, thoughts, and digital footprint.

### Why?

Instead of relying on third-party platforms that don’t offer full control over my content, I decided to build something from the ground up. While I was inspired by existing services like Linktree, I wanted to create a unique solution that truly reflects my vision. 

As someone who values efficiency and dislikes wasting time on unnecessary tasks, I took it upon myself to develop my own product. Thus, the concept of this links website was born.

> This website fully open source with license GPLv3, feel free to use :)`},{id:2,slug:"about_me/name-ummit",filename:"about_me/name-ummit.md",title:"Why my name is UmmIt",date:"2025-03-17",lastmod:"2025-05-30",excerpt:"The story behind my unique username and how it represents me... (繁體中文)",tags:["personal","story","username"],content:`
# 為什麼我的名字是 UmmIt

這是我獨特用戶名的背後故事，以及它代表的意義。

## 名字的起源

UmmIt 這個名字其實是隨機想出來的，過程大概花了半年時間……我改這個名字改了整整半年，當然到現在我還是覺得沒改得特別好 XDD。UmmIt 用大寫看起來好像還不錯，但小寫的時候似乎就沒那麼好看了。然後還得確保這個網域名沒被別人用過，這真的挺難的。

一開始也沒想太多，我只是希望有一個能在網路上統一使用的網名，像是在 HackerOne、Discord 這些網站上都能用。這樣也方便別人認識我。不是那種超隨機的名字，而是容易辨認又好記的名字。

舉個例子，比如你做了一個 side project：

你成功完成了一個大型專案的 side project，當你提交（commit）時，用的名字能讓人知道這是誰的作品。這時候，如果大家看到你的網名，就能馬上知道是你！而不是像我以前隨便用 16 進制亂取的網名 XDDD。

同樣的，我也希望別人能認出我的作品 :)
於是，一個有點中二的網名 UmmIt 就誕生了。

怎麼唸呢？其實沒什麼特別的想法，你直接唸 U-m-m-I-t 沒問題，也有人把我的名字唸成 yumi（諧音），我也不介意。只要我覺得好認、舒服就好 :D  
因為這名字根本不是英文單字，沒有標準讀音的 XDD。

### 部分靈感來自某部動漫的名字

說到這個，其實我有參考某部動漫女主角的網名 XDD  
不知道有沒有人看過《干物妹小埋》？  
裡面的女主角小埋，她是個電玩愛好者，她的遊戲ID就叫 UMR，唸作 U-M-R :)

很簡單，這是我網名的其中一個想法 :)

### 靈感也來自 Commit

我從原本的一個名字中去掉了「co」，然後在前面加了個「u」，就變成了 UmmIt。

嘛，其實我超愛搞開源專案，所以這個名字其實也有一部分靈感來自這個單字：

\`\`\`
Commit
\`\`\`

然後我也沒想到，我居然不知不覺進入了香港前 25 名的 committers 排行榜！？  
（想不到一千多個 commit 竟然就能躋身全球 GitHub top committer 了 XD）

[![committers.top badge](https://user-badge.committers.top/hong_kong/UmmItC.svg)](https://user-badge.committers.top/hong_kong/UmmItC)`},{id:1,slug:"about_me/journey-of-my-learning-in-tech",filename:"about_me/journey-of-my-learning-in-tech.md",title:"My journey of my learning curve in Tech",date:"2025-03-17",lastmod:"2025-04-01",excerpt:"How I learned to embrace the tech world and my experiences...",tags:["personal","learning","tech"],content:`
# My journey of my learning curve in Tech

Not update yet...`}],t=i;async function s(){return t}async function r(e){const n=t.find(o=>o.slug===e);if(!n){console.error(`Post with slug "${e}" not found in the pre-loaded list.`);return}return typeof n.content=="string"?n:(console.error(`Content for post "${e}" is missing or not a string from the pre-loaded list. This may indicate an issue with the build process or the virtual module generation.`),{...n,content:`Error: Content for post slug "${e}" was not bundled correctly. Please check the build process.`})}export{s as getAllPosts,r as getPostBySlug,t as posts};
