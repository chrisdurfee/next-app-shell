import{z as o,i as r,f as n,aW as s,aA as c,al as f,aX as b,s as v,aY as w,aZ as k,a_ as l,a$ as I,b0 as x,b1 as T,b2 as y,b3 as C,b4 as S,b5 as D,b6 as E,aC as R,ar as P,a7 as j,aB as N,b7 as U,l as L,ao as F,b8 as H,a4 as W,am as u,w as m,U as A,az as M,H as d,v as G}from"./index-CAtlfimY.js";import{F as B}from"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import{D as a}from"./doc-section-BmwD-w3i.js";import{D as z}from"./doc-page-Cs2adT5a.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";const K=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],t=G((e,i)=>o({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},i)),p=({label:e,description:i,active:g,onChange:h})=>o({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[o({class:"flex flex-col pr-8"},[m({class:"font-semibold"},e),d({class:"text-sm text-muted-foreground"},i)]),new u({active:g,change:h})]),X=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],_=()=>z({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[a({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[o({class:"grid gap-2 w-full max-w-[350px]"},[r({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),n({}),s({}),c({placeholder:"Enter your text here..."})])],code:`import {  Input, EmailInput, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Search Dropdown",description:"This is a search dropdown.",preview:[o({class:"relative w-full max-w-md"},[new f({options:X,onSelect:e=>console.log(e)})])],code:`import {  SearchDropdown  } from "@base-framework/ui/organisms";

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
`}),a({title:"Search Input",description:"This is a search input.",preview:[o({class:"relative w-full max-w-md"},[b({placeholder:"Search...",bind:"",keyup:(e,i)=>{},icon:v.magnifyingGlass.default})])],code:`import {  SearchInput  } from "@base-framework/ui/organisms";

SearchInput({
    placeholder: 'Search...',
    bind: '',
    keyup: (e, parent) => {},
    icon: Icons.magnifyingGlass.default,
})
`}),a({title:"Simple Search Input",description:"A simple search input with an icon on the left and a pill shape. Supports custom icons, placeholder text, and various input events.",preview:[o({class:"relative w-full max-w-md"},[w({placeholder:"Search...",keyup:e=>console.log(e.target.value)})])],code:`import { SimpleSearchInput } from "@base-framework/ui/organisms";

SimpleSearchInput({
    placeholder: 'Search...',
    icon: Icons.magnifyingGlass.default, // optional, defaults to magnifying glass
    containerClass: '', // optional class for the container
    bind: 'searchValue', // optional data binding
    keyup: (e) => console.log(e.target.value),
    change: (e) => console.log(e.target.value)
})
`}),a({title:"File Input",description:"This is a file input.",preview:[t([k({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),a({title:"Radio Input",description:"This is a radio input.",preview:[o({class:"grid gap-2"},[l({name:"theme",label:"System",value:"system"}),l({name:"theme",label:"Light",value:"light"}),l({name:"theme",label:"Dark",value:"dark"})])],code:`import {  Radio  } from "@base-framework/ui/atoms";
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
])`}),a({title:"Text Input",description:"This is a text input.",preview:[t([r({type:"text",placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),a({title:"Tel Input",description:"This is a phone input.",preview:[t([s({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

TelInput({
})`}),a({title:"Email Input",description:"This is a email input.",preview:[t([n({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

EmailInput({

})`}),a({title:"URL Input",description:"This is a URL input field.",preview:[t([I({placeholder:"Enter a valid URL...",change:e=>console.log(e.target.value)})])],code:`import {  UrlInput  } from "@base-framework/ui/atoms";

UrlInput({
    placeholder: 'Enter a valid URL...',
    change: (e) => console.log(e.target.value),
});`}),a({title:"Color Input",description:"This is a color input field.",preview:[t([x({change:e=>console.log(e.target.value)})])],code:`import {  ColorInput  } from "@base-framework/ui/atoms";

ColorInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Date Input",description:"This is a date input field.",preview:[t([T({change:e=>console.log(e.target.value)})])],code:`import {  DateInput  } from "@base-framework/ui/atoms";

DateInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Time Input",description:"This is a time input field.",preview:[t([y({change:e=>console.log(e.target.value)})])],code:`import {  TimeInput  } from "@base-framework/ui/atoms";

TimeInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"DateTime Input",description:"This is a datetime input field.",preview:[t([C({change:e=>console.log(e.target.value)})])],code:`import {  DateTimeInput  } from "@base-framework/ui/atoms";

DateTimeInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Week Input",description:"This is a week input field.",preview:[t([S({change:e=>console.log(e.target.value)})])],code:`import {  WeekInput  } from "@base-framework/ui/atoms";

WeekInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Month Input",description:"This is a month input field.",preview:[t([D({change:e=>console.log(e.target.value)})])],code:`import {  MonthInput  } from "@base-framework/ui/atoms";

MonthInput({
    change: (e) => console.log(e.target.value),
});`}),a({title:"Password Input",description:"This is a password input field.",preview:[t([E({class:"w-12 h-12"})])],code:`import {  PasswordInput  } from "@base-framework/ui/atoms";

PasswordInput({
    class: 'w-12 h-12'
});`}),a({title:"Number Input",description:"This is a number input field.",preview:[t([R({placeholder:"Enter a number...",change:e=>console.log(e.target.value)})])],code:`import {  NumberInput  } from "@base-framework/ui/atoms";

NumberInput({
    placeholder: 'Enter a number...',
    change: (e) => console.log(e.target.value),
});`}),a({title:"Hidden Input",description:"This is a hidden input field.",preview:[t([P({value:"hidden-value"})])],code:`import {  HiddenInput  } from "@base-framework/ui/atoms";

HiddenInput({
    value: 'hidden-value',
});`}),a({title:"Checkbox",description:"This is a checkbox input.",preview:[new j({label:"Check me",onChange:e=>console.log(e)})],code:`
import {  Checkbox  } from "@base-framework/ui/atoms";

new Checkbox({
    label: 'Check me',
    onChange: (checked) => console.log(checked)
})`}),a({title:"Select",description:"This is a select input.",preview:[t([N({options:K,change:e=>console.log(e.target.value)})])],code:`import {  Select  } from "@base-framework/ui/atoms";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),a({title:"Textarea",description:"This is a textarea input.",preview:[t([c({placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Textarea({
    placeholder: 'Enter your text here...'
})`}),a({title:"Time Picker",description:"This is a time picker input.",preview:[t([new U({selectedTime:"12:00 am",change:e=>console.log(e)})])],code:`
import TimePicker from "@base-framework/ui/molecules/date-time/time-picker.js";

new TimePicker({
    selectedTime: '12:00 am',
    change: (time) => console.log(time)
})`}),a({title:"Date Picker",description:"This is a date picker input.",preview:[t([new L({blockPriorDates:!1,selectedDate:"2022-01-01",onChange:e=>console.log(e)})])],code:`
import DatePicker from "@base-framework/ui/molecules/date-time/date-picker.js";

new DatePicker({
    blockPriorDates: false,
    selectedDate: '2022-01-01',
    onChange: (date) => console.log(date)
})`}),a({title:"Date Range Picker",description:"This is a date range picker input.",preview:[t([new F({blockPriorDates:!1,start:"2022-01-01",end:"2022-01-31",onChange:e=>console.log(e)})])],code:`
import DateRangePicker from "@base-framework/ui/molecules/date-time/date-picker.js";

new DateRangePicker({
    blockPriorDates: false,
    start: '2022-01-01',
    end: '2022-01-31',
    onChange: (range) => console.log(range)
})`}),a({title:"Range Slider",description:"This is a range slider input.",preview:[t([new H({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/atoms";

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),a({title:"Counter",description:"This is a counter input.",preview:[t([new W({class:"max-w-[300px]",initialCount:5,min:0,max:1e5,readonly:!1,bind:"count",change:e=>console.log(e)})])],code:`
import {  Counter  } from "@base-framework/ui/molecules";

new Counter({
    class: 'max-w-[300px]',
    initialCount: 5,
    min: 0,
    max: 100000,
    readonly: false,
    bind: 'count',
    change: (value) => console.log(value)
})`}),a({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[t([new u({active:!0,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/molecules";

new Toggle({
    active: true,
    change: (active) => console.log(active)
})`}),a({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[o({class:"p-4"},[m({class:"text-lg font-bold mb-4"},"Email Notifications"),p({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),p({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),A({text:"Submit",class:"mt-4"})])],code:`
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
]);`}),a({title:"Logo Uploader",description:"This is a logo uploader.",preview:[t([new M({src:"",onChange:(e,i)=>console.log(e,i)})])],code:`
import {  LogoUploader  } from "@base-framework/ui/molecules";

new LogoUploader({
    src: '',
    onChange: (file, parent) => console.log(file, parent)
})`}),a({title:"Signature Pad",description:"This is a signature pad input.",preview:[t([new B({lineWidth:1,lineColor:"#CCCCCC",baseLineWidth:1,baseStrokeColor:"#333333"})])],code:`
import {  SignaturePanel  } from "@base-framework/ui/organisms";

new SignaturePanel({
    lineWidth: 1,
    lineColor: '#CCCCCC',
    baseLineWidth: 1,
    baseStrokeColor: '#333333',
})`}),d({class:"text-muted-foreground"},"The data URL image can be retrieved by calling the `getImage` method on the signature pad instance. The pad can be checked if it's been signed by calling the `isSigned` method on the signature pad instance.")]);export{_ as InputPage,_ as default};
