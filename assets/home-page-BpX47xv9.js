import{Z as a,S as p,Y as s,J as o,G as n,l as r,s as c,u as m,M as u,N as h,o as x,r as f}from"./index-CQt2DmOM.js";const b=a(()=>s({class:"mt-10 flex items-center justify-start gap-x-4 px-6 pb-6 border-b"},[o({href:"/docs",class:"bttn primary"},"Get started"),o({href:"https://github.com/chrisdurfee/base",target:"_blank",class:"bttn ghost gap-2"},"Github")])),g=a(({title:e,description:t})=>r({class:"flex flex-col px-6"},[f({class:"text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]"},e),t&&n({class:"max-w-2xl text-lg font-light text-foreground mt-2"},t)])),w=a(({title:e,description:t})=>r({class:"flex flex-col"},[c({class:"scroll-m-20 text-2xl font-bold tracking-tight"},e),t&&n({class:"text-base text-muted-foreground py-2 max-w-[700px]"},t)])),i=a(({title:e,description:t},d)=>m({class:"flex flex-col w-full px-6 py-8 border-b"},[w({title:e,description:t}),d])),k=a((e,t)=>s({class:"flex flex-auto flex-col"},[s({class:"flex flex-auto flex-col w-full max-w-[1400px] m-auto sm:pt-8 lg:border-r lg:border-l"},[g({title:"Build faster with Base and Tailwind CSS",description:"Beautifully designed components inpired by the genius at Shadcn and tailored to work with Base. Base is easy to use and open source."}),b(),...t])])),l=a((e,t)=>u({...e,class:`flex p-4 max-h-[650px] max-w-[1024px] overflow-x-auto rounded-lg border bg-muted whitespace-break-spaces break-all cursor-pointer mt-4 ${e.class}`},[h({class:"font-mono flex-auto text-sm text-wrap",click:()=>{navigator.clipboard.writeText(t[0].textContent),app.notify({title:"Code copied",description:"The code has been copied to your clipboard.",icon:x.clipboard.checked})}},t)])),y=()=>new p([k([i({title:"Why Base?",description:"Base is a small framework that does things like global and local states, routing, events, dates, data tracking, data binding, data watching, and rending of components using Atoms. It is designed to be simple and fast to build. It's open source and in npm."},[l("npm install @base-framework/base"),s({class:"mt-10 flex items-center justify-start gap-x-4 pb-6"},[o({href:"https://github.com/chrisdurfee/base/wiki",target:"_blank",class:"bttn ghost gap-2"},"Base Docs")])]),i({title:"Example App",description:"This is an example Todo app built with base."},[l(`import { Button, Div, Form, H1, Input, Li, Ul } from "@base-framework/atoms";
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
Builder.render(ToDoApp(), document.body);`)]),i({title:"Example Platform"},[n({class:"text-base text-muted-foreground py-2 max-w-[700px]"},"This app is an example of a platform that uses Base to render the app on the client-side. This responsive PWA (Progressive Web App) is installable and works on all devices. The app is built with Base and Tailwind CSS and is inspired by Shadcn UI. "),s({class:"mt-10 flex items-center justify-start gap-x-4 pb-6"},[o({href:"https://ui.shadcn.com/",target:"_blank",class:"bttn ghost gap-2"},"Shadcn UI")])])])]);export{y as HomePage,w as SectionHeader,y as default};
