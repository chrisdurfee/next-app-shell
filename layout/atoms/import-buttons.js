import { Div } from "../atoms/atoms.js";
import { Atom } from "../libs/base/base.js";
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