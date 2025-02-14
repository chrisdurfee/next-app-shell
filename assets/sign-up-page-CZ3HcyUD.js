import{B as w}from"./sidebar-menu-page-nCAVFk3R-C6_ag80F.js";import{s as t,Y as s,R as n,l as i,w as c,a as u,G as o,u as r,L as h,f as x,c as f,b as y,V as b,C as S,J as p,t as m,z as d,d as E,o as L,y as v}from"./index-CMRUlLug.js";import"./mobile-nav-wrapper-BE_hr65B-SSoaBUQw.js";const C=t(()=>s({class:"w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-6"},[n({class:"flex flex-auto flex-col"},[s({class:"flex flex-auto flex-col space-y-4"},[i({class:"py-4 text-center"},[u({class:"text-xl font-bold"},"Congratulations!"),o("Your account has been created successfully.")]),c({variant:"primary",click:()=>app.navigate("/")},"Let's go!")])])])),R=()=>r({class:"flex flex-auto flex-col justify-center items-center"},[C()]),A=t(()=>s({class:"w-full max-w-sm bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-6"},[n({class:"flex flex-auto flex-col"},[s({class:"flex flex-auto flex-col space-y-4"},[i({class:"py-4 text-center"},[u({class:"text-xl font-bold"},"Error Occurred!"),o("There was an error creating your account. Please try again.")]),c({variant:"primary",click:()=>app.navigate("/sign-up")},"Try Again")])])])),T=()=>r({class:"flex flex-auto flex-col justify-center items-center"},[A()]),a={WELCOME:"welcome",USER_DETAILS:"user_details",ERROR:"error",CONGRATULATIONS:"congratulations"},U=t(()=>n({submit:(e,l)=>{e.preventDefault(),l.showStep(a.CONGRATULATIONS)}},[h({legend:"Profile"},[new x({name:"fullname",label:"Full Name",description:"This is your public display name."},[f({placeholder:"e.g. Jane Doe",required:!0})]),new x({name:"email",label:"Email Address",description:"We'll use this to contact you."},[y({placeholder:"e.g. email@address.com",required:!0})]),new x({name:"password",label:"Password",description:"Keep it secret, keep it safe."},[f({type:"password",placeholder:"********",required:!0})]),c({type:"submit"},"Submit")])])),g=t((e,l)=>s({...e,class:`flex flex-auto flex-col ${e.class?e.class:""}`},l)),P=()=>r({class:"flex flex-auto flex-col justify-center items-center"},[r({class:"flex flex-auto flex-col md:flex-row md:max-h-[700px] w-full max-w-5xl bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-4"},[g({class:"hidden md:flex"},[b({width:"w-full",height:"h-full",class:"rounded-lg"})]),g({class:"md:max-w-[400px] md:p-4"},[i({class:"p-6 "},[u({class:"text-lg font-semibold"},"Let's Get to Know You"),o({class:"text-sm text-gray-500"},"Enter your details below to create an account.")]),U()])])]),k=t(e=>p({class:"logo w-[32px] h-[32px] m-[16px] block",href:"./sign-up",...e},[e.src&&m({src:e.src,alt:"Logo",class:"w-[32px] h-[32px]",error:l=>l.target.style.display="none"})])),O=t(e=>s({class:"hidden md:flex flex-auto flex-col justify-between bg-accent p-8"},[s({class:"flex items-center space-x-2"},[k({src:e.src||"/images/logo.svg"}),s({class:"text-lg font-bold"},S.APP_NAME)]),s({},[o({class:"text-sm italic"},"“Simplify your workflow with our intuitive tools.”"),o({class:"mt-2 text-sm font-semibold"},"Discover our user-friendly features.")])])),D=t(()=>s({class:"grid gap-4"},[s({class:"grid gap-4"},[f({type:"email",placeholder:"name@example.com",required:!0,"aria-required":!0})])])),G=t(()=>s({class:"grid gap-4"},[c({type:"submit"},"Sign Up")])),N=t(()=>c({variant:"outline",class:"gap-2 w-full",click:()=>console.log("Sign in with Google"),"aria-label":"Sign in with Google"},[E(L.companies.google),d("Google")])),I=({title:e,description:l})=>i({class:"text-center py-6 flex flex-auto flex-col space-y-1"},[u({class:"font-semibold tracking-tight text-2xl"},e),o({class:"text-sm text-muted-foreground"},l)]),j=t((e,l)=>s({class:"w-full mx-auto max-w-sm p-6"},l)),W=t(()=>j([I({title:"Create an account",description:"Enter your email below to create your account"}),n({class:"flex flex-col",role:"form",submit:(e,l)=>{e.preventDefault(),l.showStep(a.USER_DETAILS)}},[s({class:"grid gap-4"},[D(),G(),s({class:"relative"},[s({class:"absolute inset-0 flex items-center"},[d({class:"flex-grow border-t"})]),s({class:"relative flex justify-center text-xs uppercase"},[d({class:"bg-background px-2 text-muted-foreground"},"or continue with")])]),N()])])])),_=t(e=>p({class:"logo w-[24px] h-[24px] block md:hidden",href:"./sign-up",...e},[e.src&&m({src:e.src,alt:"Logo",class:"w-[24px] h-[24px]",error:l=>l.target.style.display="none"})])),q=t(({src:e})=>s({class:"p-4 flex justify-between"},[s({class:"flex items-center space-x-2"},[_({src:e||"/images/logo.svg"})]),c({variant:"link",click:()=>app.navigate("/")},"Sign in")])),M=t(()=>s({class:"flex flex-auto flex-col"},[q(),s({class:"flex flex-auto flex-col"},[s({class:"flex flex-auto flex-col justify-center items-center"},[W()])])])),F=()=>r({class:"flex flex-auto flex-col md:flex-row"},[O(),M()]),B=()=>s({class:"flex flex-auto flex-col"},[v("step",e=>{switch(e){case a.USER_DETAILS:return P();case a.ERROR:return T();case a.CONGRATULATIONS:return R();case a.WELCOME:default:return F()}})]),Y={setupStates(){return{step:a.USER_DETAILS}},showStep(e){this.state.step=e}},z=()=>new w(Y,[B()]);export{z as SignUpPage,z as default};
