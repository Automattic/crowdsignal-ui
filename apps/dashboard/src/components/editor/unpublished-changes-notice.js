/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { hasUnpublishedChanges, isPublic } from '@crowdsignal/project';
import { STORE_NAME } from '../../data';

const NOTICE_ID = 'crowdsignal-unpublished-changes-notice';

const UnpublishedChangesNotice = ( { onRestore, project, version } ) => {
	const { createWarningNotice, removeNotice } = useDispatch( 'core/notices' );

	const isEditorUnchanged = useSelect( ( select ) =>
		select( STORE_NAME ).isEditorUnchanged()
	);

	useEffect( () => {
		if (
			! isPublic( project ) ||
			! hasUnpublishedChanges( project ) ||
			! isEditorUnchanged ||
			version === 'draft'
		) {
			return;
		}

		createWarningNotice(
			__(
				'You have unpublished changes for this project, do you want to restore the draft version?',
				'dashboard'
			),
			{
				id: NOTICE_ID,
				isDismissible: true,
				actions: [
					{
						label: __( 'Restore', 'dashboard' ),
						onClick: () => {
							removeNotice( NOTICE_ID );
							onRestore();
						},
					},
				],
			}
		);
	}, [] );

	return null;
};

UnpublishedChangesNotice.ID = NOTICE_ID;

export default UnpublishedChangesNotice;
