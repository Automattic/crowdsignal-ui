/**
 * External dependencies
 */
import { Button, Popover } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { submitButtonBlock } from '@crowdsignal/block-editor';
import { hasUnpublishedChanges, isPublic } from '../../util/project';

/**
 * Style dependencies
 */
import { PublishButtonNotice, ToolbarButton } from './styles/button';

const PublishButton = ( { isSaved, isSaving, onPublish, project } ) => {
	const [ displayNotice, setDisplayNotice ] = useState( false );

	const currentPageSubmitButtonCount = useSelect( ( select ) =>
		select( 'core/block-editor' ).getGlobalBlockCount(
			submitButtonBlock.name
		)
	);

	const toggleNotice = () => setDisplayNotice( ! displayNotice );

	const submitButtonMissing = currentPageSubmitButtonCount === 0;

	if (
		isPublic( project ) &&
		! hasUnpublishedChanges( project ) &&
		isSaved &&
		! isSaving
	) {
		return null;
	}

	return (
		<ToolbarButton
			as={ Button }
			className="is-crowdsignal"
			variant={ isPublic( project ) ? 'tertiary' : 'primary' }
			disabled={ isSaving || submitButtonMissing }
			onClick={ onPublish }
			onMouseEnter={ toggleNotice }
			onMouseLeave={ toggleNotice }
		>
			{ isPublic( project )
				? __( 'Update', 'dashboard' )
				: __( 'Publish', 'dashboard' ) }

			{ displayNotice && submitButtonMissing && (
				<Popover noArrow={ false }>
					<PublishButtonNotice>
						{ __(
							'Please add a Submit Button to the current page in order to publish your project.',
							'dashboard'
						) }
					</PublishButtonNotice>
				</Popover>
			) }
		</ToolbarButton>
	);
};

export default PublishButton;
