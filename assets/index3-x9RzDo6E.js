import{b as N,C as $,P as M,p as m,g as P}from"./index-DL87zl-r.js";import{E as F,ae as j,N as B,r as I,as as O,j as G,g as U,p as V,d,F as q,at as w,k as z,O as D}from"./index-Cx8TPHbv.js";const _=(e,g)=>+getComputedStyle(e).getPropertyValue(g).replace("px",""),J={tocItem:{type:Object,default:()=>({})},mdHeadingId:{type:Function,default:()=>{}},onActive:{type:Function,default:()=>{}},onClick:{type:Function,default:()=>{}},scrollElementOffsetTop:{type:Number,default:0}},L=F({props:J,setup(e){const g=w("scrollElementRef"),p=w("roorNodeRef"),v=I();return z(()=>e.tocItem.active,l=>{l&&(v.value?e.onActive(e.tocItem,v.value):D(()=>{e.onActive(e.tocItem,v.value)}))},{immediate:!0}),()=>{const{tocItem:l,mdHeadingId:C,onClick:E,scrollElementOffsetTop:h}=e;return d("div",{ref:v,class:[`${m}-catalog-link`,l.active&&`${m}-catalog-active`],onClick:n=>{E(n,l),n.stopPropagation();const k=C(l.text,l.level,l.index),u=p.value.getElementById(k),f=g.value;if(u&&f){let a=u.offsetParent,A=u.offsetTop;if(f.contains(a))for(;a&&f!=a;)A+=a==null?void 0:a.offsetTop,a=a==null?void 0:a.offsetParent;const R=u.previousElementSibling;let y=0;R||(y=_(u,"margin-top")),f==null||f.scrollTo({top:A-h-y,behavior:"smooth"})}}},[d("span",{title:l.text},[l.text]),l.children&&l.children.length>0&&d("div",{class:`${m}-catalog-wrapper`},[l.children.map(n=>d(L,{mdHeadingId:C,key:`${l.text}-link-${n.level}-${n.text}`,tocItem:n,onActive:e.onActive,onClick:E,scrollElementOffsetTop:h},null))])])}}}),K={editorId:{type:String,default:void 0},class:{type:String,default:""},mdHeadingId:{type:Function,default:e=>e},scrollElement:{type:[String,Object],default:void 0},theme:{type:String,default:"light"},offsetTop:{type:Number,default:20},scrollElementOffsetTop:{type:Number,default:0},onClick:{type:Function,default:void 0},onActive:{type:Function,default:void 0},isScrollElementInShadow:{type:Boolean,default:!1}},b=F({name:"MdCatalog",props:K,emits:["onClick","onActive"],setup(e,g){const p=e.editorId,v=`#${p}-preview-wrapper`,l=j({list:[],show:!1,scrollElement:e.scrollElement||v}),C=B(),E=I(),h=I(),n=I(),k=I(),u=I({});O("scrollElementRef",h),O("roorNodeRef",k);const f=G(()=>{const t=[];return l.list.forEach((o,c)=>{const{text:i,level:S}=o,s={level:S,text:i,index:c+1,active:C.value===o};if(t.length===0)t.push(s);else{let r=t[t.length-1];if(s.level>r.level)for(let T=r.level+1;T<=6;T++){const{children:H}=r;if(!H){r.children=[s];break}if(r=H[H.length-1],s.level<=r.level){H.push(s);break}}else t.push(s)}}),t}),a=()=>{var t;if(l.scrollElement instanceof HTMLElement)return l.scrollElement;let o=document;return(l.scrollElement===v||e.isScrollElementInShadow)&&(o=(t=E.value)==null?void 0:t.getRootNode()),o.querySelector(l.scrollElement)},A=t=>{if(t.length===0)return l.list=[],!1;const{activeHead:o}=t.reduce((c,i,S)=>{var s;const r=(s=k.value)==null?void 0:s.getElementById(e.mdHeadingId(i.text,i.level,S+1));if(r instanceof HTMLElement){const T=P(r,h.value);if(T<e.offsetTop&&T>c.minTop)return{activeHead:i,minTop:T}}return c},{activeHead:t[0],minTop:Number.MIN_SAFE_INTEGER});C.value=o,l.list=t},R=(t,o)=>{u.value.top=o.offsetTop+_(o,"padding-top")+"px",e.onActive?e.onActive(t,o):g.emit("onActive",t,o)},y=()=>{A(l.list)},x=t=>{var o,c;const i=a();h.value=i,n.value=i===document.documentElement?document:i,(o=n.value)==null||o.removeEventListener("scroll",y),A(t),(c=n.value)==null||c.addEventListener("scroll",y)};return U(()=>{k.value=E.value.getRootNode(),N.on(p,{name:$,callback:x}),N.emit(p,M)}),V(()=>{var t;N.remove(p,$,x),(t=n.value)==null||t.removeEventListener("scroll",y)}),()=>d("div",{class:[`${m}-catalog`,e.theme==="dark"&&`${m}-catalog-dark`,e.class||""],ref:E},[f.value.length>0&&d(q,null,[d("div",{class:`${m}-catalog-indicator`,style:u.value},null),d("div",{class:`${m}-catalog-container`},[f.value.map(t=>d(L,{mdHeadingId:e.mdHeadingId,tocItem:t,key:`link-${t.level}-${t.text}`,onActive:R,onClick:(o,c)=>{e.onClick?e.onClick(o,c):g.emit("onClick",o,c)},scrollElementOffsetTop:e.scrollElementOffsetTop},null))])])])}});b.install=e=>(e.component(b.name,b),e);export{b as M};