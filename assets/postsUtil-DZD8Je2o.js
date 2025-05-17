const o=[{id:3,slug:"about_me/why-i-build-it-website",filename:"about_me/why-i-build-it-website.md",title:"About this website story and why i build it",date:"2025-03-17",lastmod:"2025-05-17",excerpt:"The story behind this 'links' website and why I built it...",tags:["personal","website","story"],content:`

# Introduction

The story behind this 'links' website and the motivation for its creation.

## The Inspiration

This website began as a personal initiative to organize my online presence and serve as a central hub for all my projects, thoughts, and digital footprint.

### Why?

Instead of relying on third-party platforms that don’t offer full control over my content, I decided to build something from the ground up. While I was inspired by existing services like Linktree, I wanted to create a unique solution that truly reflects my vision. 

As someone who values efficiency and dislikes wasting time on unnecessary tasks, I took it upon myself to develop my own product. Thus, the concept of this links website was born.

> This website fully open source with license GPLv3, feel free to use :)`},{id:2,slug:"about_me/name-ummit",filename:"about_me/name-ummit.md",title:"Why my name is UmmIt",date:"2025-03-17",lastmod:"2025-04-05",excerpt:"The story behind my unique username and how it represents me...",tags:["personal","story","username"],content:`
# Why My Name is UmmIt

The story behind my unique username and what it represents.

## The Origin

The name UmmIt actually came about quite randomly! I decided to remove the "co" from a previous name and add a "u" at the front, which transformed it into UmmIt

As someone who is dedicated to committing to my projects every day, this name reflects that commitment. Additionally, my passion for using Git and GNU/Linux ties into the name, making it a perfect representation of my identity in the tech world. :)`},{id:1,slug:"about_me/journey-of-my-learning-in-tech",filename:"about_me/journey-of-my-learning-in-tech.md",title:"My journey of my learning curve in Tech",date:"2025-03-17",lastmod:"2025-04-01",excerpt:"How I learned to embrace the tech world and my experiences...",tags:["personal","learning","tech"],content:`
# My journey of my learning curve in Tech

Not update yet...`}],n=o;async function s(){return n}async function r(e){const t=n.find(i=>i.slug===e);if(!t){console.error(`Post with slug "${e}" not found in the pre-loaded list.`);return}return typeof t.content=="string"?t:(console.error(`Content for post "${e}" is missing or not a string from the pre-loaded list. This may indicate an issue with the build process or the virtual module generation.`),{...t,content:`Error: Content for post slug "${e}" was not bundled correctly. Please check the build process.`})}export{s as getAllPosts,r as getPostBySlug,n as posts};
