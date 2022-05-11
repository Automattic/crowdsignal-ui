/**
 * External dependencies
 */
import { compose } from '@wordpress/compose';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { useClientId } from '@crowdsignal/hooks';
import { withSharedSiblingAttributes } from '../util/with-shared-sibling-attributes';
import EditButtonAnswer from '../components/edit-button';
import Sidebar from './sidebar';
import { createBlock } from '@wordpress/blocks';
import { useDispatch, useSelect } from '@wordpress/data';
import { DragHandle } from '@crowdsignal/icons';

const EditRankingAnswer = ( props ) => {
	const { attributes, className, clientId, onReplace, setAttributes } = props;

	const { removeBlock } = useDispatch( 'core/block-editor' );

	const answersCount = useSelect(
		( select ) => {
			const { getBlockCount, getBlockRootClientId } = select(
				'core/block-editor'
			);

			const questionClientId = getBlockRootClientId( clientId );
			return getBlockCount( questionClientId );
		},
		[ clientId ]
	);

	useClientId( props );

	const handleChangeLabel = ( label ) => setAttributes( { label } );

	const handleSplit = ( label ) =>
		createBlock( 'crowdsignal-forms/ranking-answer', {
			...attributes,
			clientId:
				label && attributes.label.indexOf( label ) === 0
					? attributes.clientId
					: undefined,
			label,
		} );

	const handleDelete = () => {
		if ( answersCount <= 2 ) {
			return;
		}

		removeBlock( clientId );
	};

	const classes = classnames(
		'crowdsignal-forms-ranking-answer-block',
		className,
		{
			'is-empty': ! attributes.label,
		}
	);

	return (
		<div className={ classes }>
			<Sidebar { ...props } />
			<DragHandle />
			<EditButtonAnswer
				attributes={ attributes }
				onChange={ handleChangeLabel }
				onSplit={ handleSplit }
				onDelete={ handleDelete }
				onReplace={ onReplace }
			/>
		</div>
	);
};

export default compose(
	withSharedSiblingAttributes( [
		'backgroundColor',
		'gradient',
		'textColor',
		'width',
	] )
)( EditRankingAnswer );
