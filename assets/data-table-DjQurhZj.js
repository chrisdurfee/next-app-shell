import{Q as n,ak as d,H as m,m as a,u,S as l,y as i,al as g,_ as w,f as b,am as h,an as f,G as x,ao as c,N as p,a as R,ap as y}from"./index-CRP7RoXl.js";import{C as k}from"./checkbox-B-5B1knJ.js";const v=n(({name:e,email:s})=>a({class:"min-w-0 flex-auto"},[l({class:"text-base font-semibold leading-6 m-0"},e),l({class:"truncate text-sm leading-5 text-muted-foreground m-0"},s)])),I=()=>a({class:"flex items-center gap-x-1.5"},[a({class:"flex-none rounded-full bg-emerald-500/20 p-1"},[a({class:"h-1.5 w-1.5 rounded-full bg-emerald-500"})]),l({class:"text-xs leading-5 text-gray-500"},"Online")]),S=e=>l({class:"text-xs leading-5 text-muted-foreground"},[i("Last seen "),g({datetime:e},"3h ago")]),U=(e,s)=>e==="online"?I():S(s),D=n(({role:e,lastSeen:s,status:t})=>a({class:"hidden shrink-0 sm:flex sm:flex-col sm:items-end"},[l({class:"text-sm leading-6 m-0"},e),U(t,s)])),T=e=>e.split(" ").map(t=>t[0]).join(""),C=n(e=>m({class:"fadeIn flex justify-between gap-x-6 py-4 px-4 rounded-md hover:bg-accent"},[a({class:"flex min-w-0 gap-x-4"},[u({src:e.image,alt:e.name,fallbackText:T(e.name)}),v({name:e.name,email:e.email})]),D({role:e.role,lastSeen:e.lastSeen,status:e.status})])),H=n(e=>new d({cache:"list",key:"name",items:e.users,role:"list",class:"divide-y divide-border",rowItem:C})),j=e=>f([x({class:"text-muted-foreground border-b",map:[e.headers,s=>{if(s.label==="checkbox")return c({class:"cursor-pointer py-3 px-4 text-base"},[new k({class:"mr-2",onChange:e.toggle})]);const t=s.align||"items-center justify-start";return c({class:"cursor-pointer py-3 px-4 text-base",click:s.sortable&&(()=>e.sort(s.key))},[a({class:`flex flex-auto w-full items-center ${t}`},[i(s.label),s.sortable&&p({class:"ml-2",html:R.arrows.upDown})])])}]})]),A=({key:e,rows:s,selectRow:t,rowItem:o})=>new y({cache:"table",key:e,items:s,rowItem:r=>o(r,t),class:"divide-y divide-border"}),Q=w({setData(){return new b({selectedRows:[]})},toggleAllSelectedRows(){const e=this.table.getRows(),s=this.data.selectedRows.length===e.length,t=s?[]:e;this.data.selectedRows=t,this.updateTable(!s)},updateTable(e){const s=this.table.getRows();s.forEach(t=>t.selected=e),this.table.setRows(s)},selectRow(e){const s=e.selected??!1;e.selected=!s;const t=this.data.get("selectedRows"),o=e.selected?[...t,e]:t.filter(r=>r!==e);this.data.selectedRows=o},render(){const e=this.rows;return a({class:"w-full"},[a({class:"w-full rounded-md border"},[h({class:"w-full"},[this.headers&&j({headers:this.headers,sort:s=>this.sortRows(s),toggle:()=>this.toggleAllSelectedRows()}),A({key:this.key,rows:e,selectRow:this.selectRow.bind(this),rowItem:this.rowItem})])])])},remove(e){this.table.remove(e)},setRows(e){this.table.setRows(e)},append(e){this.table.append(e)},mingle(e,s=!1){this.table.mingle(e,s)},prepend(e){this.table.prepend(e)},beforeDestroy(){this.data.selectedRows=[]}});export{Q as D,H as U};
