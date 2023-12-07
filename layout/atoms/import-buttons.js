import { Atom, Import } from "@base-framework/base";
import { Div } from "../atoms/atoms.js";

export default Atom((props, children) =>
{
	return {
		text: 'label',
		children: [
			Div('test import'),
			Import({
				src: '/layout/organisms/button-group.js'
			})
		]
	};
});