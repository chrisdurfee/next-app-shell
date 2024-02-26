import { Atom, Import } from "@base-framework/base";
import { Div, Span } from "../atoms/atoms.js";

export default Atom((props, children) =>
{
	return Div([
		Span('Label'),
		Div('test import'),
		Import({
			src: '/layout/organisms/button-group.js'
		})
	]);
});