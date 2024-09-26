importScripts('./worker/cache-controller.js', './worker/service.js');

const appName = 'base-example',
version = '0.0.1';

const files =
[
	'./',
	'./index.html'
];

const appNameId = appName + '-v' + version;
const service = new Service(appNameId, files);
