import{ad as t,o as e,O as i,aA as s}from"./index-O4OK8HGf.js";import{e as a}from"./signature-panel-DEX9Sggs-DDqRLy3d.js";import{D as l}from"./doc-section-CHknmqrT.js";import{D as n}from"./doc-page-DB3W03no.js";import"./tooltip-DcnXGw52-BMfAt7Bc.js";import"./sidebar-menu-page-DyIwNFwe-BGqldwNh.js";import"./mobile-nav-wrapper-CuATTfqK-BCQZ0liV.js";const d=()=>n({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[l({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new t({icon:e.ellipsis.vertical,groups:[[{icon:e.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:e.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:e.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:e.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:e.user.multiple,label:"Team",value:"team"},{icon:e.user.plus,label:"Invite users",value:"invite"},{icon:e.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:e.github,label:"GitHub",value:"github"},{icon:e.helpCircle,label:"Support",value:"support"},{icon:e.api,label:"API",value:"api"}]],onSelect:o=>{console.log("Selected item:",o)}})],code:`import {  Icons  } from "@base-framework/ui/icons";
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
})`}),l({title:"Dropdown",description:'The Dropdown component is used to render a list of items within the dropdown menu. This uses the parent data "groups" to render the items.',preview:[new a({setData(){return new i({groups:[[{icon:e.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:e.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:e.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:e.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:e.user.multiple,label:"Team",value:"team"},{icon:e.user.plus,label:"Invite users",value:"invite"},{icon:e.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:e.github,label:"GitHub",value:"github"},{icon:e.helpCircle,label:"Support",value:"support"},{icon:e.api,label:"API",value:"api"}]]})}},[s({onSelect:o=>{console.log("Selected item:",o)}})])],code:`import {  Icons  } from "@base-framework/ui/icons";
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
])`})]);export{d as DropdownMenuPage,d as default};
