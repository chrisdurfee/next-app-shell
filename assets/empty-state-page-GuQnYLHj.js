import{bc as e,s as t,U as a}from"./index-CAtlfimY.js";import{D as o}from"./doc-section-BmwD-w3i.js";import{D as i}from"./doc-page-Cs2adT5a.js";import"./signature-panel-Dwnm79Sg-BWEGvBjL.js";import"./sidebar-menu-page-DFRJL944-BtEPb0m7.js";import"./full-page-CgVI1G7F-DJ0Pcr5g.js";import"./mobile-nav-wrapper-9VRCW4oA-DNLUn6P_.js";import"./sidebar-menu-DLGBb0-I-Bf4tpJkn.js";const h=()=>i({title:"Empty State",description:"An empty state is a placeholder for when there is no content to display."},[o({title:"Empty State",description:"This is an empty state.",preview:[e({title:"No Data Available",description:"There is no data to display at the moment.",icon:t.photo})],code:`
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { EmptyState } from "@base-framework/ui/molecules";

EmptyState({
    title: 'No Data Available',
    description: 'There is no data to display at the moment.',
    icon: Icons.photo
});`}),o({title:"Empty State With Action",description:"This is an empty state with an action.",preview:[e({title:"No Data Available",description:"There is no data to display at the moment.",icon:t.circleX},[a({variant:"withIcon",icon:t.plus},"Create New")])],code:`
import { Button } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { EmptyState } from "@base-framework/ui/molecules";

EmptyState({
    title: 'No Data Available',
    description: 'There is no data to display at the moment.',
    icon: Icons.circleX
}, [
    Button({ type: 'primary' }, 'Create New')
]);`}),o({title:"Empty State Without Icon",description:"This is an empty state without an icon.",preview:[e({title:"No Data Available",description:"There is no data to display at the moment."},[a({variant:"withIcon",icon:t.plus},"Create New")])],code:`
import { Button } from "@base-framework/ui/atoms";
import { EmptyState } from "@base-framework/ui/molecules";

EmptyState({
    title: 'No Data Available',
    description: 'There is no data to display at the moment.',
}, [
    Button({ type: 'primary' }, 'Create New')
]);`})]);export{h as EmptyStatePage,h as default};
