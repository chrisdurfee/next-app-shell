"use strict";

const add = (src, defer) =>
{
	scriptLoader.add({src: src, defer: defer});
};

/* this will load in the framework and modules */
add('layout/libs/base/base.js', false);
add('layout/libs/base/loader.js');
add('layout/libs/base/animation.js');
add('layout/configs.js');

/* atoms */
add('layout/atoms/atoms.js');

/* molecules */
add('layout/molecules/molecules.js');

/* organisms */
add('layout/organisms/navigation.js');
add('layout/organisms/tab.js');
add('layout/organisms/panel.js');
add('layout/organisms/overlay.js');
add('layout/organisms/inline-overlay.js');

add('layout/templates/template.js');
add('layout/templates/full-template.js');
add('layout/templates/aside-template.js');
add('layout/templates/bside-template.js');
add('layout/templates/aside-bside-template.js');

/* pages */
add('layout/pages/basic-page.js');
add('layout/pages/aside-page.js');
add('layout/pages/bside-page.js');
add('layout/pages/aside-bside-page.js');
add('layout/pages/full-page.js');
add('layout/pages/full-contain-page.js');

/* modules */
add('layout/modules/module.js');
add('layout/modules/main/module.js');
add('layout/modules/example-module/module.js');

/* shell */
add('layout/shell/app-shell.js');
add('layout/shell/app-control.js');
add('layout/shell/main-navigation.js');

/* this is sthemain script used to start the
app */
add('layout/main-controller.js');
add('layout/app-controller.js');