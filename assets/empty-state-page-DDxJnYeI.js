import"./tooltip-Pwsjx1Gp-CXmwYdZ8.js";import{aH as e,o as t,b as a}from"./index-CHvgh5P2.js";import{D as o}from"./doc-section-LWmPjknO.js";import{D as i}from"./doc-page-IqlxMGGR.js";import"./signature-panel-BRxjdz83-BzyPUwxa.js";import"./sidebar-menu-page-BtUJdw-T-Bu1cTNly.js";import"./mobile-nav-wrapper-C7RyGC5a-Bs0M6yfq.js";const d=()=>i({title:"Empty State",description:"An empty state is a placeholder for when there is no content to display."},[o({title:"Empty State",description:"This is an empty state.",preview:[e({title:"No Data Available",description:"There is no data to display at the moment.",icon:t.photo})],code:`
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
]);`})]);export{d as EmptyStatePage,d as default};
