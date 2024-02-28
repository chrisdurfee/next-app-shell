import "./main/module.js";
import { AppModules } from "./module.js";

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

export const modules = AddModules(AppModules);
