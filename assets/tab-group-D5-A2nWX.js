import{w as s,j as a,D as i,H as l,d as n}from"./index-CQW-86z7.js";const c=e=>l({class:"inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",dataSet:["selected",["state",e.value,"active"]]},[n({class:"flex flex-auto justify-center items-center px-3 py-1.5 disabled:opacity-50 disabled:cursor-not-allowed",onSet:["selected",{selected:e.value}],click:t=>e.callBack(e.value),disabled:e.disabled},e.label)]),o=(e,t)=>(e.callBack=t,c(e)),d=e=>a({class:`tab items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ${e.class}`},[i({class:"flex flex-auto flex-row",map:[e.options,t=>o(t,e.callBack)]})]);class r extends s{render(){const t=this.select.bind(this);return d({class:this.class,options:this.options,callBack:t})}select(t){this.state.selected=t,typeof this.onSelect=="function"&&this.onSelect(t,this.parent)}setupStates(){var t;return{selected:((t=this.options[0])==null?void 0:t.value)||null}}}export{r as T};