/**
 * External dependencies
 */
import { useEffect, useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { useBlur } from '@crowdsignal/hooks';

const PageHeaderForm = ( { onCancel, onChange, value } ) => {
	const form = useRef();

	const handleChange = () => {
		const data = new window.FormData( form.current );

		if ( data.get( 'value' ) !== value ) {
			return onChange( data.get( 'value' ) );
		}

		onCancel();
	};

	const handleSubmit = ( event ) => {
		handleChange();
		event.preventDefault();
	};

	useBlur( handleChange, [ form ] );

	useEffect( () => form.current.children[ 0 ].select(), [ form.current ] );

	return (
		<form
			ref={ form }
			className="editable-page-header__form"
			onSubmit={ handleSubmit }
		>
			<input
				className="editable-page-header__input"
				type="text"
				name="value"
				defaultValue={ value }
			/>
		</form>
	);
};

export default PageHeaderForm;
