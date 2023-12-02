"use strict";

var LabelText = Atom.extend(function(props)
{
	return {
        text: 'label',
        buttons: new Loader({
            src: 'layout/organisms/button-group.js',
            callBack: function()
            {
                return new ButtonGroup();
            }
        })
	};
});