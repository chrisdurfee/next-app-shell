"use strict";

var add = function(src, defer)
{
	scriptLoader.add({src: src, defer: defer});
};

/* this will load in the framework and modules */
add('layout/base/base.js', false);
add('layout/base/animation.js');

/* atoms */
add('layout/atoms/atoms.js');

add('layout/loader.js');

/* molecules */
add('layout/molecules/molecules.js');

/* organisms */
add('layout/organisms/navigation.js');
add('layout/organisms/tab.js');
add('layout/organisms/panel.js');
add('layout/organisms/button-group.js');

add('layout/templates/template.js');
add('layout/templates/full-template.js');
add('layout/templates/aside-template.js');
add('layout/templates/bside-template.js');
add('layout/templates/aside-bside-template.js');

/* modules */
add('layout/modules/basic-module.js');
add('layout/modules/example-module.js');
//add('layout/modules/aside-module.js');
add('layout/modules/bside-module.js');
add('layout/modules/aside-bside-module.js');
add('layout/modules/full-module.js');
add('layout/modules/full-contain-module.js');

/* app components */
add('layout/main/app-shell.js');
add('layout/main/app-control.js');
add('layout/main/main-navigation.js');

/* this is sthemain script used to start the
app */
add('layout/main-controller.js');
add('layout/app-controller.js');