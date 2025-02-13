import{G as p,Y as i,c as r,b as n,aE as s,as as c,af as v,r as b,aF as f,aG as l,aH as w,aI as x,aJ as I,aK as T,aL as k,aM as y,aN as C,aO as S,aP as D,aQ as E,K as R,ao as P,aR as j,am as N,aS as F,D as L,ai as m,a7 as d,w as M,aT as U}from"./index-BKSt9Yra.js";import{D as t}from"./doc-section-gJSBYTCD.js";import{D as H}from"./doc-page-KyVKx_We.js";const W=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}],a=b((e,o)=>i({...e,class:"flex flex-auto items-center justify-center w-full max-w-[350px]"},o)),u=({label:e,description:o,active:g,onChange:h})=>i({class:"flex items-center justify-between p-4 border rounded-md bg-muted/10 border-muted-foreground/20 mb-4"},[i({class:"flex flex-col pr-8"},[d({class:"font-semibold"},e),p({class:"text-sm text-muted-foreground"},o)]),new m({active:g,change:h})]),A=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"},{label:"Date",value:"date"},{label:"Elderberry",value:"elderberry"},{label:"Fig",value:"fig"},{label:"Grape",value:"grape"},{label:"Honeydew",value:"honeydew"}],$=()=>H({title:"Inputs",description:"Inputs are essential for gathering user data in forms."},[t({title:"Usage",description:"Import the input atom and use it in your components. The input can be of various types: text, password, email, etc.",preview:[i({class:"grid gap-2 w-full max-w-[350px]"},[r({type:"text",placeholder:"Enter your text here...",change:e=>console.log(e.target.value)}),n({}),s({}),c({placeholder:"Enter your text here..."})])],code:`import {  Input, EmailInput, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...',
    change: (e) => console.log(e.target.value)
}),
EmailInput({}),
TelInput({}),
Textarea({
    placeholder: 'Enter your text here...'
})`}),t({title:"Search Dropdown",description:"This is a search dropdown.",preview:[i({class:"relative w-full max-w-md"},[new v({options:A,onSelect:e=>console.log(e)})])],code:`import {  SearchDropdown  } from "@base-framework/ui/organisms";

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
`}),t({title:"File Input",description:"This is a file input.",preview:[a([f({multiple:!0,change:e=>console.log(e.target.files)})])],code:`import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

