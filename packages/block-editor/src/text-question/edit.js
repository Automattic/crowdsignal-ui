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

const EditTextQuestion = ( props ) => {
	const { attributes, className, isSelected, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

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

			<RichText
				tagName={ QuestionHeader }
				placeholder={ __( 'Enter your question', 'blocks' ) }
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
				<FormTextarea.Preview
					style={ {
						height: '100%',
					} }
					placeholder={ attributes.placeholder }
				/>
			</ResizableBox>
		</QuestionWrapper>
	);
};

export default EditTextQuestion;
