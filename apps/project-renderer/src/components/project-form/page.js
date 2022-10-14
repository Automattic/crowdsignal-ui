/**
 * External dependencies
 */
import { map, zipObject } from 'lodash';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import {
	ContentWrapper,
	projectBlocks,
	renderBlocks,
} from '@crowdsignal/blocks';
import { Form } from '@crowdsignal/form';
import {
	CrowdsignalFooter,
	NavigationBar,
	StickyFooter,
} from '@crowdsignal/components';
import { __ } from '@wordpress/i18n';

const blockMap = zipObject( map( projectBlocks, 'blockName' ), projectBlocks );

const ProjectPage = ( {
	blocks,
	currentPage,
	navigation,
	onNavigateBack,
	onSubmit,
	projectCode,
	totalPages,
	showBranding,
} ) => {
	const classes = classnames( 'wp-embed-responsive', 'crowdsignal-content', {
		'crowdsignal-forms-form__content': !! onSubmit,
	} );

	if ( ! onSubmit ) {
		return (
			<ContentWrapper className={ classes }>
				{ renderBlocks( blocks, blockMap ) }
			</ContentWrapper>
		);
	}

	return (
		<Form
			className="crowdsignal-forms-form"
			name={ `f-${ projectCode }-${ currentPage }` }
			onSubmit={ onSubmit }
		>
			<NavigationBar
				currentPageIndex={ currentPage }
				onBackButtonClick={ onNavigateBack }
				settings={ navigation }
				totalPages={ totalPages }
			/>
			<ContentWrapper className={ classes }>
				{ renderBlocks( blocks, blockMap ) }
			</ContentWrapper>
			{ showBranding && (
				<StickyFooter>
					<CrowdsignalFooter
						logo
						source="project-footer"
						message={ __(
							'Collect your own feedback with Crowdsignal',
							'project-renderer'
						) }
					/>
				</StickyFooter>
			) }
		</Form>
	);
};

export default ProjectPage;
