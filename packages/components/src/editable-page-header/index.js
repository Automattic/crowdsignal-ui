/**
 * External dependencies
 */
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import PageHeader from '../page-header';
import Button from '../button';
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

	const [ showButton, setShowButton ] = useState( false );

	const classes = classnames( 'editable-page-header', {
		'is-disabled': disabled,
	} );

	return (
		<>
			<div
				className={ classes }
				onMouseEnter={ () => setShowButton( true ) }
				onMouseLeave={ () => setShowButton( false ) }
			>
				{ ! active && (
					<PageHeader onClick={ showForm }>{ text }</PageHeader>
				) }
				{ ! active && showButton && (
					<Button
						className="editable-page-header__button"
						onClick={ showForm }
					>
						{ __( 'Edit', 'dashboard' ) }
					</Button>
				) }
				{ active && (
					<Form
						value={ text }
						onChange={ onChange }
						onCancel={ hideForm }
					/>
				) }
			</div>
		</>
	);
};

export default EditablePageHeader;
