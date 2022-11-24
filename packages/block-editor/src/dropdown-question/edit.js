/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { QuestionHeader, QuestionWrapper } from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';
import Toolbar from '../ranking-question/toolbar';

const EditTextQuestion = ( props ) => {
	const { attributes, className, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const classes = classnames(
		className,
		'crowdsignal-forms-dropdown-question-block',
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

			<QuestionWrapper.Content>
				<InnerBlocks
					template={ [
						[
							'crowdsignal-forms/dropdown-input',
							{ isNested: true },
						],
					] }
					templateLock={ true }
					orientation="vertical"
					__experimentalMoverDirection="vertical"
				/>
			</QuestionWrapper.Content>
		</QuestionWrapper>
	);
};

export default EditTextQuestion;
