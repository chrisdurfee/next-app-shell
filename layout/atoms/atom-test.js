import { Atom } from "../libs/base/base.js";

export const LabelText = Atom((props, children) =>
{
	return {
        text: 'label',
        buttons: new Loader({
            src: 'layout/organisms/button-group.js',
            callBack()
            {
                return new ButtonGroup();
            }
        })
	};
});