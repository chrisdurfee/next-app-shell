import{a as o,i as n,d as v,P as s,Z as x,t as w,H as p,J as P,f as H,o as q,E,g as S,h as I,j as $,l as k,m as D}from"./index-BZvTxwmY.js";const F="flex h-10 w-full px-3 py-2 text-sm",d="rounded-md border border-border bg-input",c="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",i="disabled:cursor-not-allowed disabled:opacity-50 [&:user-invalid]:border-destructive",u="placeholder:text-muted-foreground",b=`${F} ${d} ${c} ${u} ${i}`,M=({id:e,checked:r,bind:t,required:l})=>w({id:e,cache:"checkbox",class:"absolute opacity-0 w-full h-full cursor-pointer pointer-events-none",aria:{checked:["checked"]},required:l,checked:r,bind:t}),O=()=>p({class:"absolute text-xs pointer-events-none"},[P("checked",e=>e?H({class:"w-2 h-2 pointer-events-none",html:q.check}):null)]),T=({id:e,bind:r,checked:t,required:l,clickHandler:a})=>s({class:`relative flex items-center justify-center w-5 h-5 transition-colors duration-200 hover:border-accent-foreground
			rounded-md border
			${c}
			${i}`.trim(),onState:["checked",{"bg-primary":!0,"text-primary-foreground":!0,"border-primary":!0}],role:"checkbox",aria:{checked:["checked"]},tabIndex:0,click:a},[M({bind:r,checked:t,id:e,required:l}),O()]),j=({id:e,label:r,clickHandler:t})=>x({class:"text-base cursor-pointer",htmlFor:e,click:t},r),Q=v({state(){return{checked:this.checked??!1}},after(){this.state.checked=this.checkbox.checked},clickHandler(e){e.preventDefault(),e.stopPropagation(),this.state.toggle("checked"),this.checkbox.checked=this.state.checked,typeof this.onChange=="function"&&this.onChange(this.state.checked,this)},render(){const e=this.getId(),r=t=>this.clickHandler(t);return s({class:`flex items-center gap-x-2 cursor-pointer ${this.class||""}`},[T({id:e,bind:this.bind,checked:this.state.checked,required:this.required,clickHandler:r}),this.label&&j({id:e,label:this.label,clickHandler:r})])}}),z=e=>{if(!e||e.length===0)return"";const r=e.replace(/\D/g,"").match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);return r?r[2]?`(${r[1]}) ${r[2]}${r[3]?"-"+r[3]:""}`:r[1]||"":e},A=e=>{const r=e.target,t=z(r.value);t&&(r.value=t)},g=o(e=>n({...e,class:`${b} ${e.class||""}`.trim()})),U=o(e=>g({...e,type:"tel",name:e.name||"Phone",label:e.label||"Phone",placeholder:"(555) 555-5555",pattern:e.pattern||"\\(\\d{3}\\) \\d{3}-\\d{4}",keyup:A})),V=o(e=>g({...e,type:"email",name:e.name||"Email",label:e.label||"Email",placeholder:"Email address"})),W=o(e=>E({...e,as:"textarea",class:`flex w-full h-24 px-3 py-2 text-sm ${d} ${c} ${u} ${i} ${e.class||""}`.trim()})),X=(e={})=>s({class:"flex items-center gap-x-2"},[n({...e,type:"radio",class:"cursor-pointer appearance-none h-4 w-4 border rounded-full checked:border-primary checked:bg-primary focus:ring focus:ring-primary".trim()}),e.label&&x({forHTML:e.value,class:"cursor-pointer"},e.label)]),_=o(e=>n({...e,type:"date",class:`${d} ${c} ${u} ${i} px-3 py-2 text-sm ring-offset-background ${e.class||""}`.trim()})),Y=o(e=>n({...e,type:"time",class:`${d} ${c} ${u} ${i} px-3 py-2 text-sm ring-offset-background ${e.class||""}`.trim()})),ee=o(e=>n({...e,type:"datetime-local",class:`${d} ${c} ${u} ${i} px-3 py-2 text-sm ring-offset-background ${e.class||""}`.trim()})),re=o(e=>n({...e,type:"month",class:`${d} ${c} ${u} ${i} px-3 py-2 text-sm ring-offset-background ${e.class||""}`.trim()})),te=o(e=>n({...e,type:"week",class:`${d} ${c} ${u} ${i} px-3 py-2 text-sm ring-offset-background ${e.class||""}`.trim()})),oe=o(e=>g({...e,type:"number"})),le=o(e=>g({...e,type:"password"})),se=o(e=>g({...e,type:"url"})),ae=o(e=>g({...e,type:"hidden"})),ne=o(e=>n({...e,type:"color",class:`${d} text-foreground p-0 ${i} ${e.class||""}`.trim()})),B="file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",ie=o(e=>n({...e,type:"file",class:`${b} ${B} ${e.class||""}`.trim()})),f={gray:{backgroundColor:"bg-gray-50",textColor:"text-gray-600",ringColor:"ring-gray-500/10"},red:{backgroundColor:"bg-red-50",textColor:"text-red-700",ringColor:"ring-red-600/10"},yellow:{backgroundColor:"bg-yellow-50",textColor:"text-yellow-800",ringColor:"ring-yellow-600/20"},green:{backgroundColor:"bg-green-50",textColor:"text-green-700",ringColor:"ring-green-600/20"},blue:{backgroundColor:"bg-blue-50",textColor:"text-blue-700",ringColor:"ring-blue-700/10"},indigo:{backgroundColor:"bg-indigo-50",textColor:"text-indigo-700",ringColor:"ring-indigo-700/10"},purple:{backgroundColor:"bg-purple-50",textColor:"text-purple-700",ringColor:"ring-purple-700/10"},pink:{backgroundColor:"bg-pink-50",textColor:"text-pink-700",ringColor:"ring-pink-700/10"},primary:{backgroundColor:"bg-primary",textColor:"text-primary-foreground",ringColor:"ring-primary/10"},secondary:{backgroundColor:"bg-secondary",textColor:"text-secondary-foreground",ringColor:"ring-secondary/10"},destructive:{backgroundColor:"bg-destructive",textColor:"text-destructive-foreground",ringColor:"ring-destructive/10"},warning:{backgroundColor:"bg-warning",textColor:"text-warning-foreground",ringColor:"ring-warning/10"},outline:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-input"},ghost:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"},link:{backgroundColor:"bg-background",textColor:"text-primary",ringColor:"ring-background"}},G=e=>f[e]||f.gray,J=e=>{const{backgroundColor:r,textColor:t,ringColor:l}=G(e);return`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${r} ${t} ${l}`},ce=o((e,r)=>{const t=J(e?.type);return p({...e,class:t},r)}),L=o((e,r)=>I({...e,class:` font-medium -mt-4 -mx-1 px-2 py-2 ${e.class||""}`},r)),de=o((e,r)=>{const t=e.border==="full"?"border rounded-md":"border-t";return S({...e,class:`p-6 ${t} ${e.class||""}`},[e.legend&&L(e.legend),s({class:"flex flex-auto flex-col gap-y-6"},r)])}),ue=$({state(){return{value:this.value??0,min:this.min??0,max:this.max??100,filledPercentage:this.getFillPercentage(this.value)}},getFillPercentage(e){return(e-this.min)/(this.max-this.min)*100},render(){return s({class:"relative w-full h-4 flex items-center"},[s({class:"absolute h-2 w-full rounded-full bg-muted"}),k(({state:e})=>[s({class:"absolute h-2 bg-primary rounded-full",style:["width: [[filledPercentage]]%",e]}),s({class:`
						absolute block h-5 w-5 rounded-full border-2 border-primary bg-background
						ring-offset-background transition-colors focus-visible:outline-none
						focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
						disabled:pointer-events-none disabled:opacity-50 transform -translate-x-1/2
					`.trim(),style:["left: [[filledPercentage]]%",e]}),n({type:"range",min:["[[min]]",e],max:["[[max]]",e],value:["[[value]]",e],class:`
						absolute w-full h-full opacity-0 cursor-pointer
						${c}
						${i}
						${this.class||""}
					`.trim(),bind:this.bind,input:r=>{const t=Number(r.target.value);this.state.value=t,this.state.filledPercentage=this.getFillPercentage(t),typeof this.change=="function"&&this.change(t)}})])])}}),ge=o(e=>({tag:"select",onCreated(r){e.options&&D.setupSelectOptions(r,e.options)},...e,class:`${b} ${e.class||""}`.trim()})),N=e=>!e||isNaN(e)?null:e,m=(e,r)=>{const t=e,l=16,a=2*Math.PI*l,y=t/100*a,C=`
	<svg class="w-40 h-40 mx-auto" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
		<!-- Background Circle -->
		<circle
			cx="18"
			cy="18"
			r="${l}"
			fill="none"
			stroke="currentColor"
			stroke-width="4"
			class="bg-muted"
			stroke-opacity="0.2"
		/>
		<!-- Progress Circle -->
		<circle
			cx="18"
			cy="18"
			r="${l}"
			fill="none"
			stroke="currentColor"
			stroke-width="4"
			class="stroke-primary"
			stroke-dasharray="${a}"
			stroke-dashoffset="${a-y}"
			stroke-linecap="round"
			class="${r}"
		/>
		<!-- Percentage Text -->
		<text
			x="18"
			y="20"
			class="text-[0.25em] font-medium fill-primary"
			text-anchor="middle"
			dominant-baseline="middle">
			${t}%
		</text>
	</svg>
	`;return s({class:"circle-graph text-inherit",html:C})},pe=o(e=>{const r=e.progress||0,t=e.class||"",l=m(r,t);return s({class:"circle-graph-wrap",onSet:[e.prop,a=>(a=N(a),a?m(a,t):l)]},[l])}),R=()=>k(({state:e})=>s({class:"absolute h-full rounded-full bg-primary transition-all duration-300",style:["width: [[progress]]%;",e]})),be=$({render(){return s({class:"relative w-full h-4 rounded-full bg-muted"},[R()])},state(){return{progress:this.progress??0}},reset(){this.state.progress=0},uploadProgress(e){if(e.lengthComputable){const r=Math.round(e.loaded*100/e.total);this.set(r)}},set(e){e<0&&(e=0),e>100&&(e=100),this.state.progress=e}}),fe=({class:e,shape:r="rectangle",width:t="w-full",height:l="h-4"})=>s({class:`bg-muted animate-pulse ${t} ${l} ${r==="circle"?"rounded-full":"rounded-md"} ${e||""}`}),h={top:"bottom-full left-1/2 transform -translate-x-1/2 mb-2","top-right":"bottom-full left-full transform -translate-x-1 mb-2","top-left":"bottom-full right-full transform translate-x-1 mb-2",bottom:"top-full left-1/2 transform -translate-x-1/2 mt-2","bottom-right":"top-full left-full transform -translate-x-1 mt-2","bottom-left":"top-full right-full transform translate-x-1 mt-2",left:"top-1/2 right-full transform -translate-y-1/2 mr-2",right:"top-1/2 left-full transform -translate-y-1/2 ml-2"},Z=e=>h[e]||h.top,me=o(({position:e="top",content:r},t)=>{const l=Z(e);return Array.isArray(t)===!1&&(t=[t]),s({class:"relative group inline-block"},[...t,p({class:`
				absolute z-20 px-2 py-1 border text-sm bg-background rounded shadow-md opacity-0 whitespace-nowrap
				group-hover:opacity-100 transition-opacity duration-200 ${l} pointer-events-none
			`},r)])});export{te as A,oe as B,me as D,ae as G,ue as I,le as J,ne as K,de as L,U as M,se as O,ie as Q,X as R,V as S,ce as T,_ as U,fe as V,Y as W,Q as a,ge as b,be as c,pe as d,g as i,ee as j,W as q,re as z};
