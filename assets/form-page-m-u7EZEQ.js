import{v as t,t as u,a as e,b as l,az as d,ap as c,J as p}from"./index-BmGUrU3N.js";import{R as i,c as s,S as b,D as f,L as w,M as g,q as F,V as v,e as n}from"./tooltip-Ssw4NmQM-C9ZvlVQU.js";import{D as o}from"./doc-section-DKhVWVwZ.js";import{D as k}from"./doc-page-C_gRnfWm.js";import"./signature-panel-Cb3wM-a4-Cqud8flU.js";import"./sidebar-menu-page-BVryQj2Z-DW4mUhoc.js";import"./mobile-nav-wrapper-Dj67Pb8l-9xY5E1xO.js";const a=u((r,m)=>p({...r,class:"flex flex-auto items-center justify-center w-full py-4 space-y-8 max-w-[450px]"},m)),h=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],S=()=>t({submit:r=>{console.log("Profile Form submitted")}},[i({legend:"Profile"},[new e({name:"username",label:"Username",description:"This is your public display name."},[s({placeholder:"e.g. username",required:!0})]),new e({name:"email",label:"Email Address",description:"We'll use this to contact you."},[b({placeholder:"e.g. email@address.com",required:!0})]),l({type:"submit"},"Submit")])]),y=()=>t({submit:r=>{console.log("Preferences Form submitted")}},[i({legend:"Preferences"},[new e({name:"framework",label:"Favorite Framework",description:"Select your preferred framework."},[f({options:h,required:!0})]),new e({name:"newsletter",label:"Subscribe to Newsletter",description:"Stay updated with our latest news."},[new w({label:"Yes, sign me up!",required:!0,onChange:r=>console.log("Newsletter checked:",r)})]),l({type:"submit"},"Save Preferences")])]),x=()=>t({submit:r=>{console.log("Contact Form submitted")}},[i({legend:"Contact Us"},[new e({name:"phone",label:"Phone Number",description:"We may contact you at this number."},[g({placeholder:"e.g. +1234567890",required:!0})]),new e({name:"message",label:"Your Message",description:"Let us know how we can help you."},[F({placeholder:"Type your message here...",required:!0})]),new e({name:"message",label:"Select Framework",description:"Select your preferred framework."},[new d({required:!0,items:[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}]})]),l({type:"submit"},"Send Message")])]),P=()=>t({submit:r=>{console.log("Settings Form submitted")}},[i({legend:"Settings"},[new e({name:"notifications",label:"Enable Notifications",description:"Toggle to enable or disable notifications."},[new c({active:!0,required:!0})]),new e({name:"volume",label:"Volume Level",description:"Set your preferred volume level."},[new v({min:0,max:100,value:50})]),l({type:"submit"},"Save Settings")])]),q=u((r,m)=>i({legend:"Configuration",class:"space-y-8"},[n({label:"Cloud Provider",description:"Select your cloud provider settings to create your new cloud instance."},[new e({name:"cloud",label:"Cloud Provider",description:"Select your cloud provider."},[s({placeholder:"e.g. AWS",required:!0})]),new e({name:"region",label:"Region",description:"Select your cloud region."},[s({placeholder:"e.g. us-east-1",required:!0})])]),n({label:"Postgres"},[new e({name:"version",label:"Postgres Version",description:"Select your Postgres version."},[s({placeholder:"e.g. 15.1.0.103",required:!0})])])])),A=()=>t({submit:r=>{console.log("Settings Form submitted")}},[q()]),R=()=>k({title:"Forms",description:"Forms are used to collect user data and submit it to the server."},[o({title:"Profile Form",description:"A simple profile form with username and email fields.",preview:[a([S()])],code:`import {  Button, Input, EmailInput  } from "@base-framework/ui/atoms";
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
])`}),o({title:"Preferences Form",description:"A preferences form with a select input and a checkbox.",preview:[a([y()])],code:`import {  Button, Checkbox, Select  } from "@base-framework/ui/atoms";
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
])`}),o({title:"Form Group",description:"A form group that groups related fields together.",preview:[A()],code:`import { Input, Form, FormField, FormGorup } from "@base-framework/ui/atoms";
import { Div } from "@base-framework/atoms";
import { Atom } from "@base-framework/base";

export const MyFormSection = Atom((props, children) =>
{
	return Fieldset({ legend: 'Configuration', class: 'space-y-8' }, [
		FormGroup({ label: 'Cloud Provider', description: "Select your cloud provider settings to create your new cloud instance." }, [
			new FormField({
                name: "cloud",
                label: "Cloud Provider",
                description: "Select your cloud provider."
            }, [
                Input({ placeholder: "e.g. AWS", required: true })
            ]),
            new FormField({
                name: "region",
                label: "Region",
                description: "Select your cloud region."
            }, [
                Input({ placeholder: "e.g. us-east-1", required: true })
            ])
		]),
		FormGroup({ label: 'Postgres' }, [
			new FormField({
                name: "version",
                label: "Postgres Version",
                description: "Select your Postgres version."
            }, [
                Input({ placeholder: "e.g. 15.1.0.103", required: true })
            ])
		])
	]);
});`}),o({title:"Contact Form",description:"A contact form with a phone input and a textarea for messages.",preview:[a([x()])],code:`import {  Button, TelInput, Textarea  } from "@base-framework/ui/atoms";
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
])`}),o({title:"Settings Form",description:"A settings form with a toggle and a range slider.",preview:[a([P()])],code:`import {  Button, Toggle, RangeSlider  } from "@base-framework/ui/atoms";
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
])`})]);export{x as ContactForm,R as FormPage,A as MyForm,q as MyFormSection,y as PreferencesForm,S as ProfileForm,P as SettingsForm,R as default};
