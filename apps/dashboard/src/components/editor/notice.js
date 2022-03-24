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

export const NOTICE_UNPUBLISHED =
	'crowdsignal-editor-unpublished-changes-notice';
export const NOTICE_ERROR = 'crowdsignal-editor-error-notice';

const EditorNotice = ( { onRestore, project, version } ) => {
	const {
		createWarningNotice,
		createErrorNotice,
		removeNotice,
	} = useDispatch( 'core/notices' );

	const [ editorError, isEditorUnchanged ] = useSelect( ( select ) => [
		select( STORE_NAME ).getEditorError(),
		select( STORE_NAME ).isEditorUnchanged(),
	] );

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
				id: NOTICE_UNPUBLISHED,
				isDismissible: true,
				actions: [
					{
						label: __( 'Restore', 'dashboard' ),
						onClick: () => {
							removeNotice( NOTICE_UNPUBLISHED );
							onRestore();
						},
					},
				],
			}
		);
	}, [] );

	useEffect( () => {
		if ( ! editorError ) {
			removeNotice( NOTICE_ERROR );
			return;
		}

		createErrorNotice(
			__(
				`Unfortunately your changes couldn't be saved. Please check your connection and try again`,
				'dashboard'
			),
			{
				id: NOTICE_ERROR,
				isDismissible: false,
			}
		);
	}, [ editorError ] );

	return null;
};

export default EditorNotice;
