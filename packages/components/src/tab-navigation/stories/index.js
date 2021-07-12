/**
 * Internal dependencies
 */
import TabNavigation from '../';

export default {
	title: 'Components/Tab Navigation',
	component: TabNavigation,
};

const Default = () => (
	<TabNavigation>
		<TabNavigation.Tab isSelected href="#">
			Foo
		</TabNavigation.Tab>
		<TabNavigation.Tab href="#">Bar</TabNavigation.Tab>
		<TabNavigation.Tab href="#">Baz</TabNavigation.Tab>
	</TabNavigation>
);
export { Default as TabNavigation };
