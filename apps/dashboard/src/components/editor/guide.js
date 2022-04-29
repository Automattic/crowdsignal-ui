/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { Guide } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { STORE_NAME } from '../../data';
import { trackEvent } from '../../util/tracking';

/**
 * Style dependencies
 */
import {
	EditorGuideHeading,
	EditorGuidePageContent,
	EditorGuideText,
	EditorGuideWrapper,
} from './styles/guide';

const EditorGuide = ( { onFinish } ) => {
	const currentUser = useSelect( ( select ) =>
		select( STORE_NAME ).getCurrentUser()
	);

	useEffect( () => {
		if ( ! currentUser ) {
			return;
		}

		trackEvent( currentUser, 'crowdsignal_project_editor_guide_view', {} );
	}, [ currentUser && currentUser.userId ] );

	return (
		<EditorGuideWrapper
			as={ Guide }
			onFinish={ onFinish }
			pages={ [
				{
					image: (
						<img
							src="https://app.crowdsignal.com/images/guide/onboarding-welcome.png"
							alt={ __(
								'Welcome to the new Crowdsignal',
								'dashboard'
							) }
						/>
					),
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __(
									'Welcome to the new Crowdsignal!',
									'dashboard'
								) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									'Take this showrt, interactive tour to lear the basics of the new Crowdsignal editor.',
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
				{
					image: (
						<img
							src="https://s0.wp.com/i/editor-welcome-tour/slide-all-blocks.gif"
							alt={ __( 'Everything is a block', 'dashboard' ) }
						/>
					),
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __( 'Everything is a block', 'dashboard' ) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									'In the Crowdsignal Editor, questions, from fields, images, and videos are all blocks.',
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
				{
					image: (
						<img
							src="https://app.crowdsignal.com/images/guide/onboarding-add_a_block.gif"
							alt={ __( 'Adding a new block', 'dashboard' ) }
						/>
					),
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __( 'Adding a new block', 'dashboard' ) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									'Click + to open the inserter. Then click the block you want to add, like a question block.',
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
				{
					image: (
						<img
							src="https://s0.wp.com/i/editor-welcome-tour/slide-make-bold.gif"
							alt={ __(
								'Click a block to change it',
								'dashboard'
							) }
						/>
					),
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __(
									'Click a block to change it',
									'dashboard'
								) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									'Use the toolbar to change the appearance of the selected block. Try making it bold.',
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
				{
					image: (
						<img
							src="https://app.crowdsignal.com/images/guide/onboarding-reordering.gif"
							alt={ __(
								'Add and reorder pages as you like',
								'dashboard'
							) }
						/>
					),
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __(
									'Add and reorder pages as you like',
									'dashboard'
								) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									'Just make sure every page has at least one submit button, which you can relabel.',
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
				{
					// image: <img src="" />,
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __( 'Change the theme design', 'dashboard' ) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									'Choose one of several themes using the right sidebar, to make the page yours.',
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
				{
					// image: <img src="" />,
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __(
									'Publish & share your project',
									'dashboard'
								) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									'Publish your project and share the link to collect responses!',
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
				{
					// image: <img src="" />,
					content: (
						<EditorGuidePageContent>
							<EditorGuideHeading>
								{ __( 'Congratulations!', 'dashboard' ) }
							</EditorGuideHeading>
							<EditorGuideText>
								{ __(
									`You've learned the basics of the new editor. Now it's time to watch responses coming in on your results page.`,
									'dashboard'
								) }
							</EditorGuideText>
						</EditorGuidePageContent>
					),
				},
			] }
		/>
	);
};

export default EditorGuide;
