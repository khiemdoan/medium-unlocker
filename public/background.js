var background=function(){"use strict";var e={operationName:{cookieStatus:"PostMeter",postContent:"PostViewerEdgeContentQuery"},operationSelector:{cookieStatus:"data.meterPost.unlocksRemaining"},memberShipId:"paywall-fewerClicksHeading",registerWall:"regwall-heading",domainList:["https://medium.com/*","https://*.medium.com/*","https://towardsaws.com/*","https://towardsdatascience.com/*","https://hackernoon.com/*","https://medium.freecodecamp.org/*","https://psiloveyou.xyz/*","https://betterhumans.coach.me/*","https://codeburst.io/*","https://theascent.pub/*","https://medium.mybridge.co/*","https://uxdesign.cc/*","https://levelup.gitconnected.com/*","https://itnext.io/*","https://entrepreneurshandbook.co/*","https://proandroiddev.com/*","https://blog.prototypr.io/*","https://thebolditalic.com/*","https://blog.usejournal.com/*","https://blog.angularindepth.com/*","https://blog.bitsrc.io/*","https://blog.devartis.com/*","https://blog.maddevs.io/*","https://blog.getambassador.io/*","https://uxplanet.org/*","https://instagram-engineering.com/*","https://calia.me/*","https://productcoalition.com/*","https://engineering.opsgenie.com/*","https://android.jlelse.eu/*","https://robinhood.engineering/*","https://blog.hipolabs.com/*","https://ux.shopify.com/*","https://enlear.academy/*","https://www.cantorsparadise.com/*","https://betterprogramming.pub/*","https://blog.roost.io/*","https://500ish.com/*","https://faun.pub/*","https://towardsdev.com/*","https://writingcooperative.com/*","https://andrewzuo.com/*","https://awstip.com/*","https://baos.pub/*","https://*.plainenglish.io/*","https://betterhumans.pub/*","https://bettermarketing.pub/*","https://blog.codegiant.io/*","https://blog.coffeeapplied.com/*","https://blog.devgenius.io/*","https://blog.kotlin-academy.com/*","https://blog.kubernauts.io/*","https://blog.securityevaluators.com/*","https://bootcamp.uxdesign.cc/*","https://bytes.grubhub.com/*","https://coinsbench.com/*","https://eand.co/*","https://engineering.talkdesk.com/*","https://infosecwriteups.com/*","https://levelupprogramming.net/*","https://marcbalmer.ch/*","https://medium.datadriveninvestor.com/*","https://netflixtechblog.com/*","https://pub.towardsai.net/*","https://systemweakness.com/*","https://tech.olx.com/*","https://techuisite.com/*","https://themakingofamillionaire.com/*","https://unbounded.io/*","https://www.inbitcoinwetrust.net/*","https://blog.dancounsell.com/*"]};function t(e,t){let o="",s=t.length;for(let r=0;r<e;r++)o+=t.charAt(Math.floor(Math.random()*s));return o}var o={generateUID:()=>`lo_${t(12,"0123456789abcdef")}`,generateSID:()=>`1:${t(64,"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._/")}`,getBeforeSendExtraInfoSpec:()=>{const e=["blocking","requestHeaders"];return chrome.webRequest.OnBeforeSendHeadersOptions.hasOwnProperty("EXTRA_HEADERS")&&e.push("extraHeaders"),e},getHeaderReceivedExtraInfoSpec:()=>{const e=["blocking","responseHeaders"];return chrome.webRequest.OnHeadersReceivedOptions.hasOwnProperty("EXTRA_HEADERS")&&e.push("extraHeaders"),e},getHeaders:(e,t,o)=>e.filter((({name:e})=>o(e.toLowerCase(),t))),hasElm:e=>!!document.getElementById(e),getRealObjectKey:(e,t)=>Object.keys(e).find((e=>e.toLowerCase()===t))},s={initChrome:()=>{}};const{domainList:r}=e,{generateUID:n,generateSID:a,getBeforeSendExtraInfoSpec:i,getHeaderReceivedExtraInfoSpec:p,getHeaders:c}=o,{initChrome:d}=s,h="/_/graphql",l=["PostViewerEdgeContentQuery","PostHandler"];let u=[],m="";chrome.webRequest.onBeforeSendHeaders.addListener((function({url:e,requestId:t,requestHeaders:o}){if(!1===e.endsWith(h))return{requestHeaders:o};const s=o.filter((({name:e})=>"graphql-operation"===e.toLowerCase()));if(!s.length||s.length&&!l.includes(s[0].value))return{requestHeaders:o};u.push(t);let r=c(o,"cookie",((e,t)=>e!==t));const i=c(o,"cookie",((e,t)=>e===t));if(1===i.length){const e=n(),t=a();let o=decodeURIComponent(i[0].value);const s=/uid=(\w+);/.exec(o);return s&&s.length>1&&(m=s[1]),o=o.replace(/uid=(\w+);/,`uid=${e};`),o=o.replace(/sid=(.{0,72});/,`sid=${encodeURIComponent(t)};`),o=o.replace(/optimizelyEndUserId=(\w+);/,`optimizelyEndUserId=${e};`),r.push({name:"cookie",value:o}),{requestHeaders:r}}return{requestHeaders:o}}),{urls:r},i()),chrome.webRequest.onHeadersReceived.addListener((function({requestId:e,responseHeaders:t}){return!1===u.includes(e)?{responseHeaders:t}:{responseHeaders:c(t,"set-cookie",((e,t)=>e!==t))}}),{urls:r},p()),"undefined"!=typeof browser?chrome.webRequest.onBeforeRequest.addListener((function({requestId:e,url:t}){if(!1===t.endsWith(h))return{};let o=browser.webRequest.filterResponseData(e),s=new TextDecoder("utf-8"),r=new TextEncoder,n=[];o.ondata=e=>{n.push(e.data)},o.onstop=t=>{let a="";if(1==n.length)a=s.decode(n[0]);else for(let e=0;e<n.length;e++){let t=e!=n.length-1;a+=s.decode(n[e],{stream:t})}if(m&&u.includes(e)){const e=/postId:(\w+)\-viewerId:(lo_\w+)/gm.exec(a);if(e&&3===e.length){let t=new RegExp(`${e[2]}`,"g");a=a.replace(t,m)}}o.write(r.encode(a)),o.close()}}),{urls:r},["blocking"]):d();return{}}();
