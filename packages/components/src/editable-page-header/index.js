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
import classnames from 'classnames';

const EditablePageHeader = ( { onChange, text, disabled } ) => {
	const [ active, setActive ] = useState( false );

	useEffect( () => setActive( false ), [ text ] );

	const showForm = () => {
		if ( disabled ) {
			return;
		}

		setActive( true );
	};
	const hideForm = () => setActive( false );

	const classes = classnames( 'editable-page-header', {
		'is-disabled': disabled,
	} );

	return (
		<div className={ classes }>
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
