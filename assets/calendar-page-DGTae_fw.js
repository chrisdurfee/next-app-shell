import{f as N,g as v,m as o,b as F,S as T,C as b,F as k,B as g,d as x,h as S}from"./index-BmP53Oi2.js";import{T as Y}from"./tooltip-DKjc7c4W.js";class P extends N{render(){return v([o({class:"px-4 flex flex-auto flex-col pt-[80px] sm:pt-0"},this.children)])}}const O=t=>t?"bg-accent text-primary":"",B=t=>t?"text-muted-foreground opacity-50":"",W=(t,e)=>t===e,H=(t,e)=>W(t,e)?"bg-primary text-primary-foreground":"",I=(t,e,a,n)=>{const s=H(e,n);if(s)return s;const l=O(t);if(t)return l;const h=B(a);return a?h:"text-foreground"},D=({day:t,currentDate:e,date:a,isToday:n,isOutsideMonth:s,select:l})=>F({class:`
        flex flex-auto flex-col p-2 h-20 rounded-md
        ${I(n,e,s,a)}
        hover:bg-accent hover:text-accent-foreground focus:z-10
      `,disabled:t===null,"aria-label":t?`Day ${t}`:null,click:()=>l(a)},[T({class:"text-sm font-medium"},String(t))]),d=t=>(t*=1,t<10?`0${t}`:t),i=(t,e,a)=>`${t}-${d(e+1)}-${d(a)}`,m=(t,e,a,n)=>t===n.date&&e===n.month&&a===n.year,j=(t,e,a)=>{const{year:n,month:s}=t,l=i(n,s,t.date),h=new Date(n,s,1).getDay(),w=new Date(n,s+1,0).getDate(),f=new Date(n,s,0).getDate(),c=[],y=s===0?11:s-1,C=s===0?n-1:n;for(let r=h-1;r>=0;r--){const u=m(f-r,y,C,e);c.push(D({day:f-r,currentDate:l,date:i(C,y,f-r),isToday:u,isOutsideMonth:!0,select:a}))}for(let r=1;r<=w;r++){const u=m(r,s,n,e);c.push(D({day:r,currentDate:l,date:i(n,s,r),isToday:u,isOutsideMonth:!1,select:a}))}const M=s===11?0:s+1,p=s===11?n+1:n,$=(7-c.length%7)%7;for(let r=1;r<=$;r++){const u=m(r,M,p,e);c.push(D({day:r,currentDate:l,date:i(p,M,r),isToday:u,isOutsideMonth:!0,select:a}))}return c},z=()=>["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(e=>T({class:"text-center font-semibold text-muted-foreground py-1 text-xs"},e)),A=t=>o({class:"flex flex-auto flex-col w-full",onSet:["currentDate",()=>[o({class:"grid grid-cols-7"},z()),o({class:"grid grid-cols-7 h-full"},j(t.current,t.today,t.select))]]}),E=t=>o({class:"justify-between flex items-center mb-4"},[k({class:"scroll-m-20 text-3xl font-bold tracking-tight"},"[[monthName]] [[current.year]]"),o({class:"flex items-center space-x-2"},[g({variant:"icon",icon:x.chevron.single.left,click:t.previous}),g({variant:"icon",icon:x.chevron.single.right,click:t.next}),Y({content:"Add Event",position:"left"},g({variant:"icon",icon:x.circlePlus}))])]),G=t=>o({class:"flex flex-auto flex-col w-full space-y-1"},[E(t),A({current:t.current,today:t.today,select:t.select})]),L=()=>new P({getSelectedDate(t){const e=this.selectedDate?new Date(addTime(this.selectedDate)):t;return new Date(e.getFullYear(),e.getMonth(),e.getDate())},setData(){const t=new Date,e=this.getSelectedDate(t),a=e.getMonth();return new b({monthName:this.getMonthName(a),currentDate:`${e.getFullYear()}-${a+1}-${e.getDate()}`,current:{date:e.getDate(),year:e.getFullYear(),month:a},today:{date:t.getDate(),month:t.getMonth(),year:t.getFullYear()}})},getMonthName(t){return S.monthNames[t]},goToPreviousMonth(){const t=this.data;let e=t.current.month,a=t.current.year;e===0?(e=11,a--):e--,this.setCurrentDate(e,a)},goToNextMonth(){const t=this.data;let e=t.current.month,a=t.current.year;e===11?(e=0,a++):e++,this.setCurrentDate(e,a)},setCurrentDate(t,e,a=null){const n=this.data;n.current.month=t,n.current.year=e,typeof a=="number"&&(n.current.date=d(a)),n.currentDate=`${e}-${d(t+1)}-${n.current.date}`,n.monthName=this.getMonthName(t)},selectDate(t){const e=new Date(t+"T00:00:00");this.setCurrentDate(e.getMonth(),e.getFullYear(),e.getDate()),typeof this.selectedCallBack=="function"&&this.selectedCallBack(this.data.currentDate)},render(){return v([o({class:"px-4 flex flex-auto flex-col pt-[80px] sm:pt-0"},[o({class:"flex flex-auto flex-col w-full h-full"},[G({current:this.data.current,today:this.data.today,select:t=>this.selectDate(t),next:()=>this.goToNextMonth(),previous:()=>this.goToPreviousMonth()})])])])}});export{L as CalendarPage,G as MonthCalendar,L as default};