FileInput({
    multiple: true,
    change: (e) => console.log(e.target.files)
})`}),t({title:"Radio Input",description:"This is a radio input.",preview:[i({class:"grid gap-2"},[l({name:"theme",label:"System",value:"system"}),l({name:"theme",label:"Light",value:"light"}),l({name:"theme",label:"Dark",value:"dark"})])],code:`import {  Radio  } from "@base-framework/ui/atoms";
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
])`}),t({title:"Text Input",description:"This is a text input.",preview:[a([r({type:"text",placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Input({
    type: 'text',
    placeholder: 'Enter your text here...'
})`}),t({title:"Tel Input",description:"This is a phone input.",preview:[a([s({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

TelInput({
})`}),t({title:"Email Input",description:"This is a email input.",preview:[a([n({})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

EmailInput({

})`}),t({title:"URL Input",description:"This is a URL input field.",preview:[a([w({placeholder:"Enter a valid URL...",change:e=>console.log(e.target.value)})])],code:`import {  UrlInput  } from "@base-framework/ui/atoms";

UrlInput({
    placeholder: 'Enter a valid URL...',
    change: (e) => console.log(e.target.value),
});`}),t({title:"Color Input",description:"This is a color input field.",preview:[a([x({change:e=>console.log(e.target.value)})])],code:`import {  ColorInput  } from "@base-framework/ui/atoms";

ColorInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Date Input",description:"This is a date input field.",preview:[a([I({change:e=>console.log(e.target.value)})])],code:`import {  DateInput  } from "@base-framework/ui/atoms";

DateInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Time Input",description:"This is a time input field.",preview:[a([T({change:e=>console.log(e.target.value)})])],code:`import {  TimeInput  } from "@base-framework/ui/atoms";

TimeInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"DateTime Input",description:"This is a datetime input field.",preview:[a([k({change:e=>console.log(e.target.value)})])],code:`import {  DateTimeInput  } from "@base-framework/ui/atoms";

DateTimeInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Week Input",description:"This is a week input field.",preview:[a([y({change:e=>console.log(e.target.value)})])],code:`import {  WeekInput  } from "@base-framework/ui/atoms";

WeekInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Month Input",description:"This is a month input field.",preview:[a([C({change:e=>console.log(e.target.value)})])],code:`import {  MonthInput  } from "@base-framework/ui/atoms";

MonthInput({
    change: (e) => console.log(e.target.value),
});`}),t({title:"Password Input",description:"This is a password input field.",preview:[a([S({class:"w-12 h-12"})])],code:`import {  PasswordInput  } from "@base-framework/ui/atoms";

PasswordInput({
    class: 'w-12 h-12'
});`}),t({title:"Number Input",description:"This is a number input field.",preview:[a([D({placeholder:"Enter a number...",change:e=>console.log(e.target.value)})])],code:`import {  NumberInput  } from "@base-framework/ui/atoms";

NumberInput({
    placeholder: 'Enter a number...',
    change: (e) => console.log(e.target.value),
});`}),t({title:"Hidden Input",description:"This is a hidden input field.",preview:[a([E({value:"hidden-value"})])],code:`import {  HiddenInput  } from "@base-framework/ui/atoms";

HiddenInput({
    value: 'hidden-value',
});`}),t({title:"Checkbox",description:"This is a checkbox input.",preview:[new R({label:"Check me",onChange:e=>console.log(e)})],code:`
import {  Checkbox  } from "@base-framework/ui/atoms";

new Checkbox({
    label: 'Check me',
    onChange: (checked) => console.log(checked)
})`}),t({title:"Select",description:"This is a select input.",preview:[a([P({options:W,change:e=>console.log(e.target.value)})])],code:`import {  Select  } from "@base-framework/ui/atoms";

Select({
    options: [
        { value: 'next.js', label: 'Next.js' },
        { value: 'sveltekit', label: 'SvelteKit' },
        { value: 'nuxt.js', label: 'Nuxt.js' },
        { value: 'remix', label: 'Remix' },
        { value: 'astro', label: 'Astro' },
    ],
    change: (e) => console.log(e.target.value)
})`}),t({title:"Textarea",description:"This is a textarea input.",preview:[a([c({placeholder:"Enter your text here..."})])],code:`
import {  EmailInput, FileInput, Input, TelInput, Textarea  } from "@base-framework/ui/atoms";

Textarea({
    placeholder: 'Enter your text here...'
})`}),t({title:"Time Picker",description:"This is a time picker input.",preview:[a([new j({selectedTime:"12:00 am",change:e=>console.log(e)})])],code:`
import TimePicker from "@base-framework/ui/molecules/date-time/time-picker.js";

new TimePicker({
    selectedTime: '12:00 am',
    change: (time) => console.log(time)
})`}),t({title:"Date Picker",description:"This is a date picker input.",preview:[a([new N({blockPriorDates:!1,selectedDate:"2022-01-01"})])],code:`
import DatePicker from "@base-framework/ui/molecules/date-time/date-picker.js";

new DatePicker({
    blockPriorDates: false,
    selectedDate: '2022-01-01',
})`}),t({title:"Range Slider",description:"This is a range slider input.",preview:[a([new F({min:0,max:100,value:50,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/atoms";

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),t({title:"Counter",description:"This is a counter input.",preview:[a([new L({class:"max-w-[300px]",initialCount:5,min:0,max:1e5,readonly:!1,bind:"count",change:e=>console.log(e)})])],code:`
import {  Counter  } from "@base-framework/ui/molecules";

new Counter({
    class: 'max-w-[300px]',
    initialCount: 5,
    min: 0,
    max: 100000,
    readonly: false,
    bind: 'count',
    change: (value) => console.log(value)
})`}),t({title:"Toggle Switch",description:"This is a toggle switch input.",preview:[a([new m({active:!0,change:e=>console.log(e)})])],code:`
import {  RangeSlider  } from "@base-framework/ui/atoms";

new RangeSlider({
    min: 0,
    max: 100,
    value: 50,
    change: (value) => console.log(value)
})`}),t({title:"Toggle Switch",description:"Toggle switches to control various settings.",preview:[i({class:"p-4"},[d({class:"text-lg font-bold mb-4"},"Email Notifications"),u({label:"Marketing emails",description:"Receive emails about new products, features, and more.",active:!1,onChange:e=>console.log("Marketing emails:",e)}),u({label:"Security emails",description:"Receive emails about your account security.",active:!1,onChange:e=>console.log("Security emails:",e)}),M({text:"Submit",class:"mt-4"})])],code:`
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
]);`}),t({title:"Signature Pad",description:"This is a signature pad input.",preview:[a([new U({lineWidth:1,lineColor:"#CCCCCC",baseLineWidth:1,baseStrokeColor:"#333333"})])],code:`
import {  SignaturePanel  } from "@base-framework/ui/organisms";

new SignaturePanel({
    lineWidth: 1,
    lineColor: '#CCCCCC',
    baseLineWidth: 1,
    baseStrokeColor: '#333333',
})`}),p({class:"text-muted-foreground"},"The data URL image can be retrieved by calling the `getImage` method on the signature pad instance. The pad can be checked if it's been signed by calling the `isSigned` method on the signature pad instance.")]);export{$ as InputPage,$ as default};
