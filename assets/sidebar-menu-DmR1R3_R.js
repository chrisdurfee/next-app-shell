import{w as s,j as a,D as l,H as i,c as n,m as c,U as o,C as d,a7 as r}from"./index-DPXb-tle.js";const u=e=>i({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[n({class:"flex flex-auto justify-center items-center px-3 py-1.5 disabled:opacity-50 disabled:cursor-not-allowed",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value),disabled:e.disabled},e.label)]),f=(e,t)=>(e.callBack=t,u(e)),b=e=>a({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[l({class:"flex flex-auto flex-row",map:[e.options,t=>f(t,e.callBack)]})]);class m extends s{render(){const t=this.select.bind(this);return b({class:this.class,options:this.options,callBack:t})}select(t){this.state.selected=t,typeof this.onSelect=="function"&&this.onSelect(t,this.parent)}setupStates(){var t;return{selected:((t=this.options[0])==null?void 0:t.value)||null}}}const g=({title:e,options:t})=>c({class:"pb-12 hidden lg:block p-6 border-r bg-sidebar max-w-[300px] h-full"},[e&&o({class:"pb-2 px-6 flex flex-col"},[d({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e)]),new r({options:t})]);export{g as S,m as T};
