import"./tooltip-PupzYM1r-DMPpQzFy.js";import{aI as e,o as t,k as a}from"./index-BwXNM6li.js";import{D as o}from"./doc-section-NdtcPbzH.js";import{D as i}from"./doc-page-BMahOWGc.js";import"./signature-panel-CcRmukPe-DZMJ_1rR.js";import"./sidebar-menu-page-D4WMgz5U-BBoy52Cv.js";import"./mobile-nav-wrapper-Dm9DinRD-Dv4FsuWj.js";const d=()=>i({title:"Empty State",description:"An empty state is a placeholder for when there is no content to display."},[o({title:"Empty State",description:"This is an empty state.",preview:[e({title:"No Data Available",description:"There is no data to display at the moment.",icon:t.photo})],code:`
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
