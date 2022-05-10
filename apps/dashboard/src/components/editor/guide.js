/**
 * External dependencies
 */
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { Guide } from '@crowdsignal/components';
import { STORE_NAME } from '../../data';
import { trackEvent } from '../../util/tracking';

/**
 * Style dependencies
 */
import { EditorGuideWrapper } from './styles/guide';

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
						<>
							<Guide.Header>
								{ __(
									'Welcome to the new Crowdsignal!',
									'dashboard'
								) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									'Take this showrt, interactive tour to lear the basics of the new Crowdsignal editor.',
									'dashboard'
								) }
							</Guide.Text>
						</>
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
						<>
							<Guide.Header>
								{ __( 'Everything is a block', 'dashboard' ) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									'In the Crowdsignal Editor, questions, from fields, images, and videos are all blocks.',
									'dashboard'
								) }
							</Guide.Text>
						</>
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
						<>
							<Guide.Header>
								{ __( 'Adding a new block', 'dashboard' ) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									'Click + to open the inserter. Then click the block you want to add, like a question block.',
									'dashboard'
								) }
							</Guide.Text>
						</>
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
						<>
							<Guide.Header>
								{ __(
									'Click a block to change it',
									'dashboard'
								) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									'Use the toolbar to change the appearance of the selected block. Try making it bold.',
									'dashboard'
								) }
							</Guide.Text>
						</>
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
						<>
							<Guide.Header>
								{ __(
									'Add and reorder pages as you like',
									'dashboard'
								) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									'Just make sure every page has at least one submit button, which you can relabel.',
									'dashboard'
								) }
							</Guide.Text>
						</>
					),
				},
				{
					image: (
						<img
							src="https://app.crowdsignal.com/images/guide/onboarding-change_theme.png"
							alt={ __( 'Change the theme design', 'dashboard' ) }
						/>
					),
					content: (
						<>
							<Guide.Header>
								{ __( 'Change the theme design', 'dashboard' ) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									'Choose one of several themes using the right sidebar, to make the page yours.',
									'dashboard'
								) }
							</Guide.Text>
						</>
					),
				},
				{
					image: (
						<img
							src="https://app.crowdsignal.com/images/guide/onboarding-publish_share.png"
							alt={ __(
								'Publish & share your project',
								'dashboard'
							) }
						/>
					),
					content: (
						<>
							<Guide.Header>
								{ __(
									'Publish & share your project',
									'dashboard'
								) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									'Publish your project and share the link to collect responses!',
									'dashboard'
								) }
							</Guide.Text>
						</>
					),
				},
				{
					image: (
						<img
							src="https://app.crowdsignal.com/images/guide/onboarding-finished.png"
							alt={ __( 'Guide finished', 'dashboard' ) }
						/>
					),
					content: (
						<>
							<Guide.Header>
								{ __( 'Congratulations!', 'dashboard' ) }
							</Guide.Header>
							<Guide.Text>
								{ __(
									`You've learned the basics of the new editor. Now it's time to watch responses coming in on your results page.`,
									'dashboard'
								) }
							</Guide.Text>
						</>
					),
				},
			] }
		/>
	);
};

export default EditorGuide;
