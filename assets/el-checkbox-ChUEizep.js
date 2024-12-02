import{b2 as Z,ab as H,D as Q,bm as U,at as F,j as f,a$ as P,k as ee,O as ae,aA as le,r as A,a8 as _,bH as O,aI as pe,aW as Y,E,aq as ne,K,o as x,l as te,w as oe,b as J,s as C,u as n,v as $,c as S,br as N,Q as z,bI as D,a0 as M,F as ge,e as ue,t as se,f as T,m as ie,a1 as R,P as Ce,A as xe,B as Ve,as as ye,aY as Se,a5 as Le,ar as re}from"./index-Cx8TPHbv.js";import{b as ce,U as w,p as Be}from"./el-input-CTaxJvgn.js";import{f as Ee,c as j,e as de,a as X,d as be,b as G}from"./use-form-item-2p89PICZ.js";import{i as Ie}from"./isEqual-CfdEZOFL.js";const ve={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},border:Boolean,size:Z,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0},...ce(["ariaControls"])},me={[w]:e=>H(e)||Q(e)||U(e),change:e=>H(e)||Q(e)||U(e)},I=Symbol("checkboxGroupContextKey"),_e=({model:e,isChecked:c})=>{const i=F(I,void 0),l=f(()=>{var r,d;const t=(r=i==null?void 0:i.max)==null?void 0:r.value,v=(d=i==null?void 0:i.min)==null?void 0:d.value;return!P(t)&&e.value.length>=t&&!c.value||!P(v)&&e.value.length<=v&&c.value});return{isDisabled:Ee(f(()=>(i==null?void 0:i.disabled.value)||l.value)),isLimitDisabled:l}},Fe=(e,{model:c,isLimitExceeded:i,hasOwnLabel:l,isDisabled:b,isLabeledByFormItem:r})=>{const d=F(I,void 0),{formItem:t}=j(),{emit:v}=le();function s(a){var h,k,u,p;return[!0,e.trueValue,e.trueLabel].includes(a)?(k=(h=e.trueValue)!=null?h:e.trueLabel)!=null?k:!0:(p=(u=e.falseValue)!=null?u:e.falseLabel)!=null?p:!1}function o(a,h){v("change",s(a),h)}function m(a){if(i.value)return;const h=a.target;v("change",s(h.checked),a)}async function V(a){i.value||!l.value&&!b.value&&r.value&&(a.composedPath().some(u=>u.tagName==="LABEL")||(c.value=s([!1,e.falseValue,e.falseLabel].includes(c.value)),await ae(),o(c.value,a)))}const L=f(()=>(d==null?void 0:d.validateEvent)||e.validateEvent);return ee(()=>e.modelValue,()=>{L.value&&(t==null||t.validate("change").catch(a=>de()))}),{handleChange:m,onClickRoot:V}},$e=e=>{const c=A(!1),{emit:i}=le(),l=F(I,void 0),b=f(()=>P(l)===!1),r=A(!1),d=f({get(){var t,v;return b.value?(t=l==null?void 0:l.modelValue)==null?void 0:t.value:(v=e.modelValue)!=null?v:c.value},set(t){var v,s;b.value&&_(t)?(r.value=((v=l==null?void 0:l.max)==null?void 0:v.value)!==void 0&&t.length>(l==null?void 0:l.max.value)&&t.length>d.value.length,r.value===!1&&((s=l==null?void 0:l.changeEvent)==null||s.call(l,t))):(i(w,t),c.value=t)}});return{model:d,isGroup:b,isLimitExceeded:r}},Ne=(e,c,{model:i})=>{const l=F(I,void 0),b=A(!1),r=f(()=>O(e.value)?e.label:e.value),d=f(()=>{const o=i.value;return U(o)?o:_(o)?pe(r.value)?o.map(Y).some(m=>Ie(m,r.value)):o.map(Y).includes(r.value):o!=null?o===e.trueValue||o===e.trueLabel:!!o}),t=X(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value}),{prop:!0}),v=X(f(()=>{var o;return(o=l==null?void 0:l.size)==null?void 0:o.value})),s=f(()=>!!c.default||!O(r.value));return{checkboxButtonSize:t,isChecked:d,isFocused:b,checkboxSize:v,hasOwnLabel:s,actualValue:r}},fe=(e,c)=>{const{formItem:i}=j(),{model:l,isGroup:b,isLimitExceeded:r}=$e(e),{isFocused:d,isChecked:t,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,actualValue:m}=Ne(e,c,{model:l}),{isDisabled:V}=_e({model:l,isChecked:t}),{inputId:L,isLabeledByFormItem:a}=be(e,{formItemContext:i,disableIdGeneration:o,disableIdManagement:b}),{handleChange:h,onClickRoot:k}=Fe(e,{model:l,isLimitExceeded:r,hasOwnLabel:o,isDisabled:V,isLabeledByFormItem:a});return(()=>{function p(){var y,g;_(l.value)&&!l.value.includes(m.value)?l.value.push(m.value):l.value=(g=(y=e.trueValue)!=null?y:e.trueLabel)!=null?g:!0}e.checked&&p()})(),G({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>b.value&&O(e.value))),G({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.trueLabel)),G({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},f(()=>!!e.falseLabel)),{inputId:L,isLabeledByFormItem:a,isChecked:t,isDisabled:V,isFocused:d,checkboxButtonSize:v,checkboxSize:s,hasOwnLabel:o,model:l,actualValue:m,handleChange:h,onClickRoot:k}},ze=E({name:"ElCheckbox"}),De=E({...ze,props:ve,emits:me,setup(e){const c=e,i=ne(),{inputId:l,isLabeledByFormItem:b,isChecked:r,isDisabled:d,isFocused:t,checkboxSize:v,hasOwnLabel:s,model:o,actualValue:m,handleChange:V,onClickRoot:L}=fe(c,i),a=K("checkbox"),h=f(()=>[a.b(),a.m(v.value),a.is("disabled",d.value),a.is("bordered",c.border),a.is("checked",r.value)]),k=f(()=>[a.e("input"),a.is("disabled",d.value),a.is("checked",r.value),a.is("indeterminate",c.indeterminate),a.is("focus",t.value)]);return(u,p)=>(x(),te(ie(!n(s)&&n(b)?"span":"label"),{class:C(n(h)),"aria-controls":u.indeterminate?u.ariaControls:null,onClick:n(L)},{default:oe(()=>{var y,g,q,W;return[J("span",{class:C(n(k))},[u.trueValue||u.falseValue||u.trueLabel||u.falseLabel?$((x(),S("input",{key:0,id:n(l),"onUpdate:modelValue":B=>N(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,name:u.name,tabindex:u.tabindex,disabled:n(d),"true-value":(g=(y=u.trueValue)!=null?y:u.trueLabel)!=null?g:!0,"false-value":(W=(q=u.falseValue)!=null?q:u.falseLabel)!=null?W:!1,onChange:n(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[D,n(o)]]):$((x(),S("input",{key:1,id:n(l),"onUpdate:modelValue":B=>N(o)?o.value=B:null,class:C(n(a).e("original")),type:"checkbox",indeterminate:u.indeterminate,disabled:n(d),value:n(m),name:u.name,tabindex:u.tabindex,onChange:n(V),onFocus:B=>t.value=!0,onBlur:B=>t.value=!1,onClick:z(()=>{},["stop"])},null,42,["id","onUpdate:modelValue","indeterminate","disabled","value","name","tabindex","onChange","onFocus","onBlur","onClick"])),[[D,n(o)]]),J("span",{class:C(n(a).e("inner"))},null,2)],2),n(s)?(x(),S("span",{key:0,class:C(n(a).e("label"))},[M(u.$slots,"default"),u.$slots.default?T("v-if",!0):(x(),S(ge,{key:0},[ue(se(u.label),1)],64))],2)):T("v-if",!0)]}),_:3},8,["class","aria-controls","onClick"]))}});var we=R(De,[["__file","checkbox.vue"]]);const Ge=E({name:"ElCheckboxButton"}),Ue=E({...Ge,props:ve,emits:me,setup(e){const c=e,i=ne(),{isFocused:l,isChecked:b,isDisabled:r,checkboxButtonSize:d,model:t,actualValue:v,handleChange:s}=fe(c,i),o=F(I,void 0),m=K("checkbox"),V=f(()=>{var a,h,k,u;const p=(h=(a=o==null?void 0:o.fill)==null?void 0:a.value)!=null?h:"";return{backgroundColor:p,borderColor:p,color:(u=(k=o==null?void 0:o.textColor)==null?void 0:k.value)!=null?u:"",boxShadow:p?`-1px 0 0 0 ${p}`:void 0}}),L=f(()=>[m.b("button"),m.bm("button",d.value),m.is("disabled",r.value),m.is("checked",b.value),m.is("focus",l.value)]);return(a,h)=>{var k,u,p,y;return x(),S("label",{class:C(n(L))},[a.trueValue||a.falseValue||a.trueLabel||a.falseLabel?$((x(),S("input",{key:0,"onUpdate:modelValue":g=>N(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),"true-value":(u=(k=a.trueValue)!=null?k:a.trueLabel)!=null?u:!0,"false-value":(y=(p=a.falseValue)!=null?p:a.falseLabel)!=null?y:!1,onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","true-value","false-value","onChange","onFocus","onBlur","onClick"])),[[D,n(t)]]):$((x(),S("input",{key:1,"onUpdate:modelValue":g=>N(t)?t.value=g:null,class:C(n(m).be("button","original")),type:"checkbox",name:a.name,tabindex:a.tabindex,disabled:n(r),value:n(v),onChange:n(s),onFocus:g=>l.value=!0,onBlur:g=>l.value=!1,onClick:z(()=>{},["stop"])},null,42,["onUpdate:modelValue","name","tabindex","disabled","value","onChange","onFocus","onBlur","onClick"])),[[D,n(t)]]),a.$slots.default||a.label?(x(),S("span",{key:2,class:C(n(m).be("button","inner")),style:Ce(n(b)?n(V):void 0)},[M(a.$slots,"default",{},()=>[ue(se(a.label),1)])],6)):T("v-if",!0)],2)}}});var he=R(Ue,[["__file","checkbox-button.vue"]]);const Pe=xe({modelValue:{type:Ve(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:Z,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0},...ce(["ariaLabel"])}),Ae={[w]:e=>_(e),change:e=>_(e)},Oe=E({name:"ElCheckboxGroup"}),Te=E({...Oe,props:Pe,emits:Ae,setup(e,{emit:c}){const i=e,l=K("checkbox"),{formItem:b}=j(),{inputId:r,isLabeledByFormItem:d}=be(i,{formItemContext:b}),t=async s=>{c(w,s),await ae(),c("change",s)},v=f({get(){return i.modelValue},set(s){t(s)}});return ye(I,{...Be(Se(i),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:v,changeEvent:t}),ee(()=>i.modelValue,()=>{i.validateEvent&&(b==null||b.validate("change").catch(s=>de()))}),(s,o)=>{var m;return x(),te(ie(s.tag),{id:n(r),class:C(n(l).b("group")),role:"group","aria-label":n(d)?void 0:s.ariaLabel||"checkbox-group","aria-labelledby":n(d)?(m=n(b))==null?void 0:m.labelId:void 0},{default:oe(()=>[M(s.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ke=R(Te,[["__file","checkbox-group.vue"]]);const qe=Le(we,{CheckboxButton:he,CheckboxGroup:ke});re(he);re(ke);export{qe as E};
