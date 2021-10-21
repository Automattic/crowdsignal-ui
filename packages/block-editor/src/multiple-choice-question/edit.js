/**
 * External dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useClientId } from '@crowdsignal/hooks';

/**
 * Style dependencies
 */
import { QuestionHeader, QuestionWrapper } from '@crowdsignal/blocks';
import Toolbar from './toolbar';
import Sidebar from './sidebar';

const ALLOWED_ANSWER_BLOCKS = [
	'core/image',
	'core/paragraph',
	'crowdsignal-forms/multiple-choice-answer',
];

const EditMultipleChoiceQuestion = ( props ) => {
	const { attributes, className, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const classes = classnames( className, {
		'is-required': attributes.mandatory,
	} );

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<Toolbar { ...props } />
			<Sidebar { ...props } />

			<RichText
				tagName={ QuestionHeader }
				placeholder={ __( 'Enter your question', 'blocks' ) }
				onChange={ handleChangeQuestion }
				value={ attributes.question }
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
		</QuestionWrapper>
	);
};

export default EditMultipleChoiceQuestion;

// get parent attributes might work like:
//
// getBlockHierarchyRootClientId = return parent clientId
// getblockAttributes( parentClientId );