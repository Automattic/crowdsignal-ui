/**
 * External dependencies
 */
import { useLayoutEffect, useRef } from '@wordpress/element';
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

const blockMap = zipObject( map( projectBlocks, 'blockName' ), projectBlocks );

const ProjectPage = ( { blocks, onSubmit, projectCode } ) => {
	const formWrapper = useRef( null );

	useLayoutEffect( () => {
		window.parent.postMessage(
			{
				type: 'crowdsignal-forms-project-page-loaded',
				projectCode,
				pageHeight: document.body.offsetHeight,
			},
			'*'
		);
	}, [ blocks ] );

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
			ref={ formWrapper }
			className="crowdsignal-forms-form"
			name={ `f-${ projectCode }` }
			onSubmit={ onSubmit }
		>
			<ContentWrapper className={ classes }>
				{ renderBlocks( blocks, blockMap ) }
			</ContentWrapper>
		</Form>
	);
};

export default ProjectPage;
