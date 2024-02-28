import { Atom, Import } from "@base-framework/base";
import { Div, Span } from "./atoms.js";

export default Atom((props, children) =>
{
	return Div([
		Span('Label'),
		Div('test import'),
		Import({
			src: '/layout/components/organisms/button-group.js'
		})
	]);
});