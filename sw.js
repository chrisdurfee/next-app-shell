importScripts('./layout/worker/cache-controller.js', './layout/worker/service.js');

const appName = 'app-name',
version = 1.0;

const files =
[
	'./index.html'
];

const appNameId = appName + '-v' + version;
const service = new Service(appNameId, files);
