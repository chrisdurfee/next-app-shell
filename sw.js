importScripts('./worker/cache-controller.js', './worker/service.js', '.worker/push-controller.js');

const appName = 'base-example',
version = '0.0.107';

const files =
[
	'./',
	'./index.html'
];

const appNameId = appName + '-v' + version;
const service = new Service(appNameId, files);
const push = new PushController(appName);
