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
import EditButtonAnswer from './edit-button';
import Sidebar from './sidebar';

const EditRatingScaleAnswer = ( props ) => {
	const { attributes, className, clientId, setAttributes } = props;

	const questionAttributes = useParentAttributes( clientId );

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const blockStyle = getBlockStyle( questionAttributes.className );

	const classes = classnames(
		'crowdsignal-forms-rating-scale-answer-block',
		className,
		{
			'is-empty': ! attributes.label,
			'is-style-emoji': blockStyle === RatingScaleQuestion.Style.EMOJI,
		}
	);

	return (
		<>
			<Sidebar { ...props } />

			<EditButtonAnswer
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
