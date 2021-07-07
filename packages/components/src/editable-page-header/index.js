/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import PageHeader from '../page-header';
import Form from './form';

/**
 * Style dependencies
 */
import './style.scss';

const EditablePageHeader = ( { onChange, text } ) => {
	const [ active, setActive ] = useState( false );

	useEffect( () => setActive( false ), [ text ] );

	const showForm = () => setActive( true );
	const hideForm = () => setActive( false );

	return (
		<div className="editable-page-header">
			{ ! active && (
				<PageHeader onClick={ showForm }>{ text }</PageHeader>
			) }

			{ active && (
				<Form
					value={ text }
					onChange={ onChange }
					onCancel={ hideForm }
				/>
			) }
		</div>
	);
};

export default EditablePageHeader;
