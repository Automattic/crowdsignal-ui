/**
 * External dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import EditablePageHeader from '../';

export default {
	title: 'Components/Editable Page Header',
	component: EditablePageHeader,
};

const Default = () => {
	const [ header, setHeader ] = useState(
		'The quick brown fox jumps over the lazy dog'
	);

	return <EditablePageHeader text={ header } onChange={ setHeader } />;
};
export { Default as EditablePageHeader };
