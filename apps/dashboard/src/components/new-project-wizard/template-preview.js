/**
 * External dependencies
 */
import { BlockPreview } from '@wordpress/block-editor';

/**
 * Style dependencies
 */
import {
	TemplatePreviewDescription,
	TemplatePreviewFrame,
	TemplatePreviewName,
	TemplatePreviewWrapper,
} from './styles/template-preview';

const TemplatePreview = ( { onSelect, template } ) => {
	const handleSelect = () => onSelect( template );

	const PreviewComponent = template.preview;

	return (
		<TemplatePreviewWrapper>
			<TemplatePreviewFrame onClick={ handleSelect }>
				{ PreviewComponent && <PreviewComponent /> }

				{ ! PreviewComponent && (
					<BlockPreview
						blocks={ template.project.draftContent.pages[ 0 ] }
						viewportWidth={ 1200 }
					/>
				) }
			</TemplatePreviewFrame>

			<TemplatePreviewName>{ template.name }</TemplatePreviewName>
			<TemplatePreviewDescription>
				{ template.description }
			</TemplatePreviewDescription>
		</TemplatePreviewWrapper>
	);
};

export default TemplatePreview;
