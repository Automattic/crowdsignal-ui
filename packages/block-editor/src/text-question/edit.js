/**
 * External dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import {
	FormTextarea,
	QuestionHeader,
	QuestionWrapper,
} from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';
import Toolbar from '../ranking-question/toolbar';

const EditTextQuestion = ( props ) => {
	const { attributes, className, isSelected, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const handleChangePlaceholder = ( placeholder ) =>
		setAttributes( { placeholder } );

	const handleResizeInput = ( event, handle, element ) => {
		if ( handle !== 'bottom' ) {
			return;
		}

		setAttributes( {
			inputHeight: `${ element.offsetHeight }px`,
		} );
	};

	const classes = classnames(
		className,
		'crowdsignal-forms-text-question-block',
		{
			'is-required': attributes.mandatory,
		}
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<Sidebar { ...props } />
			<Toolbar { ...props } />

			<RichText
				tagName={ QuestionHeader }
				placeholder={ __( 'Enter your question', 'block-editor' ) }
				onChange={ handleChangeQuestion }
				value={ attributes.question }
			/>

			<ResizableBox
				size={ { width: '100%', height: attributes.inputHeight } }
				minHeight="35px"
				enable={ { bottom: true } }
				onResizeStop={ handleResizeInput }
				showHandle={ isSelected }
			>
				<FormTextarea
					placeholder={ __( 'Enter placeholder', 'block-editor' ) }
					value={ attributes.placeholder }
					onChange={ handleChangePlaceholder }
					style={ {
						height: '100%',
					} }
				/>
			</ResizableBox>
		</QuestionWrapper>
	);
};

export default EditTextQuestion;
