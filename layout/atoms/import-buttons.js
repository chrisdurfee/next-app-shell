import { Atom } from "@base-framework/base";
import { Div } from "../atoms/atoms.js";
import { Import } from "../libs/base/modules/import/import.js";

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