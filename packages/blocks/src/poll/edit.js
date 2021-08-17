/**
 * External dependencies
 */
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { ResizableBox } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { includes, round } from 'lodash';

/**
 * Internal dependencies
 */
import { useClientId } from '@crowdsignal/hooks';
import Sidebar from './sidebar';

const ALLOWED_BLOCKS = [ 'crowdsignal-forms/poll-answer', 'core/paragraph' ];

const PollBlock = ( props ) => {
	const { attributes, isSelected, setAttributes } = props;

	useClientId( props );

	const handleChangeQuestion = ( question ) => setAttributes( { question } );

	const handleResize = ( event, handle, element ) => {
		if ( ! includes( [ 'right', 'left' ], handle ) ) {
			return;
		}

		setAttributes( {
			style: {
				...attributes.style,
				width: round(
					( element.offsetWidth / element.parentNode.offsetWidth ) *
						100
				),
			},
		} );
	};

	const isResizable = isSelected && attributes.align !== 'full';
	const blockWidth =
		attributes.align !== 'full' ? `${ attributes.style.width }%` : 'auto';

	return (
		<>
			<Sidebar { ...props } />

			<ResizableBox
				size={ { height: 'auto', width: blockWidth } }
				minWidth="25%"
				maxWidth="100%"
				enable={ { left: true, right: true } }
				onResizeStop={ handleResize }
				showHandle={ isResizable }
				resizeRatio={ 2 }
			>
				<div>
					<RichText
						tagName="h3"
						placeholder={ __( 'Enter your question', 'blocks' ) }
						onChange={ handleChangeQuestion( 'question' ) }
					/>

					<InnerBlocks
						template={ [
							[ 'core/paragraph', { content: 'Hello' } ],
						] }
						templateLock={ false }
						allowedBlocks={ ALLOWED_BLOCKS }
						orientation="vertical"
						__experimentalMoverDirection="vertical"
					/>
				</div>
			</ResizableBox>
		</>
	);
};

export default PollBlock;
