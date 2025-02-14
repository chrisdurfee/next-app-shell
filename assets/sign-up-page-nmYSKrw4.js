import{B as w}from"./sidebar-menu-page-nCAVFk3R-BZ2Tnlh9.js";import{s as t,Y as s,R as n,l as f,w as o,a as d,G as c,u as r,L as h,f as i,c as x,b as y,V as b,C as S,J as p,t as m,z as u,d as E,o as L,y as v}from"./index-BVqyJ8Xe.js";import"./mobile-nav-wrapper-BE_hr65B-FQj-Yrro.js";const C=t(()=>s({class:"w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-6"},[n({class:"flex flex-auto flex-col"},[s({class:"flex flex-auto flex-col space-y-4"},[f({class:"py-4 text-center"},[d({class:"text-xl font-bold"},"Congratulations!"),c("Your account has been created successfully.")]),o({variant:"primary",click:()=>app.navigate("/")},"Let's go!")])])])),R=()=>r({class:"flex flex-auto flex-col justify-center items-center"},[C()]),U=t(()=>s({class:"w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-6"},[n({class:"flex flex-auto flex-col"},[s({class:"flex flex-auto flex-col space-y-4"},[f({class:"py-4 text-center"},[d({class:"text-xl font-bold"},"Error Occurred!"),c("There was an error creating your account. Please try again.")]),o({variant:"primary",click:()=>app.navigate("/sign-up")},"Try Again")])])])),A=()=>r({class:"flex flex-auto flex-col justify-center items-center"},[U()]),a={WELCOME:"welcome",USER_DETAILS:"user_details",ERROR:"error",CONGRATULATIONS:"congratulations"},T=t(()=>n({submit:(e,l)=>{e.preventDefault(),l.showStep(a.CONGRATULATIONS)}},[h({legend:"Profile"},[new i({name:"fullname",label:"Full Name",description:"This is your public display name."},[x({placeholder:"e.g. Jane Doe",required:!0})]),new i({name:"email",label:"Email Address",description:"We'll use this to contact you."},[y({placeholder:"e.g. email@address.com",required:!0})]),new i({name:"password",label:"Password",description:"Keep it secret, keep it safe."},[x({type:"password",placeholder:"********",required:!0})]),o({type:"submit"},"Submit")])])),g=t((e,l)=>s({...e,class:`flex flex-auto flex-col ${e.class?e.class:""}`},l)),P=()=>r({class:"flex flex-auto flex-col justify-center items-center"},[r({class:"flex flex-auto flex-col md:flex-row md:max-h-[700px] w-full max-w-5xl bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-4"},[g({class:"hidden md:flex"},[b({width:"w-full",height:"h-full",class:"rounded-lg"})]),g({class:"md:max-w-[400px] md:p-4"},[s({class:"p-6 text-lg font-semibold"},"User Details"),T()])])]),k=t(e=>p({class:"logo w-[32px] h-[32px] m-[16px] block",href:"./sign-up",...e},[e.src&&m({src:e.src,alt:"Logo",class:"w-[32px] h-[32px]",error:l=>l.target.style.display="none"})])),D=t(e=>s({class:"hidden md:flex flex-auto flex-col justify-between bg-accent p-8"},[s({class:"flex items-center space-x-2"},[k({src:e.src||"/images/logo.svg"}),s({class:"text-lg font-bold"},S.APP_NAME)]),s({},[c({class:"text-sm italic"},"“Simplify your workflow with our intuitive tools.”"),c({class:"mt-2 text-sm font-semibold"},"Discover our user-friendly features.")])])),O=t(()=>s({class:"grid gap-4"},[s({class:"grid gap-4"},[x({type:"email",placeholder:"name@example.com",required:!0,"aria-required":!0})])])),N=t(()=>s({class:"grid gap-4"},[o({type:"submit"},"Sign Up")])),G=t(()=>o({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[E(L.companies.google),u("Google")])),I=({title:e,description:l})=>f({class:"text-center py-6 flex flex-auto flex-col space-y-1"},[d({class:"font-semibold tracking-tight text-2xl"},e),c({class:"text-sm text-muted-foreground"},l)]),j=t((e,l)=>s({class:"w-full mx-auto max-w-sm p-6"},l)),W=t(()=>j([I({title:"Create an account",description:"Enter your email below to create your account"}),n({class:"flex flex-col",role:"form",submit:(e,l)=>{e.preventDefault(),l.showStep(a.USER_DETAILS)}},[s({class:"grid gap-4"},[O(),N(),s({class:"relative"},[s({class:"absolute inset-0 flex items-center"},[u({class:"flex-grow border-t"})]),s({class:"relative flex justify-center text-xs uppercase"},[u({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),G()])])])),_=t(e=>p({class:"logo w-[24px] h-[24px] block md:hidden",href:"./sign-up",...e},[e.src&&m({src:e.src,alt:"Logo",class:"w-[24px] h-[24px]",error:l=>l.target.style.display="none"})])),q=t(({src:e})=>s({class:"p-4 flex justify-between"},[s({class:"flex items-center space-x-2"},[_({src:e||"/images/logo.svg"})]),o({variant:"link",click:()=>app.navigate("/")},"Sign in")])),M=t(()=>s({class:"flex flex-auto flex-col"},[q(),s({class:"flex flex-auto flex-col"},[s({class:"flex flex-auto flex-col justify-center items-center"},[W()])])])),F=()=>r({class:"flex flex-auto flex-col md:flex-row"},[D(),M()]),B=()=>s({class:"flex flex-auto flex-col"},[v("step",e=>{switch(e){case a.USER_DETAILS:return P();case a.ERROR:return A();case a.CONGRATULATIONS:return R();case a.WELCOME:default:return F()}})]),$={setupStates(){return{step:a.USER_DETAILS}},showStep(e){this.state.step=e}},H=()=>new w($,[B()]);export{H as SignUpPage,H as default};
