/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { RatingScaleQuestion, getBlockStyle } from '@crowdsignal/blocks';
import { useClientId } from '@crowdsignal/hooks';
import { useParentAttributes } from '../util/use-parent-attributes';
import { withSharedSiblingAttributes } from '../util/with-shared-sibling-attributes';
import EditButtonAnswer from '../components/edit-button';
import Sidebar from './sidebar';

const EditRatingScaleAnswer = ( props ) => {
	const { attributes, className, clientId, setAttributes } = props;

	const questionAttributes = useParentAttributes( clientId );

	useClientId( props );

	const handleChangeLabel = ( label ) => {
		if ( blockStyle === RatingScaleQuestion.Style.EMOJI ) {
			setAttributes( { emoji: label } );
		} else {
			setAttributes( { label } );
		}
	};

	const blockStyle = getBlockStyle( questionAttributes.className );

	const classes = classnames(
		'crowdsignal-forms-rating-scale-answer-block',
		className,
		{
			'is-empty': ! attributes.label,
			'is-style-emoji': blockStyle === RatingScaleQuestion.Style.EMOJI,
			'is-style-text': blockStyle === RatingScaleQuestion.Style.TEXT,
		}
	);

	const value =
		blockStyle === RatingScaleQuestion.Style.EMOJI
			? attributes.emoji
			: attributes.label;

	return (
		<>
			<Sidebar { ...props } />

			<EditButtonAnswer
				value={ value }
				attributes={ attributes }
				className={ classes }
				onChange={ handleChangeLabel }
			/>
		</>
	);
};

export default compose(
	withSharedSiblingAttributes( [
		'backgroundColor',
		'gradient',
		'textColor',
		'width',
	] )
)( EditRatingScaleAnswer );
