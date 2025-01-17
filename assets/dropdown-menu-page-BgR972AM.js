import{m as t,o as e,a0 as i,P as s,a_ as a}from"./index-DMKjnrmu.js";import{D as l}from"./doc-section-LsOYZFMx.js";import{D as n}from"./doc-page-DTlqwyNg.js";const p=()=>n({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[l({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new t({icon:e.ellipsis.vertical,groups:[[{icon:e.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:e.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:e.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:e.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:e.user.multiple,label:"Team",value:"team"},{icon:e.user.plus,label:"Invite users",value:"invite"},{icon:e.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:e.github,label:"GitHub",value:"github"},{icon:e.helpCircle,label:"Support",value:"support"},{icon:e.api,label:"API",value:"api"}]],onSelect:o=>{console.log("Selected item:",o)}})],code:`import {  Icons  } from "@base-framework/ui/icons";
import {  DropdownMenu  } from "@base-framework/ui/molecules";

new DropdownMenu({
    icon: Icons.ellipsis.vertical,
    groups: [
        [
            { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
            { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
            { icon: Icons.cog.six, label: 'Settings', shortcut: '⌘S', value: 'settings' },
            { icon: Icons.computerDesktop, label: 'Keyboard shortcuts', shortcut: '⌘K', value: 'shortcuts' },
        ],
        [
            { icon: Icons.user.multiple, label: 'Team', value: 'team' },
            { icon: Icons.user.plus, label: 'Invite users', value: 'invite' },
            { icon: Icons.plus, label: 'New Team', shortcut: '⌘T', value: 'new_team' },
        ],
        [
            { icon: Icons.github, label: 'GitHub', value: 'github' },
            { icon: Icons.helpCircle, label: 'Support', value: 'support' },
            { icon: Icons.api, label: 'API', value: 'api' },
        ]
    ],
    onSelect: (item) =>
    {
        console.log("Selected item:", item);
        // Handle selected item
    },
})`}),l({title:"Dropdown",description:'The Dropdown component is used to render a list of items within the dropdown menu. This uses the parent data "groups" to render the items.',preview:[new i({setData(){return new s({groups:[[{icon:e.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:e.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:e.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:e.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:e.user.multiple,label:"Team",value:"team"},{icon:e.user.plus,label:"Invite users",value:"invite"},{icon:e.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:e.github,label:"GitHub",value:"github"},{icon:e.helpCircle,label:"Support",value:"support"},{icon:e.api,label:"API",value:"api"}]]})}},[a({onSelect:o=>{console.log("Selected item:",o)}})])],code:`import {  Icons  } from "@base-framework/ui/icons";
import {  Dropdown  } from "@base-framework/ui/molecules";
import { Data } from "@base-framework/base";
import {  Panel  } from "@base-framework/ui/organisms";

new Panel({
    setData()
    {
        return new Data({
            groups: [
                [
                    { icon: Icons.user.default, label: 'Profile', shortcut: '⌘P', value: 'profile' },
                    { icon: Icons.creditCard, label: 'Billing', shortcut: '⌘B', value: 'billing' },
                    { icon: Icons.cog.six, label: 'Settings', shortcut: '⌘S', value: 'settings' },
                    { icon: Icons.computerDesktop, label: 'Keyboard shortcuts', shortcut: '⌘K', value: 'shortcuts' },
                ],
                [
                    { icon: Icons.user.multiple, label: 'Team', value: 'team' },
                    { icon: Icons.user.plus, label: 'Invite users', value: 'invite' },
                    { icon: Icons.plus, label: 'New Team', shortcut: '⌘T', value: 'new_team' },
                ],
                [
                    { icon: Icons.github, label: 'GitHub', value: 'github' },
                    { icon: Icons.helpCircle, label: 'Support', value: 'support' },
                    { icon: Icons.api, label: 'API', value: 'api' },
                ]
            ]
        });
    }
}, [
    Dropdown({
        onSelect: (item) =>
        {
            console.log("Selected item:", item);
            // Handle selected item
        }
    })
])`})]);export{p as DropdownMenuPage,p as default};
