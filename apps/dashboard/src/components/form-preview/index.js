/**
 * External dependencies
 */
import { useSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import { Poll, PollAnswer, renderBlocks } from '@crowdsignal/blocks';
import { STORE_NAME } from '../../data';

const FormPreview = ( { projectId } ) => {
	const project = useSelect( ( select ) =>
		select( STORE_NAME ).getProject( projectId )
	);

	if ( ! project?.content?.draft ) {
		return null;
	}

	return renderBlocks( project.content.draft.pages[ 0 ], {
		'crowdsignal-forms/poll': Poll,
		'crowdsignal-forms/poll-answer': PollAnswer,
		'crowdsignal-forms/free-text': () => <div className="free-text" />,
		'crowdsignal-forms/multiple-choice': () => (
			<div className="multiple-choice" />
		),
	} );
};

export default FormPreview;
