import{e as n,h as l,a9 as p,_ as s,J as i,t as o,b as m,m as c,aa as u,ab as x,o as f,p as g}from"./index-YcJMzKrL.js";import"./tooltip-Cok_NM7z-tw_85lnW.js";import{S as h}from"./sidebar-menu-page-BtUJdw-T-IA0pXlls.js";import"./mobile-nav-wrapper-C7RyGC5a-DR8JfFlJ.js";const b=n(()=>i({class:"mt-10 flex items-center justify-start gap-x-4 px-6 pb-6 border-b"},[o({href:"/docs",class:"bttn primary"},"Get started"),o({href:"https://github.com/chrisdurfee/base",target:"_blank",class:"bttn ghost gap-2"},"Github")])),w=n(({title:e,description:t})=>l({class:"flex flex-col px-6"},[g({class:"text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"},e),t&&s({class:"max-w-2xl text-lg font-light text-foreground mt-2"},t)])),y=n(({title:e,description:t})=>l({class:"flex flex-col"},[p({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&s({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),a=n(({title:e,description:t},d)=>c({class:"flex flex-col w-full px-6 py-8 border-b"},[y({title:e,description:t}),d])),v=n((e,t)=>i({class:"flex flex-auto flex-col"},[i({class:"flex flex-auto flex-col w-full max-w-[1400px] m-auto sm:pt-8 lg:border-r lg:border-l"},[w({title:"Build faster with Base and Tailwind CSS",description:"Beautifully designed components using Tailwind CSS inspired by the genius at Shadcn and tailored to work with Base. Base is easy to use and open source."}),b(),...t])])),r=n((e,t)=>u({...e,class:`flex p-4 max-h-[650px] max-w-[1024px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer mt-4 ${e.class}`},[x({class:"font-mono flex-auto text-sm text-wrap",click:()=>{navigator.clipboard.writeText(t[0].textContent),app.notify({title:"Code copied",description:"The code has been copied to your clipboard.",icon:f.clipboard.checked})}},t)])),D=()=>new h([v([a({title:"Why Base?",description:"Base is a small framework that does things like global and local states, routing, events, dates, data tracking, data binding, data watching, and rending of components using Atoms. It is designed to be simple and fast to build. It's open source and in npm."},[r("npm install @base-framework/base"),i({class:"mt-10 flex items-center justify-start gap-x-4 pb-6"},[o({href:"https://github.com/chrisdurfee/base/wiki",target:"_blank",class:"bttn ghost gap-2"},"Base Docs")])]),a({title:"Example App",description:"This is an example Todo app built with base."},[r(`import { Button, Div, Form, H1, Input, Li, Ul } from "@base-framework/atoms";
import { Builder, Data } from "@base-framework/base";

/**
 * This will create a to-do app.
 *
 * @returns {object}
 */
export function ToDoApp()
{
    /**
     * This will set up the data store for the to-do app.
     */
    const data = new Data({ items: [] });

    /**
     * This will handle the form submission for adding a new to-do item.
     *
     * @param {object} event
     */
    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const form = event.target;
        const input = form.querySelector('input');

        // add the new to-do item to the array of items
        data.push('items', input.value);
        input.value = '';
    };

    /**
     * This will handle removing a to-do item from the list.
     *
     * @param {number} index
     * @returns {boolean}
     */
    const handleRemove = (index) => data.splice('items', index);

    return Div([
        H1('To-Do App'),
        Form({ submit: handleSubmit }, [
            Input({ placeholder: 'Add a new item' }),
            Button({ type: 'submit' }, 'Add')
        ]),
        Ul({
            for: [data, 'items', (item, index) => Li([
                Span(item),
                Button({ click: () => handleRemove(index) }, 'Remove')
            ])]
        })
    ]);
}

/**
 * This will render the to-do app to the body of the document.
 */
Builder.render(ToDoApp(), document.body);`)]),a({title:"Sign Up, Onboarding, and Sign In"},[s({class:"text-base text-muted-foreground py-2 max-w-[700px]"},"This platform comes with the front end pages to sign up, onboard, and sign in. "),i({class:"mt-10 flex items-center justify-start gap-x-4 pb-6"},[o({href:"./sign-up",target:"_blank",class:"bttn ghost gap-2"},"Sign Up"),o({href:"./onboarding",target:"_blank",class:"bttn ghost gap-2"},"Onboarding"),m({variant:"ghost",click:()=>app.signOut()},"Sign Out")])]),a({title:"Example Platform"},[s({class:"text-base text-muted-foreground py-2 max-w-[700px]"},"This app is an example of a platform that uses Base to render the app on the client-side. This responsive PWA (Progressive Web App) is installable and works on all devices. The app is built with Base and Tailwind CSS and is inspired by Shadcn UI. "),i({class:"mt-10 flex items-center justify-start gap-x-4 pb-6"},[o({href:"https://ui.shadcn.com/",target:"_blank",class:"bttn ghost gap-2"},"Shadcn UI")])]),a({title:"Vite Support"},[s({class:"text-base text-muted-foreground py-2 max-w-[700px]"},"This app is configured to use Vite for local development and production builds. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. ")]),a({title:"Code Splitting"},[s({class:"text-base text-muted-foreground py-2 max-w-[700px]"},"Code splitting is supported to optimize performance and load only necessary code when required.")]),a({title:"Documentation"},[s({class:"text-base text-muted-foreground py-2 max-w-[700px]"},"Documentation is provided to assist developers in understanding and utilizing the framework, platform, and components effectively."),i({class:"mt-10 flex items-center justify-start gap-x-4 pb-6"},[o({href:"/docs",class:"bttn primary"},"Learn more")])]),a({title:"Example Pages"},[s({class:"text-base text-muted-foreground py-2 max-w-[700px]"},"This app contains examples pages for the most common application needs. Calendar, Messaging, Dashboard, Lists, Grids, and more.")])])]);export{D as HomePage,y as SectionHeader,D as default};
