import{am as Ne,a8 as ee,bJ as Z,g as Se,aH as $e,p as ke,ao as ve,br as Ve,K as Le,j as b,y as Ae,aD as pe,k as re,bD as ze,aB as He,bK as Ye,aC as Ke,bL as ne,O as K,a3 as Ue,A as Xe,B as ye,E as Ie,d as h,a0 as ie,aE as Ge,a1 as Pe,S as je,bM as We,bC as qe,r as D,ae as Je,G as ge,bw as Ee,bN as be,aV as ue,ab as ce,aY as Qe,a as R,o as m,l as E,w as p,v as oe,b as y,s as d,P as Ce,Q as W,c as te,m as q,f as N,t as Y,b6 as J,e as se,$ as ae,T as Ze,aI as Fe,a$ as _e,bq as Oe,bp as he,aa as we}from"./index-Cx8TPHbv.js";import{E as xe}from"./el-button-CLRQyoNK.js";import{E as en}from"./el-input-CTaxJvgn.js";import{o as Te,d as nn}from"./el-popper-CVASmb7O.js";import{t as on,u as Me}from"./use-form-item-2p89PICZ.js";import{a as tn}from"./index-jEL9bEAS.js";const sn=e=>["",...Ne].includes(e);var Q=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(Q||{});const le=e=>{const n=ee(e)?e:[e],s=[];return n.forEach(t=>{var a;ee(t)?s.push(...le(t)):Z(t)&&((a=t.component)!=null&&a.subTree)?s.push(t,...le(t.component.subTree)):Z(t)&&ee(t.children)?s.push(...le(t.children)):s.push(t)}),s},an=(e,n,s,t)=>{let a={offsetX:0,offsetY:0};const l=o=>{const w=o.clientX,V=o.clientY,{offsetX:c,offsetY:z}=a,L=e.value.getBoundingClientRect(),v=L.left,H=L.top,T=L.width,A=L.height,X=document.documentElement.clientWidth,F=document.documentElement.clientHeight,_=-v+c,x=-H+z,M=X-v-T+c,G=F-H-A+z,P=B=>{let S=c+B.clientX-w,I=z+B.clientY-V;t!=null&&t.value||(S=Math.min(Math.max(S,_),M),I=Math.min(Math.max(I,x),G)),a={offsetX:S,offsetY:I},e.value&&(e.value.style.transform=`translate(${ve(S)}, ${ve(I)})`)},j=()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",j)};document.addEventListener("mousemove",P),document.addEventListener("mouseup",j)},r=()=>{n.value&&e.value&&n.value.addEventListener("mousedown",l)},u=()=>{n.value&&e.value&&n.value.removeEventListener("mousedown",l)},f=()=>{a={offsetX:0,offsetY:0},e.value&&(e.value.style.transform="none")};return Se(()=>{$e(()=>{s.value?r():u()})}),ke(()=>{u()}),{resetPosition:f}},ln=(e,n={})=>{Ve(e)||on("[useLockscreen]","You need to pass a ref param to this function");const s=n.ns||Le("popup"),t=b(()=>s.bm("parent","hidden"));if(!Ae||pe(document.body,t.value))return;let a=0,l=!1,r="0";const u=()=>{setTimeout(()=>{typeof document>"u"||(Ke(document==null?void 0:document.body,t.value),l&&document&&(document.body.style.width=r))},200)};re(e,f=>{if(!f){u();return}l=!pe(document.body,t.value),l&&(r=document.body.style.width),a=tn(s.namespace.value);const o=document.documentElement.clientHeight<document.body.scrollHeight,w=ze(document.body,"overflowY");a>0&&(o||w==="scroll")&&l&&(document.body.style.width=`calc(100% - ${a}px)`),He(document.body,t.value)}),Ye(()=>u())},De=e=>{if(!e)return{onClick:ne,onMousedown:ne,onMouseup:ne};let n=!1,s=!1;return{onClick:r=>{n&&s&&e(r),n=s=!1},onMousedown:r=>{n=r.target===r.currentTarget},onMouseup:r=>{s=r.target===r.currentTarget}}},de="_trap-focus-children",k=[],Be=e=>{if(k.length===0)return;const n=k[k.length-1][de];if(n.length>0&&e.code===Ue.tab){if(n.length===1){e.preventDefault(),document.activeElement!==n[0]&&n[0].focus();return}const s=e.shiftKey,t=e.target===n[0],a=e.target===n[n.length-1];t&&s&&(e.preventDefault(),n[n.length-1].focus()),a&&!s&&(e.preventDefault(),n[0].focus())}},rn={beforeMount(e){e[de]=Te(e),k.push(e),k.length<=1&&document.addEventListener("keydown",Be)},updated(e){K(()=>{e[de]=Te(e)})},unmounted(){k.shift(),k.length===0&&document.removeEventListener("keydown",Be)}},un=Xe({mask:{type:Boolean,default:!0},customMaskEvent:Boolean,overlayClass:{type:ye([String,Array,Object])},zIndex:{type:ye([String,Number])}}),dn={click:e=>e instanceof MouseEvent},cn="overlay";var fn=Ie({name:"ElOverlay",props:un,emits:dn,setup(e,{slots:n,emit:s}){const t=Le(cn),a=f=>{s("click",f)},{onClick:l,onMousedown:r,onMouseup:u}=De(e.customMaskEvent?void 0:a);return()=>e.mask?h("div",{class:[t.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:l,onMousedown:r,onMouseup:u},[ie(n,"default")],Q.STYLE|Q.CLASS|Q.PROPS,["onClick","onMouseup","onMousedown"]):Ge("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[ie(n,"default")])}});const mn=fn,vn=Ie({name:"ElMessageBox",directives:{TrapFocus:rn},components:{ElButton:xe,ElFocusTrap:nn,ElInput:en,ElOverlay:mn,ElIcon:je,...We},inheritAttrs:!1,props:{buttonSize:{type:String,validator:sn},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,overflow:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(e,{emit:n}){const{locale:s,zIndex:t,ns:a,size:l}=qe("message-box",b(()=>e.buttonSize)),{t:r}=s,{nextZIndex:u}=t,f=D(!1),o=Je({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonLoadingIcon:ge(Ee),cancelButtonLoadingIcon:ge(Ee),confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:u()}),w=b(()=>{const i=o.type;return{[a.bm("icon",i)]:i&&be[i]}}),V=Me(),c=Me(),z=b(()=>o.icon||be[o.type]||""),L=b(()=>!!o.message),v=D(),H=D(),T=D(),A=D(),X=D(),F=b(()=>o.confirmButtonClass);re(()=>o.inputValue,async i=>{await K(),e.boxType==="prompt"&&i!==null&&S()},{immediate:!0}),re(()=>f.value,i=>{var g,O;i&&(e.boxType!=="prompt"&&(o.autofocus?T.value=(O=(g=X.value)==null?void 0:g.$el)!=null?O:v.value:T.value=v.value),o.zIndex=u()),e.boxType==="prompt"&&(i?K().then(()=>{var me;A.value&&A.value.$el&&(o.autofocus?T.value=(me=I())!=null?me:v.value:T.value=v.value)}):(o.editorErrorMessage="",o.validateError=!1))});const _=b(()=>e.draggable),x=b(()=>e.overflow);an(v,H,_,x),Se(async()=>{await K(),e.closeOnHashChange&&window.addEventListener("hashchange",M)}),ke(()=>{e.closeOnHashChange&&window.removeEventListener("hashchange",M)});function M(){f.value&&(f.value=!1,K(()=>{o.action&&n("action",o.action)}))}const G=()=>{e.closeOnClickModal&&B(o.distinguishCancelAndClose?"close":"cancel")},P=De(G),j=i=>{if(o.inputType!=="textarea")return i.preventDefault(),B("confirm")},B=i=>{var g;e.boxType==="prompt"&&i==="confirm"&&!S()||(o.action=i,o.beforeClose?(g=o.beforeClose)==null||g.call(o,i,o,M):M())},S=()=>{if(e.boxType==="prompt"){const i=o.inputPattern;if(i&&!i.test(o.inputValue||""))return o.editorErrorMessage=o.inputErrorMessage||r("el.messagebox.error"),o.validateError=!0,!1;const g=o.inputValidator;if(ue(g)){const O=g(o.inputValue);if(O===!1)return o.editorErrorMessage=o.inputErrorMessage||r("el.messagebox.error"),o.validateError=!0,!1;if(ce(O))return o.editorErrorMessage=O,o.validateError=!0,!1}}return o.editorErrorMessage="",o.validateError=!1,!0},I=()=>{const i=A.value.$refs;return i.input||i.textarea},fe=()=>{B("close")},Re=()=>{e.closeOnPressEscape&&fe()};return e.lockScroll&&ln(f),{...Qe(o),ns:a,overlayEvent:P,visible:f,hasMessage:L,typeClass:w,contentId:V,inputId:c,btnSize:l,iconComponent:z,confirmButtonClasses:F,rootRef:v,focusStartRef:T,headerRef:H,inputRef:A,confirmRef:X,doClose:M,handleClose:fe,onCloseRequested:Re,handleWrapperClick:G,handleInputEnter:j,handleAction:B,t:r}}});function pn(e,n,s,t,a,l){const r=R("el-icon"),u=R("close"),f=R("el-input"),o=R("el-button"),w=R("el-focus-trap"),V=R("el-overlay");return m(),E(Ze,{name:"fade-in-linear",onAfterLeave:c=>e.$emit("vanish"),persisted:""},{default:p(()=>[oe(h(V,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:p(()=>[y("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:d(`${e.ns.namespace.value}-overlay-message-box`),onClick:e.overlayEvent.onClick,onMousedown:e.overlayEvent.onMousedown,onMouseup:e.overlayEvent.onMouseup},[h(w,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:p(()=>[y("div",{ref:"rootRef",class:d([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:Ce(e.customStyle),tabindex:"-1",onClick:W(()=>{},["stop"])},[e.title!==null&&e.title!==void 0?(m(),te("div",{key:0,ref:"headerRef",class:d([e.ns.e("header"),{"show-close":e.showClose}])},[y("div",{class:d(e.ns.e("title"))},[e.iconComponent&&e.center?(m(),E(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:p(()=>[(m(),E(q(e.iconComponent)))]),_:1},8,["class"])):N("v-if",!0),y("span",null,Y(e.title),1)],2),e.showClose?(m(),te("button",{key:0,type:"button",class:d(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),onKeydown:J(W(c=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel"),["prevent"]),["enter"])},[h(r,{class:d(e.ns.e("close"))},{default:p(()=>[h(u)]),_:1},8,["class"])],42,["aria-label","onClick","onKeydown"])):N("v-if",!0)],2)):N("v-if",!0),y("div",{id:e.contentId,class:d(e.ns.e("content"))},[y("div",{class:d(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(m(),E(r,{key:0,class:d([e.ns.e("status"),e.typeClass])},{default:p(()=>[(m(),E(q(e.iconComponent)))]),_:1},8,["class"])):N("v-if",!0),e.hasMessage?(m(),te("div",{key:1,class:d(e.ns.e("message"))},[ie(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(m(),E(q(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(m(),E(q(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:p(()=>[se(Y(e.dangerouslyUseHTMLString?"":e.message),1)]),_:1},8,["for"]))])],2)):N("v-if",!0)],2),oe(y("div",{class:d(e.ns.e("input"))},[h(f,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":c=>e.inputValue=c,type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:d({invalid:e.validateError}),onKeydown:J(e.handleInputEnter,["enter"])},null,8,["id","modelValue","onUpdate:modelValue","type","placeholder","aria-invalid","class","onKeydown"]),y("div",{class:d(e.ns.e("errormsg")),style:Ce({visibility:e.editorErrorMessage?"visible":"hidden"})},Y(e.editorErrorMessage),7)],2),[[ae,e.showInput]])],10,["id"]),y("div",{class:d(e.ns.e("btns"))},[e.showCancelButton?(m(),E(o,{key:0,loading:e.cancelButtonLoading,"loading-icon":e.cancelButtonLoadingIcon,class:d([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:c=>e.handleAction("cancel"),onKeydown:J(W(c=>e.handleAction("cancel"),["prevent"]),["enter"])},{default:p(()=>[se(Y(e.cancelButtonText||e.t("el.messagebox.cancel")),1)]),_:1},8,["loading","loading-icon","class","round","size","onClick","onKeydown"])):N("v-if",!0),oe(h(o,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,"loading-icon":e.confirmButtonLoadingIcon,class:d([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:c=>e.handleAction("confirm"),onKeydown:J(W(c=>e.handleAction("confirm"),["prevent"]),["enter"])},{default:p(()=>[se(Y(e.confirmButtonText||e.t("el.messagebox.confirm")),1)]),_:1},8,["loading","loading-icon","class","round","disabled","size","onClick","onKeydown"]),[[ae,e.showConfirmButton]])],2)],14,["onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,["aria-label","aria-describedby","onClick","onMousedown","onMouseup"])]),_:3},8,["z-index","overlay-class","mask"]),[[ae,e.visible]])]),_:3},8,["onAfterLeave"])}var yn=Pe(vn,[["render",pn],["__file","index.vue"]]);const U=new Map,gn=e=>{let n=document.body;return e.appendTo&&(ce(e.appendTo)&&(n=document.querySelector(e.appendTo)),we(e.appendTo)&&(n=e.appendTo),we(n)||(n=document.body)),n},En=(e,n,s=null)=>{const t=h(yn,e,ue(e.message)||Z(e.message)?{default:ue(e.message)?e.message:()=>e.message}:null);return t.appContext=s,Oe(t,n),gn(e).appendChild(n.firstElementChild),t.component},bn=()=>document.createElement("div"),Cn=(e,n)=>{const s=bn();e.onVanish=()=>{Oe(null,s),U.delete(a)},e.onAction=l=>{const r=U.get(a);let u;e.showInput?u={value:a.inputValue,action:l}:u=l,e.callback?e.callback(u,t.proxy):l==="cancel"||l==="close"?e.distinguishCancelAndClose&&l!=="cancel"?r.reject("close"):r.reject("cancel"):r.resolve(u)};const t=En(e,s,n),a=t.proxy;for(const l in e)he(e,l)&&!he(a.$props,l)&&(a[l]=e[l]);return a.visible=!0,a};function $(e,n=null){if(!Ae)return Promise.reject();let s;return ce(e)||Z(e)?e={message:e}:s=e.callback,new Promise((t,a)=>{const l=Cn(e,n??$._context);U.set(l,{options:e,callback:s,resolve:t,reject:a})})}const hn=["alert","confirm","prompt"],wn={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};hn.forEach(e=>{$[e]=Tn(e)});function Tn(e){return(n,s,t,a)=>{let l="";return Fe(s)?(t=s,l=""):_e(s)?l="":l=s,$(Object.assign({title:l,message:n,type:"",...wn[e]},t,{boxType:e}),a)}}$.close=()=>{U.forEach((e,n)=>{n.doClose()}),U.clear()};$._context=null;const C=$;C.install=e=>{C._context=e._context,e.config.globalProperties.$msgbox=C,e.config.globalProperties.$messageBox=C,e.config.globalProperties.$alert=C.alert,e.config.globalProperties.$confirm=C.confirm,e.config.globalProperties.$prompt=C.prompt};const In=C;export{In as E,mn as a,De as b,ln as c,le as f,an as u};
