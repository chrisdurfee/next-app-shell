import{Q as o,as as b,m as n,at as x,S as u,a2 as m,au as v,_ as p,a as l,h as f,I as y,y as h,av as k}from"./index-1q65WSl-.js";const L=o(e=>({tag:"select",...e,class:`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${e.class||""}`,onCreated(t){e.options&&b.setupSelectOptions(t,e.options)}})),w=o((e,t)=>n({...e,class:"flex flex-auto flex-col space-y-2"},t)),S=o((e,t)=>x({...e,class:"flex auto text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"},t)),I=o((e,t)=>u({...e,class:"text-sm text-muted-foreground"},t)),F=o((e,t)=>u({...e,class:"text-sm text-destructive"},t)),E=e=>e.tag==="input"||e.tag==="select"||e.tag==="textarea",g=(e,t,a)=>e.map(s=>(s.children&&s.children.length>0&&(s.children=g(s.children,t,a)),s.required&&E(s)?{...s,aria:{invalid:["hasError"]},invalid:a,input:t}:s)),V=o((e,t)=>{const i=g(t,r=>{r.target.checkValidity()&&e.setError(null)},r=>{e.setError(r.target.validationMessage)});return n({...e,class:"w-full"},i)}),D=m({state(){return{error:null,hasError:!1,value:this.defaultValue??""}},render(){const e=this.name,t=this.getId(`${e}`),{label:a,description:s}=this,i=r=>{this.state.error=r,this.state.hasError=!!r};return n({class:"flex flex-auto space-y-4"},[w([S({htmlFor:t},a),V({id:t,name:e,value:this.state.value,setError:i},this.children),s&&I({id:this.getId("description")},s),n({onState:["error",r=>r&&F(r)]})])])}}),T=(e,t=null)=>{e.target.checkValidity()&&(e.preventDefault(),t&&t(e))},$=o((e,t)=>v({...e,submit:a=>T(a,e.submit),class:`space-y-8 w-full ${e.class??""}`},t)),d=window.matchMedia,c=o(({value:e,label:t,icon:a})=>f({class:'text-sm gap-1 font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground data-[state="active"]:border-primary [&:has([data-state="active"])]:border-primary',onState:["method",{active:e}],dataSet:["method",["state",e,"active"]],click:(s,{state:i})=>{i.method=e,localStorage.setItem("theme",e),e==="system"&&localStorage.removeItem("theme"),M(e)}},[y(a),h(t)])),M=e=>{var s;const t=document.documentElement;if(e==="system"&&(e=(s=window.matchMedia)!=null&&s.call(window,"(prefers-color-scheme: dark)").matches?"dark":"light"),d&&!d("(prefers-color-scheme: "+e+")").matches){t.classList.add(e);return}const a=e==="light"?"dark":"light";t.classList.remove(a)},j=p({render(){return n({class:"flex flex-auto flex-col"},[n({class:"grid grid-cols-3 gap-4"},[c({label:"System",value:"system",icon:l.adjustments.horizontal}),c({label:"Light",value:"light",icon:l.sun}),c({label:"Dark",value:"dark",icon:l.moon})])])},state(){return{method:window.localStorage.getItem("theme")??"system"}}}),A=m({state(){return{active:this.active??!1}},after(){this.state.active=this.checkbox.checked},render(){return f({class:"relative inline-flex h-6 w-11 min-w-11 items-center rounded-full bg-muted transition-colors focus:outline-none",onState:["active",{"bg-primary":!0,"bg-muted":!1}],click:(t,{state:a})=>{a.toggle("active"),this.checkbox.checked=a.active}},[k({cache:"checkbox",class:"opacity-0 absolute top-0 left-0 bottom-0 right-0 w-full h-full",checked:this.state.active,bind:this.bind,required:this.required}),h({class:"absolute h-5 w-5 bg-background rounded-full shadow-md transform transition-transform",onState:["active",{"translate-x-[22px]":!0,"translate-x-[2px]":!1}]})])}});export{$ as F,L as S,j as T,D as a,A as b};