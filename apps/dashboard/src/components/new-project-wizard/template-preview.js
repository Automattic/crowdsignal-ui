/**
 * External dependencies
 */
import { kebabCase } from 'lodash';

/**
 * Style dependencies
 */
import {
	TemplatePreviewDescription,
	TemplatePreviewFrame,
	TemplatePreviewImage,
	TemplatePreviewImageWrapper,
	TemplatePreviewName,
	TemplatePreviewWrapper,
} from './styles/template-preview';

const TemplatePreview = ( { onSelect, template, theme } ) => {
	const handleSelect = () => onSelect( template );

	const PreviewComponent = template.preview;

	return (
		<TemplatePreviewWrapper>
			<TemplatePreviewFrame onClick={ handleSelect }>
				{ PreviewComponent && <PreviewComponent /> }

				{ ! PreviewComponent && (
					<TemplatePreviewImageWrapper>
						<TemplatePreviewImage
							src={ `https://app.crowdsignal.com/templates/${ theme }/${ kebabCase(
								template.name
							) }.png` }
						/>
					</TemplatePreviewImageWrapper>
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
