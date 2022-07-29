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
import { NavigationBar } from '@crowdsignal/components';

const blockMap = zipObject( map( projectBlocks, 'blockName' ), projectBlocks );

const ProjectPage = ( {
	blocks,
	currentPage,
	navigation,
	onNavigateBack,
	onSubmit,
	projectCode,
	totalPages,
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
		</Form>
	);
};

export default ProjectPage;
