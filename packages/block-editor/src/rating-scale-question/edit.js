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
// import Toolbar from './toolbar';
import Sidebar from './sidebar';

const ALLOWED_ANSWER_BLOCKS = [ 'crowdsignal-forms/rating-scale-answer' ];

const EditRatingScaleQuestion = ( props ) => {
	const { attributes, className, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const classes = classnames(
		'crowdsignal-forms-rating-scale-question-block',
		className,
		{
			'is-required': attributes.mandatory,
		}
	);

	return (
		<QuestionWrapper attributes={ attributes } className={ classes }>
			{ /* <Toolbar { ...props } /> */ }
			<Sidebar { ...props } />

			<RichText
				tagName={ QuestionHeader }
				placeholder={ __( 'Enter your question', 'block-editor' ) }
				onChange={ handleChangeQuestion }
				value={ attributes.question }
			/>
			<QuestionWrapper.Content horizontal>
				<InnerBlocks
					template={ [
						[
							'crowdsignal-forms/rating-scale-answer',
							{ label: '1', weight: 1 },
						],
						[
							'crowdsignal-forms/rating-scale-answer',
							{ label: '2', weight: 2 },
						],
						[
							'crowdsignal-forms/rating-scale-answer',
							{ label: '3', weight: 3 },
						],
						[
							'crowdsignal-forms/rating-scale-answer',
							{ label: '4', weight: 4 },
						],
						[
							'crowdsignal-forms/rating-scale-answer',
							{ label: '5', weight: 5 },
						],
					] }
					templateLock={ true }
					allowedBlocks={ ALLOWED_ANSWER_BLOCKS }
				/>
			</QuestionWrapper.Content>
		</QuestionWrapper>
	);
};

export default EditRatingScaleQuestion;
