/**
 * External dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { useClientId } from '@crowdsignal/hooks';

/**
 * Style dependencies
 */
import { MultipleChoiceWrapper } from './styles/multiple-choice';

const ALLOWED_ANSWER_BLOCKS = [
	'core/image',
	'core/paragraph',
	'crowdsignal-forms/multiple-choice-answer',
];

const EditMultipleChoiceQuestion = ( props ) => {
	const { attributes, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const handleChangeNote = ( note ) => setAttributes( { note } );

	return (
		<MultipleChoiceWrapper>
			<RichText
				tagName="p"
				placeholder={ __( 'Enter your question', 'blocks' ) }
				onChange={ handleChangeQuestion }
				value={ attributes.question }
			/>
			<RichText
				tagName="p"
				placeholder={ __( 'Enter a note', 'blocks' ) }
				onChange={ handleChangeNote }
				value={ attributes.note }
			/>
			<InnerBlocks
				template={ [
					[ 'crowdsignal-forms/multiple-choice-answer', {} ],
					[ 'crowdsignal-forms/multiple-choice-answer', {} ],
					[ 'crowdsignal-forms/multiple-choice-answer', {} ],
				] }
				templateLock={ false }
				allowedBlocks={ ALLOWED_ANSWER_BLOCKS }
				orientation="vertical"
				__experimentalMoverDirection="vertical"
			/>
		</MultipleChoiceWrapper>
	);
};

export default EditMultipleChoiceQuestion;
