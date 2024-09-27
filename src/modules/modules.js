import "./main/module.js";
import { AppModules } from "./module.js";

/**
 * This will get the module settings.
 *
 * @param {object} module
 * @return {object}
 */
const getModuleSettings = (modules) =>
{
	let appRoutes = [];
	let appLinks = [];

	modules.forEach((module) =>
	{
		if (!module)
		{
			return;
		}

		const routes = module.getRoutes() || [];
        appRoutes.push(...routes);

        const links = module.getLinks() || [];
        appLinks.push(...links);
	});

	return {
		routes: appRoutes,
		links: appLinks
	};
};

/**
 * This will add the modules to the app.
 *
 * @param {array} modules
 * @return {object}
 */
export const AddModules = (modules) =>
{
	if (!modules || modules.length < 1)
	{
		return {};
	}

	return getModuleSettings(modules);
};

export const modules = AddModules(AppModules);
