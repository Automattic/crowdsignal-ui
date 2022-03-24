/* eslint-disable complexity */

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
import { hasUnpublishedChanges, isPublic } from '@crowdsignal/project';
import { STORE_NAME } from '../../data';

/**
 * Style dependencies
 */
import { PublishButtonNotice, ToolbarButton } from './styles/button';

const PublishButton = ( {
	canRestoreDraft,
	isSaved,
	isSaving,
	onPublish,
	project,
} ) => {
	const [ displayNotice, setDisplayNotice ] = useState( false );

	const canPublish = useSelect( ( select ) =>
		select( STORE_NAME ).isEditorContentPublishable()
	);

	const toggleNotice = () => setDisplayNotice( ! displayNotice );

	const isLatestVersion =
		isPublic( project ) &&
		! hasUnpublishedChanges( project ) &&
		isSaved &&
		! isSaving;

	const handleOnPublish = () => {
		onPublish( ! isPublic( project ) );
	};

	if ( canRestoreDraft || isLatestVersion ) {
		return null;
	}

	return (
		<ToolbarButton
			as={ Button }
			className="is-crowdsignal"
			variant={ isPublic( project ) ? 'tertiary' : 'primary' }
			disabled={ isSaving || ! canPublish }
			onClick={ handleOnPublish }
			onMouseEnter={ toggleNotice }
			onMouseLeave={ toggleNotice }
		>
			{ isPublic( project )
				? __( 'Update', 'dashboard' )
				: __( 'Publish', 'dashboard' ) }

			{ displayNotice && ! canPublish && (
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
