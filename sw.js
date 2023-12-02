importScripts('./scripts/worker/cache-controller.js', './scripts/worker/service.js');

const appName = 'app-name',
version = 1.0;

const files =
[
	'./',
	'./index.html',
	'./scripts/app.js',
	'./css/base.css'
];

const appNameId = appName + '-v' + version;
const service = new Service(appNameId, files);
