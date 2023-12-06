import { H1, Header, MainSection } from "../atoms/atoms.js";
import { Data } from "../libs/base/base.js";
import { GridContainer } from '../molecules/molecules.js';
import { FullTemplate } from '../templates/full-template.js';
import { BasicPage } from './basic-page.js';

/**
 * FullPage
 *
 * This will create a full page.
 *
 * @class
 * @extends BasicPage
 */
export class FullPage extends BasicPage
{
	onCreated()
	{
		this.data = new Data({
			name: 'name',
			class: 'active',
			other: {
				name: 'name',
				class: 'active'
			},
			items: [
				{
					name: 'name',
				}
			]
		});
	}
	/**
	 * This will render the page.
	 *
	 * @return {object}
	 */
	render()
	{
		return MainSection([
			Header([
				H1('Title [[name]]'),
			]),
			FullTemplate(this.addBody())
		]);
	}

	afterSetup()
	{
		const data = this.data;

		setTimeout(() =>
		{
			data.name = 'test';
			data.class = 'inactive';
			data.other.name = 'test';
			data.other.class = 'inactive';
			data.items[0].name = 'test';
			data.items[0].class = 'inactive';
			console.log(data.get())
		}, 5000);
	}

	/**
	 * This will add the body of the page.
	 *
	 * @return {array}
	 */
	addBody()
	{
		return [
			GridContainer()
		];
	}
}