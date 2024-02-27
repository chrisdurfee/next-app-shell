importScripts('./layout/shell/worker/cache-controller.js', './layout/shell/worker/service.js');

const appName = 'app-name',
version = 1.0;

const files =
[
	'./index.html'
];

const appNameId = appName + '-v' + version;
const service = new Service(appNameId, files);
