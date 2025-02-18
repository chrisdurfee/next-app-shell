import{B as g}from"./sidebar-menu-page-nCAVFk3R-Basxwi6_.js";import{l as m,s as d,b as S,G as n,v as b,Y as t,z as w,r as x,a as v,o as y,y as c,w as p}from"./index-Cj8HJDWU.js";import{V as h}from"./tooltip-JULShdSj-CPxm7Tcu.js";import"./mobile-nav-wrapper-BE_hr65B-CArK1C3D.js";const r=({title:e,description:s})=>m({class:"text-left flex flex-auto flex-col space-y-1 mb-4"},[S({class:"font-semibold tracking-tight text-2xl"},e),n({class:"text-base text-muted-foreground"},s)]),l=d((e,s)=>b({class:"flex flex-auto flex-col items-start gap-2 rounded-lg border p-3 text-left transition-all hover:bg-muted/50 my-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-2 focus:ring-ring focus:ring-offset-2"},[t({class:"flex flex-auto flex-col w-full gap-2"},[t({class:"flex w-full flex-col gap-1"},[w({class:"font-semibold text-base text-foreground"},e.title)]),n({class:"text-base text-muted-foreground"},e.content),t({class:"mt-2"},s)])])),T=(e,s)=>[t({class:"w-full md:max-w-[400px] p-4"},s),t({class:"hidden md:flex flex-auto"},[h({width:"w-full",height:"h-full",class:"rounded-lg"})])],E=(e,s)=>[t({class:"hidden md:flex flex-auto"},[h({width:"w-full",height:"h-full",class:"rounded-lg"})]),t({class:"w-full md:max-w-[400px] p-4"},s)],o=d((e,s)=>t({class:"flex flex-auto flex-col md:flex-row fadeIn"},(e==null?void 0:e.variant)==="right"?E(e,s):T(e,s))),P=()=>o([t({class:"flex flex-col items-start"},[r({title:"Default Pages",description:"The App Shell is set up with default pages for easy customization."}),l({title:"Sign Up",content:"The sign up page is set up to allow for multi step form submission."}),l({title:"Onboarding",content:"The onboarding process is designed to guide users through the initial setup effortlessly."}),l({title:"Sign In & Sign Out",content:"The sign in and sign out will update the app to reflect the user's authentication status."})])]),O=()=>o([t({class:"flex flex-col items-start"},[t({class:"w-16 h-16 mb-6 text-primary"},[v(y.circleCheck)]),x({class:"text-2xl font-bold mb-4"},"You're Ready to Build!"),n({class:"text-base text-muted-foreground mb-4"},"You now have a solid understanding of the App Shell framework. Start building your application with confidence.")])]),C=()=>o({variant:"right"},[t({class:"flex flex-col items-start"},[r({title:"Modular Development",description:"The app is built with a modular architecture for easy extensibility and team collaboration."}),l({title:"Module Structure",content:"Each module is self-contained in the src/modules directory with its own: components, pages, routes, and business logic."}),l({title:"Extensibility",content:"Easily extend the app by adding new modules that integrate seamlessly with existing ones."})])]),L=()=>o({variant:"right"},[t({class:"flex flex-col items-start"},[r({title:"Project Setup",description:"Modular, scalable, and easy to configure."}),l({title:"Configurable Setup",content:"Easily configure your project with a few simple steps to get started."}),l({title:"Vite Support",content:"Leverage Vite for a fast and efficient development experience."}),l({title:"Installable",content:"The app is installable on any device for a native-like experience using Progressive Web App (PWA) features."})])]),A=()=>o([r({title:"Theme Support",description:"Customizable themes for a personalized experience."}),l({title:"Light & Dark Themes",content:"The base app supports light and dark themes with customizable theme variables."}),l({title:"Mobile First Design",content:"The app is designed with a mobile-first approach for a responsive experience."})]),I=()=>o([t({class:"flex flex-col items-start"},[x({class:"text-2xl font-bold mb-4"},"App Shell Basics"),n({class:"text-base text-muted-foreground mb-4"},"Building apps should be fast, easy, and fun. With App Shell, you can create a new project in minutes."),n({class:"text-base text-muted-foreground mb-4"},"In this guide, we will walk you through the necessary steps to get started.")])]),i={WELCOME:"welcome",PROJECT_SETUP:"project_setup",THEMING:"theming",MODULES:"modules",APP_SHELL:"app_shell",CONGRATULATIONS:"congratulations"},M=()=>t({class:"flex flex-auto flex-col items-center justify-center p-4"},[t({class:"flex flex-auto flex-col md:max-h-[800px] w-full max-w-5xl bg-card text-card-foreground shadow rounded-xl sm:border sm:shadow-lg p-4 fadeIn"},[c("step",e=>{switch(e){case i.PROJECT_SETUP:return L();case i.THEMING:return A();case i.MODULES:return C();case i.APP_SHELL:return P();case i.CONGRATULATIONS:return O();case i.WELCOME:default:return I()}})]),t({class:"w-full max-w-5xl flex justify-between mt-4"},[t({class:"flex"},[c("previous",e=>e&&p({click:(s,a)=>a.prevStep(),variant:"outline"},"Previous"))]),t({class:"flex"},[c("next",e=>e&&p({click:(s,a)=>a.nextStep()},"Next"))])])]),f=()=>Object.values(i),N={setupStates(){return{step:i.WELCOME,next:!0,previous:!1}},showStep(e){this.state.step=e},getNextStep(){const e=f(),s=this.state.step,a=e.indexOf(s),u=e[a+1];return u?(this.state.previous=!0,u):null},nextStep(){const e=this.getNextStep();if(!e){app.navigate("/");return}this.showStep(e)},getPrevStep(){const e=f(),s=this.state.step,a=e.indexOf(s);return a===1?(this.state.previous=!1,e[0]):(this.state.previous=!0,e[a-1])},prevStep(){const e=this.getPrevStep();this.showStep(e)}},D=()=>new g(N,[M()]);export{D as OnboardingPage,D as default};
