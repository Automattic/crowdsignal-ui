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
import Sidebar from './sidebar';

/**
 * Style dependencies
 */
import { QuestionHeader, QuestionWrapper } from '@crowdsignal/blocks';
import Toolbar from './toolbar';

const EditRakingQuestionBlock = ( props ) => {
	const { attributes, className, setAttributes } = props;

	useClientId( props );

	const classes = classnames(
		'crowdsignal-forms-ranking-question-block',
		className,
		{
			[ `justify-${ attributes.justification }` ]: attributes.justification,
		}
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			<Sidebar { ...props } />
			<Toolbar { ...props } />

			<RichText
				tagName={ QuestionHeader }
				placeholder={ __( 'Enter your question', 'block-editor' ) }
				onChange={ ( question ) => setAttributes( { question } ) }
				value={ attributes.question }
			/>
			<QuestionWrapper.Content>
				<InnerBlocks
					template={ [
						[ 'crowdsignal-forms/ranking-answer', {} ],
						[ 'crowdsignal-forms/ranking-answer', {} ],
						[ 'crowdsignal-forms/ranking-answer', {} ],
					] }
					templateLock={ false }
					allowedBlocks={ [ 'crowdsignal-forms/ranking-answer' ] }
					orientation="vertical"
					__experimentalMoverDirection="vertical"
				/>
			</QuestionWrapper.Content>
		</QuestionWrapper>
	);
};

export default EditRakingQuestionBlock;
