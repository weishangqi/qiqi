import{A as Z,E as q,aq as ee,j as P,r as b,K as te,J as ae,ao as le,o as m,l as R,w as o,d as t,T as oe,u as e,v as x,b as N,a9 as se,Q as re,s as S,c as I,a0 as h,t as M,f as z,S as ne,U as ie,$ as de,a1 as ue,a5 as pe,F as ce,q as me,P as fe,e as L,aj as U,aT as ve,aU as _e}from"./index-Cx8TPHbv.js";import{v as ge}from"./el-loading--ZFekhCg.js";import{_ as ye}from"./PageContainer-DdcoL8pY.js";import{a as H,b as O,E as be}from"./el-select-DMoVQyNp.js";import"./el-tag-D4nKCsp2.js";import{d as Ee}from"./el-popper-CVASmb7O.js";import{E as we}from"./el-input-CTaxJvgn.js";import{b as Ce,c as ke,u as Ve,E as Se,e as Ae}from"./el-table-column-DX3zBO9g.js";import"./el-checkbox-ChUEizep.js";import{a as ze,E as Ie}from"./el-overlay-BlrH0cQH.js";import{E as Le}from"./el-link-BlECjB0s.js";import{E as G,a as J}from"./el-form-item-BYOAxJaE.js";import{E as K}from"./el-button-CLRQyoNK.js";import{a as Re,i as Te,j as $e,k as Fe,l as he,m as Ue}from"./article-CEqIfk45.js";import{_ as De}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{E as Be}from"./index-jEL9bEAS.js";import{b as Pe}from"./use-form-item-2p89PICZ.js";import"./isEqual-CfdEZOFL.js";import"./_Uint8Array-BdXzh2eh.js";import"./debounce-C7l1Zdmn.js";import"./index-B7a9eqTr.js";import"./_baseClone-XL7m3LQ2.js";const Ne=Z({...Ce,direction:{type:String,default:"rtl",values:["ltr","rtl","ttb","btt"]},size:{type:[String,Number],default:"30%"},withHeader:{type:Boolean,default:!0},modalFade:{type:Boolean,default:!0},headerAriaLevel:{type:String,default:"2"}}),Me=ke,je=q({name:"ElDrawer",inheritAttrs:!1}),qe=q({...je,props:Ne,emits:Me,setup(A,{expose:E}){const f=A,c=ee();Pe({scope:"el-drawer",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/drawer.html#slots"},P(()=>!!c.title));const s=b(),a=b(),d=te("drawer"),{t:w}=ae(),{afterEnter:C,afterLeave:v,beforeLeave:_,visible:l,rendered:g,titleId:y,bodyId:V,zIndex:u,onModalClick:i,onOpenAutoFocus:n,onCloseAutoFocus:T,onFocusoutPrevented:F,onCloseRequested:D,handleClose:$}=Ve(f,s),B=P(()=>f.direction==="rtl"||f.direction==="ltr"),k=P(()=>le(f.size));return E({handleClose:$,afterEnter:C,afterLeave:v}),(r,j)=>(m(),R(e(Be),{to:r.appendTo,disabled:r.appendTo!=="body"?!1:!r.appendToBody},{default:o(()=>[t(oe,{name:e(d).b("fade"),onAfterEnter:e(C),onAfterLeave:e(v),onBeforeLeave:e(_),persisted:""},{default:o(()=>[x(t(e(ze),{mask:r.modal,"overlay-class":r.modalClass,"z-index":e(u),onClick:e(i)},{default:o(()=>[t(e(Ee),{loop:"",trapped:e(l),"focus-trap-el":s.value,"focus-start-el":a.value,onFocusAfterTrapped:e(n),onFocusAfterReleased:e(T),onFocusoutPrevented:e(F),onReleaseRequested:e(D)},{default:o(()=>[N("div",se({ref_key:"drawerRef",ref:s,"aria-modal":"true","aria-label":r.title||void 0,"aria-labelledby":r.title?void 0:e(y),"aria-describedby":e(V)},r.$attrs,{class:[e(d).b(),r.direction,e(l)&&"open"],style:e(B)?"width: "+e(k):"height: "+e(k),role:"dialog",onClick:re(()=>{},["stop"])}),[N("span",{ref_key:"focusStartRef",ref:a,class:S(e(d).e("sr-focus")),tabindex:"-1"},null,2),r.withHeader?(m(),I("header",{key:0,class:S(e(d).e("header"))},[r.$slots.title?h(r.$slots,"title",{key:1},()=>[z(" DEPRECATED SLOT ")]):h(r.$slots,"header",{key:0,close:e($),titleId:e(y),titleClass:e(d).e("title")},()=>[r.$slots.title?z("v-if",!0):(m(),I("span",{key:0,id:e(y),role:"heading","aria-level":r.headerAriaLevel,class:S(e(d).e("title"))},M(r.title),11,["id","aria-level"]))]),r.showClose?(m(),I("button",{key:2,"aria-label":e(w)("el.drawer.close"),class:S(e(d).e("close-btn")),type:"button",onClick:e($)},[t(e(ne),{class:S(e(d).e("close"))},{default:o(()=>[t(e(ie))]),_:1},8,["class"])],10,["aria-label","onClick"])):z("v-if",!0)],2)):z("v-if",!0),e(g)?(m(),I("div",{key:1,id:e(V),class:S(e(d).e("body"))},[h(r.$slots,"default")],10,["id"])):z("v-if",!0),r.$slots.footer?(m(),I("div",{key:2,class:S(e(d).e("footer"))},[h(r.$slots,"footer")],2)):z("v-if",!0)],16,["aria-label","aria-labelledby","aria-describedby","onClick"])]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])]),_:3},8,["mask","overlay-class","z-index","onClick"]),[[de,e(l)]])]),_:3},8,["name","onAfterEnter","onAfterLeave","onBeforeLeave"])]),_:3},8,["to","disabled"]))}});var xe=ue(qe,[["__file","drawer.vue"]]);const He=pe(xe),Q={__name:"ChannelSelect",props:{modelValue:{type:[Number,String]},width:{type:String}},emits:["update:modelValue"],setup(A,{emit:E}){const f=E,c=b([]);return(async()=>{const a=await Re();c.value=a.data.data})(),(a,d)=>{const w=H,C=O;return m(),R(C,{modelValue:A.modelValue,clearable:"","onUpdate:modelValue":d[0]||(d[0]=v=>f("update:modelValue",v)),style:fe({width:A.width})},{default:o(()=>[(m(!0),I(ce,null,me(c.value,v=>(m(),R(w,{key:v.id,label:v.name,value:v.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","style"])}}},Oe={__name:"ArticleEdit",emits:["success"],setup(A,{expose:E,emit:f}){const c=b(!1),s={title:"",categoryId:"",coverImg:"",content:"",state:""},a=b({...s}),d=f,w=async _=>{a.value.state=_;const l={...a.value};try{a.value.id?(await Te(a.value.id,l),U.success("修改成功")):(await $e(l),U.success("添加成功")),c.value=!1,d("success",a.value.id?"edit":"add")}catch(g){console.error("请求失败:",g),U.error("请求失败，请稍后再试")}},C=b();return E({open:async _=>{var l;if(c.value=!0,_.id){const g=await Fe(_.id);a.value=g.data.data}else a.value={...s},(l=C.value)==null||l.setHTML("")}}),(_,l)=>{const g=we,y=G,V=K,u=J,i=He;return m(),R(i,{modelValue:c.value,"onUpdate:modelValue":l[6]||(l[6]=n=>c.value=n),title:a.value.id?"编辑文章":"添加文章",direction:"rtl",size:"100%"},{default:o(()=>[t(u,{model:a.value,ref:"formRef","label-width":"100px"},{default:o(()=>[t(y,{label:"文章标题",prop:"title"},{default:o(()=>[t(g,{modelValue:a.value.title,"onUpdate:modelValue":l[0]||(l[0]=n=>a.value.title=n),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1}),t(y,{label:"文章分类",prop:"categoryId"},{default:o(()=>[t(Q,{modelValue:a.value.categoryId,"onUpdate:modelValue":l[1]||(l[1]=n=>a.value.categoryId=n),width:"100%"},null,8,["modelValue"])]),_:1}),t(y,{label:"文章封面",prop:"coverImg"},{default:o(()=>[t(g,{modelValue:a.value.coverImg,"onUpdate:modelValue":l[2]||(l[2]=n=>a.value.coverImg=n),placeholder:"请输入图片URL"},null,8,["modelValue"])]),_:1}),t(y,{label:"文章内容"},{default:o(()=>[t(g,{modelValue:a.value.content,"onUpdate:modelValue":l[3]||(l[3]=n=>a.value.content=n),type:"textarea",autosize:{minRows:2}},null,8,["modelValue"])]),_:1}),t(y,null,{default:o(()=>[t(V,{onClick:l[4]||(l[4]=n=>w("已发布")),type:"primary"},{default:o(()=>l[7]||(l[7]=[L("发布")])),_:1}),t(V,{onClick:l[5]||(l[5]=n=>w("草稿")),type:"info"},{default:o(()=>l[8]||(l[8]=[L("草稿")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}},Ge=De(Oe,[["__scopeId","data-v-5105d9af"]]),vt={__name:"ArticleManage",setup(A){const E=b([]),f=b(0),c=b(!1),s=b({page:1,pagesize:5,categoryId:"",state:""}),a=async()=>{c.value=!0;const u=await he(s.value);E.value=u.data.data.records,f.value=u.data.data.total,c.value=!1};a();const d=u=>{s.value.page=1,s.value.pagesize=u,a()},w=u=>{s.value.page=u,a()},C=()=>{s.value.page=1,a()},v=()=>{s.value.page=1,s.value.categoryId="",s.value.state="",a()},_=b(),l=()=>{_.value.open({})},g=u=>{_.value.open(u)},y=async u=>{await Ie.confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await Ue(u.id),U.success("删除成功"),a()},V=u=>{u==="add"&&(s.value.page=1),a()};return(u,i)=>{const n=K,T=G,F=H,D=O,$=J,B=Le,k=Se,r=Ae,j=be,W=ye,X=ge;return m(),R(W,{title:"文章管理"},{extra:o(()=>[t(n,{type:"primary",onClick:l},{default:o(()=>i[4]||(i[4]=[L("添加文章")])),_:1})]),default:o(()=>[t($,{inline:""},{default:o(()=>[t(T,{label:"文章分类:"},{default:o(()=>[t(Q,{modelValue:s.value.categoryId,"onUpdate:modelValue":i[0]||(i[0]=p=>s.value.categoryId=p),width:"150px"},null,8,["modelValue"])]),_:1}),t(T,{label:"发布状态:"},{default:o(()=>[t(D,{modelValue:s.value.state,"onUpdate:modelValue":i[1]||(i[1]=p=>s.value.state=p),clearable:"",placeholder:"请选择",style:{width:"150px"}},{default:o(()=>[t(F,{label:"发布",value:"0"}),t(F,{label:"草稿",value:"1"})]),_:1},8,["modelValue"])]),_:1}),t(T,null,{default:o(()=>[t(n,{onClick:C,type:"primary"},{default:o(()=>i[5]||(i[5]=[L("搜索")])),_:1}),t(n,{onClick:v},{default:o(()=>i[6]||(i[6]=[L("重置")])),_:1})]),_:1})]),_:1}),x((m(),R(r,{data:E.value},{default:o(()=>[t(k,{label:"文章标题",prop:"title"},{default:o(({row:p})=>[t(B,{type:"primary",underline:!1},{default:o(()=>[L(M(p.title),1)]),_:2},1024)]),_:1}),t(k,{label:"分类",prop:"categoryName"}),t(k,{label:"发布时间",prop:"createTime"}),t(k,{label:"状态",prop:"state"},{default:o(({row:p})=>[N("span",null,M(p.state===0?"发布":"草稿"),1)]),_:1}),t(k,{label:"操作"},{default:o(({row:p})=>[t(n,{circle:"",plain:"",type:"primary",icon:e(ve),onClick:Y=>g(p)},null,8,["icon","onClick"]),t(n,{circle:"",plain:"",type:"danger",icon:e(_e),onClick:Y=>y(p)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["data"])),[[X,c.value]]),t(j,{"current-page":s.value.page,"onUpdate:currentPage":i[2]||(i[2]=p=>s.value.page=p),"page-size":s.value.pagesize,"onUpdate:pageSize":i[3]||(i[3]=p=>s.value.pagesize=p),"page-sizes":[2,3,5,10],background:!0,layout:"jumper, total, sizes, prev, pager, next",total:f.value,onSizeChange:d,onCurrentChange:w,style:{"margin-top":"20px","justify-content":"flex-end"}},null,8,["current-page","page-size","total"]),t(Ge,{ref_key:"articleEditRef",ref:_,onSuccess:V},null,512)]),_:1})}}};export{vt as default};