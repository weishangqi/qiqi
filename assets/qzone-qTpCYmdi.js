import{x as g,r as c,o as _,c as u,F as f,q as z,b as s,t as i,d as o,e as d,g as q,n as h}from"./index-Cx8TPHbv.js";import{E as x,H as y,a as k,b as L,c as H,d as $}from"./stat-CD4JPJDF.js";import{g as w}from"./article-CEqIfk45.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-jEL9bEAS.js";import"./debounce-C7l1Zdmn.js";import"./index-B7a9eqTr.js";const N=()=>g.get("/qzone"),S={class:"qzone-container"},b={class:"qzone-content"},B={class:"qzone-image"},E={class:"qzone-info"},V={class:"my-tag"},F={__name:"qzoneList",setup(v){const e=c([]),n=c([]);return(async()=>{const r=await N();e.value=r.data.data,console.log(e.value),n.value=e.value.map(a=>a.img)})(),(r,a)=>{const m=x;return _(),u("div",S,[(_(!0),u(f,null,z(e.value,(t,p)=>(_(),u("div",{class:"item-card",key:t.id},[s("div",b,i(t.content),1),s("div",B,[o(m,{src:t.image,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,"preview-src-list":n.value,"initial-index":p,fit:"cover",lazy:""},null,8,["src","preview-src-list","initial-index"])]),s("div",E,[s("span",V,[a[0]||(a[0]=s("i",null,null,-1)),d(i(t.tag),1)]),s("span",null,[a[1]||(a[1]=s("i",{class:"fa fa-clock"},null,-1)),d(i(t.createTime),1)]),s("span",null,[a[2]||(a[2]=s("i",{class:"fa fa-eye"},null,-1)),d(i(t.views),1)]),s("span",null,[a[3]||(a[3]=s("i",{class:"fa fa-thumbs-up"},null,-1)),d(i(t.likes),1)])])]))),128))])}}},T={class:"article-container"},A={class:"main"},D={class:"list"},M={class:"aside"},Q={class:"info"},R={class:"notice"},j={class:"link"},C={class:"latest"},G={class:"stat"},J={__name:"qzone",setup(v){const e=h();c(e.params.id);const n=c([]),l=c({page:1,pagesize:10,categoryId:3}),r=async()=>{const a=await w(l.value);n.value=a.data.data.records,total.value=a.data.data.total};return q(()=>{l.value.categoryId=e.params.id,console.log(l.value),r()}),(a,m)=>(_(),u("div",T,[s("div",A,[s("div",D,[o(F)])]),s("div",M,[s("div",Q,[o(k)]),s("div",R,[o(L)]),s("div",j,[o(H)]),s("div",C,[o(y,{articles:n.value},null,8,["articles"])]),s("div",G,[o($)])])]))}},Z=I(J,[["__scopeId","data-v-06d25a39"]]);export{Z as default};
