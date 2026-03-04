import{bp as e,s as t,b as a}from"./index-B0D4AD-V.js";import{D as o}from"./doc-section-cHBzosZX.js";import{D as i}from"./doc-page-DLSmyI_M.js";import"./signature-panel-BOh8VNYa-B-4as7Ja.js";import"./sidebar-menu-page-C6gtJ-5U-CBkJEhyp.js";import"./sidebar-menu-D5VxMCLC-D1hY0PWw.js";const l=()=>i({title:"Empty State",description:"An empty state is a placeholder for when there is no content to display."},[o({title:"Empty State",description:"This is an empty state.",preview:[e({title:"No Data Available",description:"There is no data to display at the moment.",icon:t.photo})],code:`
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
]);`})]);export{l as EmptyStatePage,l as default};
