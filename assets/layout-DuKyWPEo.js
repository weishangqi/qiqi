import{r as m,a as I,o as v,c as u,b as s,d as i,w as l,e as d,f as w,g as M,t as c,h,i as z,j as N,k as G,l as Z,m as T,u as D,R,n as k}from"./index-Cx8TPHbv.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{e as g}from"./emitter-E5P-NQ8u.js";const y={class:"container"},E={class:"logo"},U={class:"menus"},C={class:"menus-toggle"},Q={key:0,class:"menu-li"},X={__name:"nav",setup(r){const e=m(!1),n=()=>{e.value=!e.value,console.log(e.value)};return window.addEventListener("resize",()=>{window.innerWidth>768&&(e.value=!1)}),(f,a)=>{const t=I("RouterLink");return v(),u("nav",y,[s("div",E,[i(t,{to:"/"},{default:l(()=>a[0]||(a[0]=[d("柒柒知道")])),_:1})]),s("div",U,[i(t,{to:"/","exact-active-class":"active"},{default:l(()=>a[1]||(a[1]=[d("首页")])),_:1}),i(t,{to:"/article","exact-active-class":"active"},{default:l(()=>a[2]||(a[2]=[d("文章")])),_:1}),i(t,{to:"/qzone","exact-active-class":"active"},{default:l(()=>a[3]||(a[3]=[d("微言")])),_:1}),i(t,{to:"/picture","exact-active-class":"active"},{default:l(()=>a[4]||(a[4]=[d("图库")])),_:1}),i(t,{to:"/tool","exact-active-class":"active"},{default:l(()=>a[5]||(a[5]=[d("工具")])),_:1}),i(t,{to:"/about","exact-active-class":"active"},{default:l(()=>a[6]||(a[6]=[d("关于")])),_:1})]),s("div",C,[s("div",{class:"menu-icon",onClick:n},a[7]||(a[7]=[s("i",{class:"fas fa-bars fa-fw"},null,-1)])),e.value?(v(),u("div",Q,[s("ul",null,[s("li",null,[i(t,{to:"/","exact-active-class":"active"},{default:l(()=>a[8]||(a[8]=[d("首页")])),_:1})]),s("li",null,[i(t,{to:"/article","exact-active-class":"active"},{default:l(()=>a[9]||(a[9]=[d("文章")])),_:1})]),s("li",null,[i(t,{to:"/qzone","exact-active-class":"active"},{default:l(()=>a[10]||(a[10]=[d("微言")])),_:1})]),s("li",null,[i(t,{to:"/picture","exact-active-class":"active"},{default:l(()=>a[11]||(a[11]=[d("图库")])),_:1})]),s("li",null,[i(t,{to:"/tool","exact-active-class":"active"},{default:l(()=>a[12]||(a[12]=[d("工具")])),_:1})]),s("li",null,[i(t,{to:"/about","exact-active-class":"active"},{default:l(()=>a[13]||(a[13]=[d("关于")])),_:1})])])])):w("",!0)])])}}},j=A(X,[["__scopeId","data-v-8b72f875"]]),x={class:"container"},L={__name:"header-home",setup(r){M(()=>{n()});const e=["天上月，水中天，夜夜烟波得意眠。|","春风又绿江南岸，明月何时照我还。|","人生若只如初见，何事秋风悲画扇。|","山重水复疑无路，柳暗花明又一村。|"];function n(){const a=document.querySelector(".second-line");let t=0,o=0;function p(){o<e[t].length?(a.innerHTML+=e[t].charAt(o),o++,setTimeout(p,200)):setTimeout(b,500)}function b(){o>0?(o--,a.innerHTML=e[t].substring(0,o),setTimeout(b,200)):(t++,t>=e.length&&(t=0),o=0,setTimeout(p,500))}p()}const f=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return(a,t)=>(v(),u("header",x,[t[1]||(t[1]=s("div",{class:"centered-text"},[s("div",{class:"first-line"},"柒柒小屋"),s("div",{class:"second-line"})],-1)),s("div",{class:"scroll-down",onClick:f},t[0]||(t[0]=[s("i",{class:"fas fa-angle-down scroll-down-effects"},null,-1)]))]))}},O=A(L,[["__scopeId","data-v-aca98e5b"]]),B={class:"container"},V={class:"centered-text"},F={class:"title"},P={class:"desc"},H={__name:"header-other",props:{title:{type:String,required:!0},desc:{type:String,required:!0}},setup(r){return(e,n)=>(v(),u("header",B,[s("div",V,[s("div",F,c(r.title),1),s("div",P,c(r.desc),1)])]))}},Y=A(H,[["__scopeId","data-v-e1e7f768"]]),W={class:"container"},S={class:"centered-text"},J={class:"title"},q={class:"desc"},_={class:"firstline"},K={class:"secondline"},$={__name:"header-detail",setup(r){const e=m("");return m(""),g.on("send-data",n=>{e.value=n.value}),h(()=>{g.off("send-data")}),(n,f)=>(v(),u("header",W,[s("div",S,[s("div",J,c(e.value.title),1),s("div",q,[s("div",_,[s("span",null,"发布时间："+c(e.value.createTime),1),s("span",null,"更新时间："+c(e.value.updateTime),1),s("span",null,"分类："+c(n.categoryId),1)]),s("div",K,[s("span",null,"标签："+c(e.value.tag),1),s("span",null,"阅读量："+c(e.value.views),1),s("span",null,"点赞量："+c(e.value.likes),1)])])])]))}},ee=A($,[["__scopeId","data-v-b6de1c13"]]),ae="/assets/youpaiyun-CN-ZXdsh.png",te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF5WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDggNzkuMTY0MDM2LCAyMDE5LzA4LzEzLTAxOjA2OjU3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMC0xMVQxMDoyNToyNiswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTAtMTFUMTI6NDk6NDcrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTAtMTFUMTI6NDk6NDcrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MmY2ZjExYTAtMWM1MS0wMzQ3LTlmOGYtYjFjZTcwMjlhNDVkIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkRFRDAzMDIwQTRERjExRTdBOERFRDM3QzM0QkNFNDU4IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6REVEMDMwMjBBNERGMTFFN0E4REVEMzdDMzRCQ0U0NTgiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERUQwMzAxREE0REYxMUU3QThERUQzN0MzNEJDRTQ1OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERUQwMzAxRUE0REYxMUU3QThERUQzN0MzNEJDRTQ1OCIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZjZmMTFhMC0xYzUxLTAzNDctOWY4Zi1iMWNlNzAyOWE0NWQiIHN0RXZ0OndoZW49IjIwMjQtMTAtMTFUMTI6NDk6NDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Wq2PFAAAHn0lEQVRYheVXe1BU1x3+zrn7ZBfWBV8bxbfgAzFBlETE1Ec0ULUarKI2Q0GtI7Y+xke0DTFV0IkOPiYTjGXiRI2PapMQIAZMxDdRRxsUFVHwAbgLC8su+2Bfd8/pH1sInQLFdjrpTL+ZO3fmO+f+vu/8fmd+51zCOcdPCfqTqv8vGOg2xJoqajudE+99UiFrz1s/zUpqXDL1hOXAtuX/VQOGV9XP9CPAjQn9S1s5b/VDmSESTc9Hg+uj0PTvxO12CQSZKFGMCYNibOwlz/3rfQEAdqsmaN0OrWbFeihn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",se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAEwUlEQVR4Xr2TeVDVVRTHf5IWg46jZWFEKhOTaDqZCwITuGTggiigyKOHLCpCiqRILEOEgDi5ICioZCOlzhiKIAqUCIIKyKqy83iILA94Dx6LiqGCffrJH2+Smvqn6TtzZ+6d+Z7POffccwXh/xQ8mPykIc0jLTak5OKBoHJ1xfntINcf6ftXMZC7RJYanJjguX7glMsc9jiaEeG1kjPf2PG9l3Sw5kJIMk/vWY+M+1sB2tnRGzF5ZyFHXY3J2zaPNtcPUO+czf0ML5JO+2L2pilXDziKVt4YGf+KoFv/6Z2gGzYL1hATJOFxsBGVo7WpMJ2GzGYmd7RGMZhgSWJaDOtM7Pm97vBlsS3aIznDekbTjOYrns+M9VazUeLBUNQsKgz0qDaYzN1ZesisjLirO5Eb48bCdVe2+Uaw1HAZnbeC2rvqoqeP5Ak8iVsQe9APQdjDuUMS+jZOoeq1sdR8MpUaPV3Kx02kysSQIkGLLpcZZGeGiN4dHIr053l96JxXYN3lOfpDOetuHTkkmkb7kx66iBbLKciE16mZqkutuQG1iwzE/bvcFXPXWkyjrtQfYZQPwUGB0Bt5nYE+Aw2wPMXPZ+CsKWfiI8SsIaTFO/JbmDFlwhiKJDOpOmZOa64tTVFWlL+tQ/fO+ZTd3DlcYVx0OFQ6oG5MDdcAGzIjT6iOzyc/ORhBO4Yd7u48z1tG5mpDCizep9pzLjI/M+TeC6ndbwktmwjc7CoCA8nP3kf/pcUocg8naICyn73b5JEmPCz2Qd/iOKPHeHPN2ojOMHOql8+k5OWVXeZRufhDFD7GVG4xZ+zrW9Gd8x2P6gJoijOlKcVDrgHKk9yf3Akwg/QV7NobO5w5Q5jAi490qN30Mfl2hlT7LaQjbBEvZk8iR5goer7EKyQK8u2p3Ce2JMurSQNUZISm3k9YylDpZiqz9iG8F4W1YErq+PHkTdahYPpblIqrftUMSi1m46VljDAhiOKMAAYrfGi9vA512d64PwH33G6IWUJL4gao8CDicPzwawujPMRK3LAZb4PrlLWME5zF81ZxBbArKAzqnWlLd6b1/Eq6CgPzNEBlQfBg3SlHamPsaT1qzqMSb2pyA4j1l7I9cD9pZzwoS7JD6hKAg40Pvl+H0X3THeWP5shPfk5ryip6Zd+qNcBn/UVObVl2NJy1pjraiurdRjzNE/+q3BXqVjOUb0tfynK45yTOnLc4JhIaw+eKXkuaL9vRWSxlsDfdQgN8qaH+e1JVoXNfe+56KsLNqYn6lJ6yLXRdk9Keaovymvh7yjbzsNKLxnhL6o+tRFXsjeKmt7pfdXHZK7CX6m0qXNJ8aWuH6rYUVb4b7RkOdOVuoCvfGdUNN3qL3ejMduTBT1a0/yqhp+orOvI8aDgn6VLfP/VXYP+D/ZkDLbvpqfOjJcMFxRUnVNlOtF5aiyrXBdUvdjSe+IwmsS3tV51oFytXl3nyWLGLx6ojF0byBNpLdTplEUcVWZJ+5dU1PCpyoOe6CEtdhVo8K5NXDFfcU+iEMsdG7Js73Y2hzb3K08EQqjWSp5Es3ndSSYST861Qix8aE+0K5CdtK1qT7BXKdKmi8dwXBR3Z3lld5ccP1iWHLyf0H0D/lf4AixEgraPYF1IAAAAASUVORK5CYII=",ie={},le={class:"footer"};function de(r,e){return v(),u("footer",le,e[0]||(e[0]=[z('<div class="top" data-v-e882790f><div class="motto" data-v-e882790f><div class="title" data-v-e882790f>格言🧬</div><div class="body" data-v-e882790f><span data-v-e882790f>再看看那个光点，它就在这里，这是家园，这是我们 —— 你所爱的每一个人，你认识的每一个人，你听说过的每一个人，曾经有过的每一个人，都在它上面度过他们的一生✨</span><div class="button" data-v-e882790f>点击开启星辰之旅</div></div></div><div class="recommend" data-v-e882790f><div class="title" data-v-e882790f>猜你想看💡</div><ul class="body" data-v-e882790f><li data-v-e882790f><a href="#" data-v-e882790f>网站导航</a><a href="#" data-v-e882790f>留言反馈</a></li><li data-v-e882790f><a href="#" data-v-e882790f>关于作者</a><a href="#" data-v-e882790f>文章归档</a></li><li data-v-e882790f><a href="#" data-v-e882790f>文章分类</a><a href="#" data-v-e882790f>文章标签</a></li><li data-v-e882790f><a href="#" data-v-e882790f>建设进程</a><a href="#" data-v-e882790f>网站统计</a></li></ul></div><div class="friendship-link" data-v-e882790f><div class="title" data-v-e882790f>友情链接⌛</div><div class="body" data-v-e882790f><div data-v-e882790f><a href="#" data-v-e882790f><img src="https://img.qiqii.cn/banner/avata.webp" data-v-e882790f></a></div><div data-v-e882790f><a href="#" data-v-e882790f><img src="https://sourcebucket.s3.bitiful.net/img/jerry.png" data-v-e882790f></a></div><div data-v-e882790f><a href="#" data-v-e882790f><img src="https://sourcebucket.s3.bitiful.net/img/tzy.webp" data-v-e882790f></a></div><div data-v-e882790f><a href="#" data-v-e882790f><img src="https://sourcebucket.s3.bitiful.net/img/akilar.jpg" data-v-e882790f></a></div></div></div></div><div class="copyright" data-v-e882790f><h3 data-v-e882790f><a class="youpaiyun" href="https://www.upyun.com/?utm_source=lianmeng&amp;utm_medium=referral" target="_blank" data-v-e882790f> 本网站由 <img src="'+ae+'" alt="" data-v-e882790f> 提供CDN加速/云储存服务 </a></h3><p class="version" data-v-e882790f><span data-v-e882790f>version</span><span data-v-e882790f>2.0.0</span></p><p data-v-e882790f>建站日期：2021-03-09 最后更新：2024-10-11</p><p data-v-e882790f>©2021-2024 By 柒柒知道🥝</p><p class="beian" data-v-e882790f><a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank" data-v-e882790f><img src="'+te+'" data-v-e882790f>备案号：桂ICP备2023013923号-3</a><a href="https://beian.mps.gov.cn/#/query/webSearch?code=45012602000128" rel="noreferrer" target="_blank" data-v-e882790f><img src="'+se+'" data-v-e882790f>桂公网安备45012602000128号</a></p></div>',2)]))}const ne=A(ie,[["render",de],["__scopeId","data-v-e882790f"]]),ce={class:"layout"},oe={__name:"layout",setup(r){const e=m({title:"",desc:""}),n=k(),f=N(()=>{const t=n.meta.header;return t?{HeaderHome:O,HeaderDetail:ee,HeaderOther:Y}[t]:null});G(()=>n.name,t=>{a(t)},{immediate:!0});function a(t){switch(t){case"article":e.value.title="文章",e.value.desc="所有文章都在这里，希望你喜欢";break;case"category":e.value.title="文章",e.value.desc="所有文章都在这里，希望你喜欢";break;case"qzone":e.value.title="微言",e.value.desc="分享精彩瞬间";break;case"picture":e.value.title="图库",e.value.desc="好看的照片亚";break;case"tool":e.value.title="工具",e.value.desc="实用工具多来看看";break;case"about":e.value.title="关于我们",e.value.desc="了解更多信息";break;default:e.value.title="默认标题",e.value.desc="默认描述"}}return(t,o)=>(v(),u("div",ce,[i(j),(v(),Z(T(f.value),{title:e.value.title,desc:e.value.desc},null,8,["title","desc"])),i(D(R)),i(ne)]))}},Ae=A(oe,[["__scopeId","data-v-c9a61ce2"]]);export{Ae as default};
