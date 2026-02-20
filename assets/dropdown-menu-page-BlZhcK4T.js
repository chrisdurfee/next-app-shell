import{X as t,s as e,B as i,bj as s}from"./index-CAtlfimY.js";import{P as a}from"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import{D as o}from"./doc-section-BmwD-w3i.js";import{D as r}from"./doc-page-Cs2adT5a.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";const h=()=>r({title:"Dropdown Menus",description:"Dropdown menus are used to display a list of options when a user clicks on a button or input field."},[o({title:"Usage",description:"To use the DropdownMenu component, import it from the components library and use it in your application.",preview:[new t({icon:e.ellipsis.vertical,groups:[[{icon:e.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:e.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:e.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:e.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:e.user.multiple,label:"Team",value:"team"},{icon:e.user.plus,label:"Invite users",value:"invite"},{icon:e.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:e.github,label:"GitHub",value:"github"},{icon:e.helpCircle,label:"Support",value:"support"},{icon:e.api,label:"API",value:"api"}]],onSelect:l=>{console.log("Selected item:",l)}})],code:`import {  Icons  } from "@base-framework/ui/icons";
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
})`}),o({title:"Dropdown",description:'The Dropdown component is used to render a list of items within the dropdown menu. This uses the parent data "groups" to render the items.',preview:[new a({setData(){return new i({groups:[[{icon:e.user.default,label:"Profile",shortcut:"⌘P",value:"profile"},{icon:e.creditCard,label:"Billing",shortcut:"⌘B",value:"billing"},{icon:e.cog.six,label:"Settings",shortcut:"⌘S",value:"settings"},{icon:e.computerDesktop,label:"Keyboard shortcuts",shortcut:"⌘K",value:"shortcuts"}],[{icon:e.user.multiple,label:"Team",value:"team"},{icon:e.user.plus,label:"Invite users",value:"invite"},{icon:e.plus,label:"New Team",shortcut:"⌘T",value:"new_team"}],[{icon:e.github,label:"GitHub",value:"github"},{icon:e.helpCircle,label:"Support",value:"support"},{icon:e.api,label:"API",value:"api"}]]})}},[s({})])],code:`import {  Icons  } from "@base-framework/ui/icons";
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
])`})]);export{h as DropdownMenuPage,h as default};
