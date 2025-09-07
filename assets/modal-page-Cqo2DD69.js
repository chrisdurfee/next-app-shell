import{k as r,af as d,ag as h,o,n as s,z as a,e as g,ao as y,ah as M,ai as p,aj as i,aA as v}from"./index-DEq2sE2P.js";import{L as k,b,i as D,q as x}from"./tooltip-PupzYM1r-MguARzLq.js";import{D as e}from"./doc-section-BWNoBulz.js";import{D as S}from"./doc-page-DFKziMUa.js";import"./signature-panel-DVIv9LO1-AIWTbqIE.js";import"./sidebar-menu-page-UmKsAvjb-CqoCyVOE.js";import"./mobile-nav-wrapper-CWqhZ0qz-ADhUt0Ji.js";const n=[{label:"Large",buttonStyle:"primary",size:"lg"},{label:"Small",buttonStyle:"secondary",size:"sm"},{label:"Medium",buttonStyle:"destructive",size:"md"},{label:"XL",buttonStyle:"primary",size:"xl"},{label:"Right",buttonStyle:"ghost",type:"right"},{label:"Left",buttonStyle:"link",type:"left"}],m=({label:t,buttonStyle:l,size:u,type:c})=>r({text:t,class:`m-1 ${l}`,click:()=>new d({title:"Are you absolutely sure?",size:u,type:c},[s({class:"flex flex-col max-w-lg lg:p-4 gap-y-8"},[new a({name:"popover-test",label:"Popover Test"},[new g]),new a({name:"dialog-test",label:"Dialog Test"},[r({click:()=>{new y({title:"Are you absolutely sure?",description:"This action cannot be undone.",confirmTextLabel:"Save",confirmed:()=>{app.notify({icon:o.trash,title:"Action complete",description:"You confirmed your selection.",type:"destructive"})}}).open()}},"Confirm")])])]).open()}),B=({size:t="md",type:l="center"})=>new d({title:"Report an Issue",icon:o.warning,description:"What area are you having problems with?",size:t,type:l,onSubmit:()=>console.log("Form submitted")},[s({class:"flex flex-col lg:p-4 gap-y-8"},[k({legend:"Issue Details"},[s({class:"flex flex-auto w-full gap-4"},[new a({name:"area",label:"Area"},[b({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"billing",label:"Billing"},{value:"technical",label:"Technical"},{value:"account",label:"Account"},{value:"other",label:"Other"}],defaultValue:"billing"})]),new a({name:"security_level",label:"Security Level"},[b({required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground",options:[{value:"severity_1",label:"Severity 1"},{value:"severity_2",label:"Severity 2"},{value:"severity_3",label:"Severity 3"}],defaultValue:"severity_2"})])]),new a({name:"subject",label:"Subject"},[D({type:"text",placeholder:"I need help with...",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})]),new a({name:"description",label:"Description"},[x({placeholder:"Please include all information relevant to your issue.",required:!0,class:"border p-2 rounded-md w-full bg-background text-foreground placeholder-muted-foreground"})])])])]),f=({label:t,buttonStyle:l,size:u,type:c})=>r({text:t,class:`m-1 ${l}`,click:()=>B({size:u,type:c}).open()}),w=()=>[new h({icon:o.ellipsis.vertical,groups:[[{icon:o.mapPin,label:"Track Item",value:"track-item"},{icon:o.trash,label:"Delete Item",value:"delete-item"}]],onSelect:t=>{console.log("Selected item from header:",t)}})],z=()=>new d({title:"Detail Example",description:"This is a detailed view of an item.",icon:o.information,size:"md",headerOptions:w,hidePrimaryButton:!0},[M([p({title:"Overview"},[i("Label","Value"),i("Date","2024-11-02"),s({class:"my-2 border-t"}),i("Status","Pending")]),p({title:"Details"},[v("Label text","Value")]),p({title:"More Info"},[i("Description","This is a multi-line snippet."),i("Comments","No comments available.")])])]),I=()=>r({text:"Detail Modal",variant:"outline",click:()=>z().open()}),E=()=>S({title:"Modals",description:"Displays modals or modal-like components with various sizes, forms, and header options."},[e({title:"Detail Modal Atoms",description:"Demonstrates usage of DetailBody, DetailSection, and SplitRow within a modal.",preview:[I()],code:`
// detail-modal-example.js
import { DetailBody, DetailSection, SplitRow } from "@base-framework/ui/molecules";
import { Modal } from "@base-framework/ui/molecules";
import { Icons } from "@base-framework/ui/icons";

const DemoDetailModal = () =>
    new Modal({
        title: 'Detail Example',
        icon: Icons.information,
        size: 'md',
        hidePrimaryButton: true
    },
    [
        DetailBody([
            DetailSection({ title: 'Overview' }, [
                SplitRow('Label', 'Value'),
                SplitRow('Date', '2024-11-02'),
            ]),
            DetailSection({ title: 'More Info' }, [
                SplitRow('Description', 'This is a multi-line snippet.'),
            ])
        ])
    ]);
`}),e({title:"Header Options",description:"You can pass `headerOptions` as an array of atoms for the modal's top-right actions. Below is an example with a DropdownMenu in the modal header.",preview:[r({text:"Open Modal with Header Options",variant:"secondary",click:()=>new d({title:"Modal with Header Options",icon:o.settings,headerOptions:w,hidePrimaryButton:!0},[s({class:"p-4"},"This modal has an ellipsis menu in the header.")]).open()})],code:`
// header-options-example.js
import { Modal } from "@base-framework/ui/molecules";
import { DropdownMenu } from "@base-framework/ui/molecules";
import { Icons } from "@base-framework/ui/icons";

// Example header options
const DemoHeaderOptions = () => [
    new DropdownMenu({
        icon: Icons.ellipsis.vertical,
        groups: [
            [
                { icon: Icons.mapPin, label: 'Track Item', value: 'track-item' },
                { icon: Icons.trash,  label: 'Delete Item', value: 'delete-item' }
            ]
        ],
        onSelect: (selected) => {
            console.log("Selected item from header:", selected);
        }
    })
];

new Modal({
    title: 'Modal with Header Options',
    icon: Icons.settings,
    headerOptions: DemoHeaderOptions,  // pass the array here
    hidePrimaryButton: true
},
[
    // modal content...
]).open();
`}),e({title:"Extra Large Modal",description:"An extra large modal example.",preview:[m(n[3])],code:`
import { Modal } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";

/**
 * This creates a button that opens an XL modal.
 */
const ModalButton = ({ label, size }) => Button({
    text: label,
    click: () => new Modal({
        size: 'xl',
        title: 'Are you absolutely sure?'
    }).open()
});`}),e({title:"Large Modal",preview:[m(n[0])],code:`
import { Modal } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";

const ModalButton = ({ label, size }) => Button({
    text: label,
    click: () => new Modal({
        size: 'lg',
        title: 'Large Modal Example'
    }).open()
});`}),e({title:"Medium Modal",preview:[m(n[2])],code:`
import { Modal } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";

const ModalButton = ({ label, size }) => Button({
    text: label,
    click: () => new Modal({
        size: 'md',
        title: 'Medium Modal Example'
    }).open()
});`}),e({title:"Right Modal",preview:[m(n[4])],code:`
import { Modal } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";

const ModalButton = ({ label, type }) => Button({
    text: label,
    click: () => new Modal({
        type: 'right',
        title: 'Right Modal Example'
    }).open()
});`}),e({title:"Form Modal",preview:[f({label:"Form Modal",buttonStyle:"primary"})],code:`
import { Modal } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";
import { Fieldset } from "@base-framework/ui/atoms";
import { Div } from "@base-framework/atoms";
import { Input, Textarea } from "@base-framework/ui/atoms";
import { FormField } from "@base-framework/ui/molecules";

const ModalForm = ({ size = 'lg', type = 'center' }) => (
    new Modal({
        title: 'Report an Issue',
        size,
        type,
        onSubmit: () => console.log('Form submitted')
    }, [
        // ...
    ])
);
`}),e({title:"Right Form Modal",preview:[f({label:"Form Modal (Right)",buttonStyle:"primary",size:"md",type:"right"})],code:`
import { Modal } from "@base-framework/ui/molecules";
import { Button } from "@base-framework/ui/atoms";

const ModalForm = ({ type = 'right', size = 'md' }) => (
    new Modal({
        title: 'Report an Issue',
        type,
        size,
        onSubmit: () => console.log('Form submitted')
    }, [
        // ...
    ])
);
`})]);export{E as ModalPage,E as default};
