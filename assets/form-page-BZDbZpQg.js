import{a8 as a,L as s,k as e,q as l,aB as n,w as i,al as u,E as c,aC as d,ap as b,aS as p,af as f,aQ as w,e as F,Y as g}from"./index-BDcHE6-I.js";import{D as o}from"./doc-section-DtSxH-ZC.js";import{D as k}from"./doc-page-Jelupsg9.js";const t=F((r,m)=>g({...r,class:"flex flex-auto items-center justify-center w-full py-4 space-y-8 max-w-[450px]"},m)),v=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],h=()=>a({submit:r=>{console.log("Profile Form submitted")}},[s({legend:"Profile"},[new e({name:"username",label:"Username",description:"This is your public display name."},[l({placeholder:"e.g. username",required:!0})]),new e({name:"email",label:"Email Address",description:"We'll use this to contact you."},[n({placeholder:"e.g. email@address.com",required:!0})]),i({type:"submit"},"Submit")])]),S=()=>a({submit:r=>{console.log("Preferences Form submitted")}},[s({legend:"Preferences"},[new e({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[u({options:v,required:!0})]),new e({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new c({label:"Yes, sign me up!",required:!0,onChange:r=>console.log("Newsletter checked:",r)})]),i({type:"submit"},"Save Preferences")])]),y=()=>a({submit:r=>{console.log("Contact Form submitted")}},[s({legend:"Contact Us"},[new e({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[d({placeholder:"e.g. +1234567890",required:!0})]),new e({name:"message",label:"Your Message",description:"Let us know how we can help you."},[b({placeholder:"Type your message here...",required:!0})]),new e({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new p({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),i({type:"submit"},"Send Message")])]),x=()=>a({submit:r=>{console.log("Settings Form submitted")}},[s({legend:"Settings"},[new e({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new f({active:!0,required:!0})]),new e({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new w({min:0,max:100,value:50})]),i({type:"submit"},"Save Settings")])]),j=()=>k({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[o({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[t([h()])],code:`import {  Button, Input, EmailInput  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";

Fieldset({ legend: 'Profile' }, [
    new FormField({
        name: "username",
        label: "Username",
        description: "This is your public display name."
    }, [
        Input({ placeholder: "e.g. username", required: true })
    ]),

    new FormField({
        name: "email",
        label: "Email Address",
        description: "We'll use this to contact you."
    }, [
        EmailInput({ placeholder: "e.g. email@address.com", required: true })
    ]),

    Button({ type: "submit" }, "Submit")
])`}),o({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[t([S()])],code:`import {  Button, Checkbox, Select  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";

Form({ submit: (e) => { console.log("Preferences Form submitted"); } }, [
    Fieldset({ legend: 'Preferences' }, [
        new FormField({
            name: "framework",
            label: "Favorite Framework",
            description: "Select your preferred framework."
        }, [
            Select({ options: frameworks, required: true })
        ]),

        new FormField({
            name: "newsletter",
            label: "Subscribe to Newsletter",
            description: "Stay updated with our latest news."
        }, [
            new Checkbox({ label: "Yes, sign me up!", required: true, onChange: (checked) => console.log("Newsletter checked:", checked) })
        ]),

        Button({ type: "submit" }, "Save Preferences")
    ])
])`}),o({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[t([y()])],code:`import {  Button, TelInput, Textarea  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";
import {  Combobox  } from "@base-framework/ui/molecules";

Form({ submit: (e) => { console.log("Contact Form submitted"); } }, [
    Fieldset({ legend: 'Contact Us' }, [
        new FormField({
            name: "phone",
            label: "Phone Number",
            description: "We may contact you at this number."
        }, [
            TelInput({ placeholder: "e.g. +1234567890", required: true })
        ]),

        new FormField({
            name: "message",
            label: "Your Message",
            description: "Let us know how we can help you."
        }, [
            Textarea({ placeholder: "Type your message here...", required: true })
        ]),

        new FormField({
            name: "message",
            label: "Select Framework",
            description: "Select your preferred framework."
        }, [
            new Combobox({
                required: true,
                items: [
                    { value: 'next.js', label: 'Next.js' },
                    { value: 'sveltekit', label: 'SvelteKit' },
                    { value: 'nuxt.js', label: 'Nuxt.js' },
                    { value: 'remix', label: 'Remix' },
                    { value: 'astro', label: 'Astro' },
                ],
            })
        ]),

        Button({ type: "submit" }, "Send Message")
    ])
])`}),o({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[t([x()])],code:`import {  Button, Toggle, RangeSlider  } from "@base-framework/ui/atoms";
import {  Form, FormField  } from "@base-framework/ui/molecules";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";
import {  Fieldset  } from "@base-framework/ui/atoms";
import {  Button  } from "@base-framework/ui/atoms";
import {  Toggle  } from "@base-framework/ui/molecules";
import {  RangeSlider  } from "@base-framework/ui/atoms";

Form({ submit: (e) => { console.log("Settings Form submitted"); } }, [
    Fieldset({ legend: 'Settings' }, [
        new FormField({
            name: "notifications",
            label: "Enable Notifications",
            description: "Toggle to enable or disable notifications."
        }, [
            new Toggle({ active: true, required: true })
        ]),

        new FormField({
            name: "volume",
            label: "Volume Level",
            description: "Set your preferred volume level."
        }, [
            new RangeSlider({ min: 0, max: 100, value: 50 })
        ]),

        Button({ type: "submit" }, "Save Settings")
    ])
])`})]);export{y as ContactForm,j as FormPage,S as PreferencesForm,h as ProfileForm,x as SettingsForm,j as default};
