import { H2, P } from "@base-framework/atoms";
import { Atom, Import } from "@base-framework/base";
import { Div } from "./atoms.js";

export default Atom((props, children) =>
{
	return Div([
		H2({ class: 'scroll-m-20 text-lg font-bold tracking-tight' }, 'Label'),
		P({ class: 'text-muted-foreground' }, 'This section will test the import system.'),
		Import({
			src: import('../organisms/button-group.js')
		})
	]);
});