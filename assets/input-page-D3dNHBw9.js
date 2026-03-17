import{_ as o,N as s,l as u,a$ as c,aE as p,b0 as h,b1 as f,b2 as w,b3 as v,b4 as I,b5 as x,b6 as k,b7 as T,ad as l,I as i,aj as y,b8 as C,s as S,b9 as F,ba as D,bb as r,bc as E,bd as P,be as R,bf as U,bg as N,bh as X,bi as j,bj as L,aG as A,av as M,a3 as q,aF as W,bk as G,M as H,ao as B,bl as K,a0 as _,al as d,b as J,aD as V,C as Q}from"./index-BOO5Pnj0.js";import{U as Y}from"./signature-panel-BWHC9V2v-CAplkTPP.js";import{D as a}from"./doc-section-BYWZkHEJ.js";import{D as Z}from"./doc-page-DSSU-fnG.js";import"./sidebar-menu-page-D12NEBpp-CYabCRqd.js";import"./sidebar-menu-BHHp2hXa-BfYRJzQL.js";const $=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],z=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"au",label:"Australia"},{value:"de",label:"Germany"}],t=Q((e,n)=>o({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},n)),m=({label:e,description:n,active:g,onChange:b})=>o({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[o({class:"flex flex-col pr-8"},[l({class:"font-semibold"},e),i({class:"text-sm text-muted-foreground"},n)]),new d({active:g,change:b})]),O=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],ne=()=>Z({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[o({class:"grid gap-2 w-full max-w-[350px]"},[s({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),u({}),c({}),p({placeholder:"Enter your text here..."})])],code:`import {  Input, EmailInput, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Floating Inputs (New)",description:"Floating inputs provide a label-first form experience with presets for common input types.",preview:[o({class:"grid gap-3 w-full max-w-[420px]"},[h({label:"First name",name:"firstName",required:!0}),f({label:"Phone",name:"phone"}),w({label:"Email",name:"email",required:!0}),v({label:"Password",required:!0,bind:"password"}),I({label:"Age",name:"age"}),x({label:"Website",name:"website"}),k({label:"Bio",name:"bio"}),T({label:"Country",name:"country",required:!0,options:z})])],code:`import {
    FloatingInput,
    FloatingTelInput,
    FloatingEmailInput,
    FloatingPasswordInput,
    FloatingNumberInput,
    FloatingUrlInput,
    FloatingTextarea,
    FloatingSelect
} from '@base-framework/ui/atoms';

const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
];

FloatingInput({ label: 'First name', name: 'firstName', required: true });
FloatingTelInput({ label: 'Phone', name: 'phone' });
FloatingEmailInput({ label: 'Email', name: 'email', required: true });
FloatingPasswordInput({ label: 'Password', required: true, bind: 'password' });
FloatingNumberInput({ label: 'Age', name: 'age' });
FloatingUrlInput({ label: 'Website', name: 'website' });
FloatingTextarea({ label: 'Bio', name: 'bio' });
FloatingSelect({ label: 'Country', name: 'country', required: true, options: countries });`}),a({title:"Floating Components",description:"Available floating form components and what each one is used for.",preview:[o({class:"grid gap-2 w-full max-w-[720px]"},[o({class:"grid grid-cols-2 gap-2 p-3 border rounded-md border-muted-foreground/20 text-sm"},[l({class:"font-semibold"},"FloatingInput"),i({class:"text-muted-foreground"},"Base floating label input — pass any type"),l({class:"font-semibold"},"FloatingTelInput"),i({class:"text-muted-foreground"},"Telephone with auto (XXX) XXX-XXXX formatting"),l({class:"font-semibold"},"FloatingEmailInput"),i({class:"text-muted-foreground"},"Email preset"),l({class:"font-semibold"},"FloatingPasswordInput"),i({class:"text-muted-foreground"},"Password preset"),l({class:"font-semibold"},"FloatingNumberInput"),i({class:"text-muted-foreground"},"Number preset"),l({class:"font-semibold"},"FloatingUrlInput"),i({class:"text-muted-foreground"},"URL preset"),l({class:"font-semibold"},"FloatingTextarea"),i({class:"text-muted-foreground"},"Multi-line textarea with floating label"),l({class:"font-semibold"},"FloatingSelect"),i({class:"text-muted-foreground"},"Select dropdown with floating label + custom chevron arrow")])])],code:`// Component list
FloatingInput        // Base floating label input — pass any type
FloatingTelInput     // Telephone with auto (XXX) XXX-XXXX formatting
FloatingEmailInput   // Email preset
FloatingPasswordInput// Password preset
FloatingNumberInput  // Number preset
FloatingUrlInput     // URL preset
FloatingTextarea     // Multi-line textarea with floating label
FloatingSelect       // Select dropdown with floating label + custom chevron arrow`}),a({title:"Search Dropdown",description:"This is a search dropdown.",preview:[o({class:"relative w-full max-w-md"},[new y({options:O,onSelect:e=>console.log(e)})])],code:`import {  SearchDropdown  } from "@base-framework/ui/organisms";

const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Cherry', value: 'cherry' },
    { label: 'Date', value: 'date' },
    { label: 'Elderberry', value: 'elderberry' },
    { label: 'Fig', value: 'fig' },
    { label: 'Grape', value: 'grape' },
    { label: 'Honeydew', value: 'honeydew' }
];

new SearchDropdown({ options, onSelect: (item) => console.log(item) })
`}),a({title:"Search Input",description:"This is a search input.",preview:[o({class:"relative w-full max-w-md"},[C({placeholder:"Search...",bind:"",keyup:(e,n)=>{},icon:S.magnifyingGlass.default})])],code:`import {  SearchInput  } from "@base-framework/ui/organisms";

SearchInput({
    placeholder: 'Search...',
    bind: '',
    keyup: (e, parent) => {},
    icon: Icons.magnifyingGlass.default,
})
`}),a({title:"Simple Search Input",description:"A simple search input with an icon on the left and a pill shape. Supports custom icons, placeholder text, and various input events.",preview:[o({class:"relative w-full max-w-md"},[F({placeholder:"Search...",keyup:e=>console.log(e.target.value)})])],code:`import { SimpleSearchInput } from "@base-framework/ui/organisms";

SimpleSearchInput({
    placeholder: 'Search...',
    icon: Icons.magnifyingGlass.default, // optional, defaults to magnifying glass
    containerClass: '', // optional class for the container
    bind: 'searchValue', // optional data binding
    keyup: (e) => console.log(e.target.value),
    change: (e) => console.log(e.target.value)
})
`}),a({title:"File Input",description:"This is a file input.",preview:[t([D({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),a({title:"Radio Input",description:"This is a radio input.",preview:[o({class:"grid gap-2"},[r({name:"theme",label:"System",value:"system"}),r({name:"theme",label:"Light",value:"light"}),r({name:"theme",label:"Dark",value:"dark"})])],code:`import {  Radio  } from "@base-framework/ui/atoms";
import { Div } from "@base-framework/atoms";

Div({ class: 'grid gap-2' }, [
    Radio({
        name: 'theme',
        label: 'System',
        value: 'system',
    }),
    Radio({
        name: 'theme',
        label: 'Light',
        value: 'light',
    }),
    Radio({
        name: 'theme',
        label: 'Dark',
        value: 'dark',
    })
])`}),a({title:"Text Input",description:"This is a text input.",preview:[t([s({type:"text",placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[t([c({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[t([u({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

EmailInput({

})`}),a({title:"URL Input",description:"This is a URL input field.",preview:[t([E({placeholder:"Enter a valid URL...",change:e=>console.log(e.target.value)})])],code:`import {  UrlInput  } from "@base-framework/ui/atoms";

UrlInput({
    placeholder: 'Enter a valid URL...',
    change: (e) => console.log(e.target.value),
});`}),a({title:"Color Input",description:"This is a color input field.",preview:[t([P({change:e=>console.log(e.target.value)})])],code:`import {  ColorInput  } from "@base-framework/ui/atoms";

ColorInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Date Input",description:"This is a date input field.",preview:[t([R({change:e=>console.log(e.target.value)})])],code:`import {  DateInput  } from "@base-framework/ui/atoms";

DateInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Time Input",description:"This is a time input field.",preview:[t([U({change:e=>console.log(e.target.value)})])],code:`import {  TimeInput  } from "@base-framework/ui/atoms";

TimeInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"DateTime Input",description:"This is a datetime input field.",preview:[t([N({change:e=>console.log(e.target.value)})])],code:`import {  DateTimeInput  } from "@base-framework/ui/atoms";

DateTimeInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Week Input",description:"This is a week input field.",preview:[t([X({change:e=>console.log(e.target.value)})])],code:`import {  WeekInput  } from "@base-framework/ui/atoms";

WeekInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Month Input",description:"This is a month input field.",preview:[t([j({change:e=>console.log(e.target.value)})])],code:`import {  MonthInput  } from "@base-framework/ui/atoms";

MonthInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Password Input",description:"This is a password input field.",preview:[t([L({class:"w-12 h-12"})])],code:`import {  PasswordInput  } from "@base-framework/ui/atoms";

PasswordInput({
    class: 'w-12 h-12'
});`}),a({title:"Number Input",description:"This is a number input field.",preview:[t([A({placeholder:"Enter a number...",change:e=>console.log(e.target.value)})])],code:`import {  NumberInput  } from "@base-framework/ui/atoms";

NumberInput({
    placeholder: 'Enter a number...',
    change: (e) => console.log(e.target.value),
});`}),a({title:"Hidden Input",description:"This is a hidden input field.",preview:[t([M({value:"hidden-value"})])],code:`import {  HiddenInput  } from "@base-framework/ui/atoms";

HiddenInput({
    value: 'hidden-value',
});`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new q({label:"Check me",onChange:e=>console.log(e)})],code:`
import {  Checkbox  } from "@base-framework/ui/atoms";

new Checkbox({
    label: 'Check me',
    onChange: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[t([W({options:$,change:e=>console.log(e.target.value)})])],code:`import {  Select  } from "@base-framework/ui/atoms";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[t([p({placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Time Picker",description:"This is a time picker input.",preview:[t([new G({selectedTime:"12:00 am",change:e=>console.log(e)})])],code:`
import TimePicker from "@base-framework/ui/molecules/date-time/time-picker.js";

new TimePicker({
    selectedTime: '12:00 am',
    change: (time) => console.log(time)
})`}),a({title:"Date Picker",description:"This is a date picker input.",preview:[t([new H({blockPriorDates:!1,selectedDate:"2022-01-01",onChange:e=>console.log(e)})])],code:`
import DatePicker from "@base-framework/ui/molecules/date-time/date-picker.js";

new DatePicker({
    blockPriorDates: false,
    selectedDate: '2022-01-01',
    onChange: (date) => console.log(date)
})`}),a({title:"Date Range Picker",description:"This is a date range picker input.",preview:[t([new B({blockPriorDates:!1,start:"2022-01-01",end:"2022-01-31",onChange:e=>console.log(e)})])],code:`
import DateRangePicker from "@base-framework/ui/molecules/date-time/date-picker.js";

new DateRangePicker({
    blockPriorDates: false,
    start: '2022-01-01',
    end: '2022-01-31',
    onChange: (range) => console.log(range)
})`}),a({title:"Range Slider",description:"This is a range slider input.",preview:[t([new K({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/atoms";

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),a({title:"Counter",description:"This is a counter input.",preview:[t([new _({class:"max-w-[300px]",initialCount:5,min:0,max:1e5,readonly:!1,bind:"count",change:e=>console.log(e)})])],code:`
import {  Counter  } from "@base-framework/ui/molecules";

new Counter({
    class: 'max-w-[300px]',
    initialCount: 5,
    min: 0,
    max: 100000,
    readonly: false,
    bind: 'count',
    change: (value) => console.log(value)
})`}),a({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[t([new d({active:!0,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/molecules";

new Toggle({
    active: true,
    change: (active) => console.log(active)
})`}),a({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[o({class:"p-4"},[l({class:"text-lg font-bold mb-4"},"Email Notifications"),m({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),m({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),J({text:"Submit",class:"mt-4"})])],code:`
import {  Toggle  } from "@base-framework/ui/atoms";

const NotificationToggle = ({ label, description, active, onChange }) => (
    Div({ class: 'flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4' }, [
        Div({ class: 'flex flex-col pr-8' }, [
            H4({ class: 'font-semibold' }, label),
            P({ class: 'text-sm text-muted-foreground' }, description)
        ]),
        new Toggle({
            active,
            change: onChange
        })
    ])
);

Div({ class: 'p-4' }, [
    H4({ class: 'text-lg font-bold mb-4' }, 'Email Notifications'),
    NotificationToggle({
        label: 'Marketing emails',
        description: 'Receive emails about new products, features, and more.',
        active: false,
        onChange: (active) => console.log('Marketing emails:', active)
    }),
    NotificationToggle({
        label: 'Security emails',
        description: 'Receive emails about your account security.',
        active: false,
        onChange: (active) => console.log('Security emails:', active)
    }),
    Button({
        text: 'Submit',
        class: 'mt-4'
    })
]);`}),a({title:"Logo Uploader",description:"This is a logo uploader.",preview:[t([new V({src:"",onChange:(e,n)=>console.log(e,n)})])],code:`
import {  LogoUploader  } from "@base-framework/ui/molecules";

new LogoUploader({
    src: '',
    onChange: (file, parent) => console.log(file, parent)
})`}),a({title:"Signature Pad",description:"This is a signature pad input.",preview:[t([new Y({lineWidth:1,lineColor:"#CCCCCC",baseLineWidth:1,baseStrokeColor:"#333333"})])],code:`
import {  SignaturePanel  } from "@base-framework/ui/organisms";

new SignaturePanel({
    lineWidth: 1,
    lineColor: '#CCCCCC',
    baseLineWidth: 1,
    baseStrokeColor: '#333333',
})`}),i({class:"text-muted-foreground"},"The data URL image can be retrieved by calling the `getImage` method on the signature pad instance. The pad can be checked if it's been signed by calling the `isSigned` method on the signature pad instance.")]);export{ne as InputPage,ne as default};
