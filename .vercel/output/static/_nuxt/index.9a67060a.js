import{b as P,c as ue,_ as ae,a as me}from"./Divider.215ac8eb.js";import{_ as M,aA as R,aC as h,ab as H,a0 as i,$ as v,a3 as r,aJ as _,az as $,aK as p,aI as B,aL as V,a7 as q,a4 as z,aS as K,aX as te,aY as x,aZ as ve,aD as L,aE as F,ac as b,aF as E,aG as j,aW as g,a_ as ee,ae as O,af as W,a$ as ge,a5 as w,b0 as pe,aH as ye,b1 as be,b2 as he,a6 as I,aM as $e,aV as re,b3 as oe,b4 as ke}from"./entry.22d38018.js";import"./nuxt-link.a6060dee.js";const A=R(h.ui.strategy,h.ui.alert,ve),_e=H({components:{UIcon:P,UAvatar:ue,UButton:ae},inheritAttrs:!1,props:{title:{type:String,required:!0},description:{type:String,default:null},icon:{type:String,default:()=>A.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>A.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>A.default.color,validator(e){return[...h.ui.colors,...Object.keys(A.color)].includes(e)}},variant:{type:String,default:()=>A.default.variant,validator(e){return[...Object.keys(A.variant),...Object.values(A.color).flatMap(a=>Object.keys(a))].includes(e)}},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["close"],setup(e){const{ui:a,attrs:n}=L("alert",F(e,"ui"),A),t=b(()=>{var u,l;const s=((l=(u=a.value.color)==null?void 0:u[e.color])==null?void 0:l[e.variant])||a.value.variant[e.variant];return E(j(a.value.wrapper,a.value.rounded,a.value.shadow,a.value.padding,s==null?void 0:s.replaceAll("{color}",e.color)),e.class)});return{ui:a,attrs:n,alertClass:t}}}),Ie={class:"w-0 flex-1"},Ce={key:1,class:"mt-3 flex items-center gap-2"},we={class:"flex-shrink-0 flex items-center gap-3"},Se={key:0,class:"flex items-center gap-2"};function Be(e,a,n,t,s,u){const l=P,o=ue,c=ae;return i(),v("div",B({class:e.alertClass},e.attrs),[r("div",{class:$(["flex gap-3",{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}])},[e.icon?(i(),_(l,{key:0,name:e.icon,class:$(e.ui.icon.base)},null,8,["name","class"])):p("",!0),e.avatar?(i(),_(o,B({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):p("",!0),r("div",Ie,[r("p",{class:$(e.ui.title)},[V(e.$slots,"title",{title:e.title},()=>[q(z(e.title),1)])],2),e.description||e.$slots.description?(i(),v("p",{key:0,class:$(e.ui.description)},[V(e.$slots,"description",{description:e.description},()=>[q(z(e.description),1)])],2)):p("",!0),(e.description||e.$slots.description)&&e.actions.length?(i(),v("div",Ce,[(i(!0),v(K,null,te(e.actions,(d,f)=>(i(),_(c,B({key:f},{...e.ui.default.actionButton,...d},{onClick:x(d.click,["stop"])}),null,16,["onClick"]))),128))])):p("",!0)]),r("div",we,[!e.description&&!e.$slots.description&&e.actions.length?(i(),v("div",Se,[(i(!0),v(K,null,te(e.actions,(d,f)=>(i(),_(c,B({key:f},{...e.ui.default.actionButton,...d},{onClick:x(d.click,["stop"])}),null,16,["onClick"]))),128))])):p("",!0),e.closeButton?(i(),_(c,B({key:1,"aria-label":"Close"},{...e.ui.default.closeButton,...e.closeButton},{onClick:a[0]||(a[0]=x(d=>e.$emit("close"),["stop"]))}),null,16)):p("",!0)])],2)],16)}const je=M(_e,[["render",Be]]);function se(e){return typeof e=="function"?e():g(e)}const ie=()=>{};function ze(e,a){function n(...t){return new Promise((s,u)=>{Promise.resolve(e(()=>a.apply(this,t),{fn:a,thisArg:this,args:t})).then(s).catch(u)})}return n}function Oe(e,a={}){let n,t,s=ie;const u=o=>{clearTimeout(o),s(),s=ie};return o=>{const c=se(e),d=se(a.maxWait);return n&&u(n),c<=0||d!==void 0&&d<=0?(t&&(u(t),t=null),Promise.resolve(o())):new Promise((f,y)=>{s=a.rejectOnCancel?y:f,d&&!t&&(t=setTimeout(()=>{n&&u(n),t=null,f(o())},d)),n=setTimeout(()=>{t&&u(t),t=null,f(o())},c)})}}function Ae(e,a=200,n={}){return ze(Oe(a,n),e)}const ce=(e,a)=>{const n=ee("form-events",void 0),t=ee("form-group",void 0),s=ee("form-inputs",void 0),u=O(e==null?void 0:e.id);W(()=>{u.value=(e==null?void 0:e.id)??(t==null?void 0:t.inputId.value),t&&(t.inputId.value=u.value,s&&(s.value[t.name.value]=u))});const l=O(!1);function o(y,k){n&&n.emit({type:y,path:k})}function c(){o("blur",t==null?void 0:t.name.value),l.value=!0}function d(){o("change",t==null?void 0:t.name.value)}const f=Ae(()=>{l.value&&o("input",t==null?void 0:t.name.value)},300);return{inputId:u,name:b(()=>(e==null?void 0:e.name)??(t==null?void 0:t.name.value)),size:b(()=>{var k;const y=a.size[t==null?void 0:t.size.value]?t==null?void 0:t.size.value:null;return(e==null?void 0:e.size)??y??((k=a==null?void 0:a.default)==null?void 0:k.size)}),color:b(()=>{var y;return(y=t==null?void 0:t.error)!=null&&y.value?"red":e==null?void 0:e.color}),emitFormBlur:c,emitFormInput:f,emitFormChange:d}},S=R(h.ui.strategy,h.ui.input,ge),Ne=H({components:{UIcon:P},inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text"},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>S.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(S.size).includes(e)}},color:{type:String,default:()=>S.default.color,validator(e){return[...h.ui.colors,...Object.keys(S.color)].includes(e)}},variant:{type:String,default:()=>S.default.variant,validator(e){return[...Object.keys(S.variant),...Object.values(S.color).flatMap(a=>Object.keys(a))].includes(e)}},inputClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","blur"],setup(e,{emit:a,slots:n}){const{ui:t,attrs:s}=L("input",F(e,"ui"),S,F(e,"class")),{emitFormBlur:u,emitFormInput:l,size:o,color:c,inputId:d,name:f}=ce(e,S),y=O(null),k=()=>{var C;e.autofocus&&((C=y.value)==null||C.focus())},T=C=>{a("update:modelValue",C.target.value),l()},Q=C=>{u(),a("blur",C)};W(()=>{setTimeout(()=>{k()},e.autofocusDelay)});const X=b(()=>{var ne,le;const C=((le=(ne=t.value.color)==null?void 0:ne[c.value])==null?void 0:le[e.variant])||t.value.variant[e.variant];return E(j(t.value.base,t.value.rounded,t.value.placeholder,t.value.size[o.value],e.padded?t.value.padding[o.value]:"p-0",C==null?void 0:C.replaceAll("{color}",c.value),(m.value||n.leading)&&t.value.leading.padding[o.value],(U.value||n.trailing)&&t.value.trailing.padding[o.value]),e.inputClass)}),m=b(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),U=b(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),D=b(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),Y=b(()=>e.loading&&!m.value?e.loadingIcon:e.trailingIcon||e.icon),Z=b(()=>j(t.value.icon.leading.wrapper,t.value.icon.leading.pointer,t.value.icon.leading.padding[o.value])),G=b(()=>j(t.value.icon.base,h.ui.colors.includes(c.value)&&t.value.icon.color.replaceAll("{color}",c.value),t.value.icon.size[o.value],e.loading&&"animate-spin")),J=b(()=>j(t.value.icon.trailing.wrapper,t.value.icon.trailing.pointer,t.value.icon.trailing.padding[o.value])),fe=b(()=>j(t.value.icon.base,h.ui.colors.includes(c.value)&&t.value.icon.color.replaceAll("{color}",c.value),t.value.icon.size[o.value],e.loading&&!m.value&&"animate-spin"));return{ui:t,attrs:s,name:f,inputId:d,input:y,isLeading:m,isTrailing:U,inputClass:X,leadingIconName:D,leadingIconClass:G,leadingWrapperIconClass:Z,trailingIconName:Y,trailingIconClass:fe,trailingWrapperIconClass:J,onInput:T,onBlur:Q}}}),Ve=["id","name","value","type","required","placeholder","disabled"];function Te(e,a,n,t,s,u){const l=P;return i(),v("div",{class:$(e.ui.wrapper)},[r("input",B({id:e.inputId,ref:"input",name:e.name,value:e.modelValue,type:e.type,required:e.required,placeholder:e.placeholder,disabled:e.disabled||e.loading,class:["form-input",e.inputClass]},e.attrs,{onInput:a[0]||(a[0]=(...o)=>e.onInput&&e.onInput(...o)),onBlur:a[1]||(a[1]=(...o)=>e.onBlur&&e.onBlur(...o))}),null,16,Ve),V(e.$slots,"default"),e.isLeading&&e.leadingIconName||e.$slots.leading?(i(),v("span",{key:0,class:$(e.leadingWrapperIconClass)},[V(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[w(l,{name:e.leadingIconName,class:$(e.leadingIconClass)},null,8,["name","class"])])],2)):p("",!0),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(i(),v("span",{key:1,class:$(e.trailingWrapperIconClass)},[V(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[w(l,{name:e.trailingIconName,class:$(e.trailingIconClass)},null,8,["name","class"])])],2)):p("",!0)],2)}const Ue=M(Ne,[["render",Te]]),N=R(h.ui.strategy,h.ui.textarea,pe),Fe=H({inheritAttrs:!1,props:{modelValue:{type:[String,Number],default:""},id:{type:String,default:null},name:{type:String,default:null},placeholder:{type:String,default:null},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3},autoresize:{type:Boolean,default:!1},autofocus:{type:Boolean,default:!1},autofocusDelay:{type:Number,default:100},resize:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(N.size).includes(e)}},color:{type:String,default:()=>N.default.color,validator(e){return[...h.ui.colors,...Object.keys(N.color)].includes(e)}},variant:{type:String,default:()=>N.default.variant,validator(e){return[...Object.keys(N.variant),...Object.values(N.color).flatMap(a=>Object.keys(a))].includes(e)}},textareaClass:{type:String,default:null},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},emits:["update:modelValue","blur"],setup(e,{emit:a}){const{ui:n,attrs:t}=L("textarea",F(e,"ui"),N,F(e,"class")),{emitFormBlur:s,emitFormInput:u,inputId:l,color:o,size:c,name:d}=ce(e,N),f=O(null),y=()=>{var m;e.autofocus&&((m=f.value)==null||m.focus())},k=()=>{if(e.autoresize){if(!f.value)return;f.value.rows=e.rows;const m=window.getComputedStyle(f.value),U=parseInt(m.paddingTop),D=parseInt(m.paddingBottom),Y=U+D,Z=parseInt(m.lineHeight),{scrollHeight:G}=f.value,J=(G-Y)/Z;J>e.rows&&(f.value.rows=J)}},T=m=>{k(),a("update:modelValue",m.target.value),u()},Q=m=>{a("blur",m),s()};W(()=>{setTimeout(()=>{y()},e.autofocusDelay)}),ye(()=>e.modelValue,()=>{be(k)}),W(()=>{setTimeout(()=>{y(),k()},100)});const X=b(()=>{var U,D;const m=((D=(U=n.value.color)==null?void 0:U[o.value])==null?void 0:D[e.variant])||n.value.variant[e.variant];return E(j(n.value.base,n.value.rounded,n.value.placeholder,n.value.size[c.value],e.padded?n.value.padding[c.value]:"p-0",m==null?void 0:m.replaceAll("{color}",o.value),!e.resize&&"resize-none"),e.textareaClass)});return{ui:n,attrs:t,name:d,inputId:l,textarea:f,textareaClass:X,onInput:T,onBlur:Q}}}),De=["id","value","name","rows","required","disabled","placeholder"];function Me(e,a,n,t,s,u){return i(),v("div",{class:$(e.ui.wrapper)},[r("textarea",B({id:e.inputId,ref:"textarea",value:e.modelValue,name:e.name,rows:e.rows,required:e.required,disabled:e.disabled,placeholder:e.placeholder,class:["form-textarea",e.textareaClass]},e.attrs,{onInput:a[0]||(a[0]=(...l)=>e.onInput&&e.onInput(...l)),onBlur:a[1]||(a[1]=(...l)=>e.onBlur&&e.onBlur(...l))}),null,16,De)],2)}const qe=M(Fe,[["render",Me]]),We=R(h.ui.strategy,h.ui.card,he),Re=H({inheritAttrs:!1,props:{as:{type:String,default:"div"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:n}=L("card",F(e,"ui"),We),t=b(()=>E(j(a.value.base,a.value.rounded,a.value.divide,a.value.ring,a.value.shadow,a.value.background),e.class));return{ui:a,attrs:n,cardClass:t}}});function He(e,a,n,t,s,u){return i(),_($e(e.$attrs.onSubmit?"form":e.as),B({class:e.cardClass},e.attrs),{default:I(()=>[e.$slots.header?(i(),v("div",{key:0,class:$([e.ui.header.base,e.ui.header.padding,e.ui.header.background])},[V(e.$slots,"header")],2)):p("",!0),r("div",{class:$([e.ui.body.base,e.ui.body.padding,e.ui.body.background])},[V(e.$slots,"default")],2),e.$slots.footer?(i(),v("div",{key:1,class:$([e.ui.footer.base,e.ui.footer.padding,e.ui.footer.background])},[V(e.$slots,"footer")],2)):p("",!0)]),_:3},16,["class"])}const de=M(Re,[["render",He]]),Le=r("h1",{class:"text-left text-2xl"},"Create Post",-1),Ee={class:"font-light mt-2 text-slate-400 italic"},Je={class:"flex items-center justify-between"},Ke={class:""},Pe={class:"font-thin text-sm"},Qe={class:"text-sm font-thin italic"},Xe={__name:"CreatePostForm",setup(e){const a=O(""),n=O(""),t=O(!1),s=re();async function u(){console.log("creating post for address:",s.account),t.value=!0;try{const l=await s.blogContract.methods.createPost(a.value,n.value).send({from:s.account});console.log("create post res:",l)}catch(l){console.log("error posting:",l)}t.value=!1}return(l,o)=>{const c=Ue,d=qe,f=ae,y=me,k=de;return i(),v("div",null,[Le,r("p",Ee," Account: "+z(g(s).account)+" ",1),w(c,{modelValue:g(a),"onUpdate:modelValue":o[0]||(o[0]=T=>oe(a)?a.value=T:null),color:"primary",variant:"outline",placeholder:"Post Title...",class:"my-4"},null,8,["modelValue"]),w(d,{modelValue:g(n),"onUpdate:modelValue":o[1]||(o[1]=T=>oe(n)?n.value=T:null),color:"primary",variant:"outline",placeholder:"Post Content...",class:"mb-4"},null,8,["modelValue"]),g(t)?(i(),_(f,{key:0,variant:"ghost",loading:"",block:""},{default:I(()=>[q("Posting...")]),_:1})):p("",!0),g(t)?p("",!0):(i(),_(f,{key:1,onClick:u,block:""},{default:I(()=>[q("Create Post")]),_:1})),g(a)?(i(),_(y,{key:2,class:"mt-8",label:"Preview",ui:{label:"font-light text-gray-400 dark:text-gray-400"}})):p("",!0),g(a)?(i(),_(k,{key:3,class:"my-8"},{header:I(()=>[r("div",Je,[r("h2",Ke,z(g(a)),1)])]),footer:I(()=>[r("p",Qe,z(g(s).account),1)]),default:I(()=>[r("p",Pe,z(g(n)),1)]),_:1})):p("",!0)])}}},Ye=Xe,Ze=R(h.ui.strategy,h.ui.skeleton,ke),Ge=H({inheritAttrs:!1,props:{class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(e){const{ui:a,attrs:n}=L("skeleton",F(e,"ui"),Ze),t=b(()=>E(j(a.value.base,a.value.background,a.value.rounded),e.class));return{ui:a,attrs:n,skeletonClass:t}}});function xe(e,a,n,t,s,u){return i(),v("div",B({class:e.skeletonClass},e.attrs),null,16)}const et=M(Ge,[["render",xe]]),tt=r("h1",{class:"text-2xl mb-8"},"Posts",-1),at={key:0,class:"font-thin italic text-slate-400"},nt={key:1,class:"font-thin italic text-slate-400"},lt={class:""},ot={class:"font-thin text-sm"},st={class:"text-sm font-thin italic"},it={__name:"DisplayPosts",setup(e){const a=re(),n=O(null),t=O("Create your first post on the left");setInterval(s,2e3);async function s(){if(a.account){let u=await a.blogContract.methods.getAllPosts(a.account).call();u=u.map(l=>(l[0]=Number(l[0]),l[4]=Number(l[4]),l[5]=Number(l[5]),l.timestamp=Number(l.timestamp),l.id=Number(l.id),l.likes=Number(l.likes),l)),n.value=u,n.value.length>0&&(t.value="Loading Posts...")}}return W(async()=>{s()}),(u,l)=>{const o=et,c=de;return i(),v("div",null,[tt,g(a).account?p("",!0):(i(),v("p",at," Please connect wallet to see your posts ")),g(n)&&g(n).length===0?(i(),v("p",nt," Create your first post on the left ")):p("",!0),g(a).account&&!g(n)?(i(),_(c,{key:2,class:"mb-8"},{header:I(()=>[w(o,{class:"h-4 w-[150px]"})]),default:I(()=>[w(o,{class:"h-4 w-[250px] mb-4"}),w(o,{class:"h-4 w-[200px]"})]),_:1})):p("",!0),(i(!0),v(K,null,te(g(n),d=>(i(),_(c,{class:"mb-8"},{header:I(()=>[r("h2",lt,z(d.title),1)]),footer:I(()=>[r("p",st,z(d.author),1)]),default:I(()=>[r("p",ot,z(d.content),1)]),_:2},1024))),256))])}}},ut=it,rt={},ct=r("div",{class:"mb-8"},[r("h1",{class:"text-2xl mb-2"},"Quick Start Guide"),r("div",{class:"font-thin text-gray-400"},[r("p",null,"1. Install Metamask & switch to Sepolia Test Network"),r("p",null,[q(" 2. Get some test "),r("a",{class:"text-primary",target:"_blank",href:"https://sepoliafaucet.com/"},"Sepolia Eth")]),r("p",null,"3. Create a new post that will live on-chain")])],-1),dt={class:"md:flex md:flex-row w-full md:justify-between flex-col"};function ft(e,a){const n=je,t=Ye,s=ut;return i(),v(K,null,[w(n,{icon:"i-heroicons-exclamation-triangle",color:"primary",variant:"solid",title:"This is a desktop web application. Mobile implementation is under development.",class:"mb-8"}),ct,r("div",dt,[w(t,{class:"md:w-2/5 w-full"}),w(s,{class:"md:w-2/5 md:mt-0 mt-8"})])],64)}const pt=M(rt,[["render",ft]]);export{pt as default};