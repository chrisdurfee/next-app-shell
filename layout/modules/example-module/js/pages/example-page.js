import { Div, MainSection } from "../../../../atoms/atoms.js";
import { BasicPage } from "../../../../pages/basic-page.js";

/**
 * ExamplePage
 *
 * This will create a example page.
 * @class
 */
export class ExamplePage extends BasicPage
{
	/**
	 * This will render the page.
	 *
	 * @return {object}
	 */
	render()
	{
		return MainSection([
			AsideTemplate({
				right: this.addBody()
			})
		]);
	}

	/**
	 * This will add the body of the page.
	 *
	 * @returns {object}
	 */
	addBody()
	{
		return [
			Div({ class: 'contained' }, [GridContainer()])
		];
	}
}