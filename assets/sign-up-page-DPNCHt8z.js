import{u as a,r as s,Y as o,l as r,a as l,G as c,y as n,B as d}from"./index-B1V06mH8.js";const x=s(({title:e,description:t})=>r({class:"flex flex-col space-y-1.5 p-6"},[l({class:"scroll-m-20 text-3xl font-bold tracking-tight"},e),t&&c({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),u=s((e,t)=>o({class:"rounded-xl sm:border sm:shadow-lg bg-card text-card-foreground shadow w-full mx-auto max-w-sm"},t)),p=()=>a({class:"flex flex-auto flex-col justify-center items-center"},[u({class:"rounded-xl sm:border sm:shadow-lg bg-card text-card-foreground shadow w-full mx-auto max-w-sm"},[x({title:"Sign Up",description:"Please enter your credentials to sign up."})])]),m=()=>o({class:"flex flex-auto flex-col"},[n("step",e=>{switch(e){default:return p()}})]),f={WELCOME:"welcome"},g={setupStates(){return{step:f.WELCOME}},showStep(e){this.state.step=e}},w=()=>new d(g,[m()]);export{w as SignUpPage,w as default};
