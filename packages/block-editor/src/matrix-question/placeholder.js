/**
 * External dependencies
 */
import { BlockIcon } from '@wordpress/block-editor';
import { Button, Placeholder, TextControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { v4 as uuid } from 'uuid';
import { times } from 'lodash';

/**
 * Internal dependencies
 */
import { MatrixQuestionIcon } from '@crowdsignal/icons';

/**
 * Style dependencies
 */
import { PlaceholderForm, PlaceholderInput } from './styles';

const MatrixQuestionPlaceholder = ( { setAttributes } ) => {
	const [ columnCount, setColumnCount ] = useState( 3 );
	const [ rowCount, setRowCount ] = useState( 3 );

	const handleCreateMatrix = () =>
		setAttributes( {
			columns: times( columnCount, () => ( {
				clientId: uuid(),
				label: '',
			} ) ),
			rows: times( rowCount, () => ( {
				clientId: uuid(),
				label: '',
			} ) ),
		} );

	return (
		<Placeholder
			label={ __( 'Matrix Question', 'block-editor' ) }
			icon={ <BlockIcon icon={ MatrixQuestionIcon } /> }
			instructions={ __(
				'Choose the amount of rows and columns for your Matrix Question:',
				'block-editor'
			) }
		>
			<PlaceholderForm onSubmit={ handleCreateMatrix }>
				<PlaceholderInput
					as={ TextControl }
					type="number"
					label={ __( 'Column count' ) }
					value={ columnCount }
					onChange={ setColumnCount }
					min="1"
				/>
				<PlaceholderInput
					as={ TextControl }
					type="number"
					label={ __( 'Row count' ) }
					value={ rowCount }
					onChange={ setRowCount }
					min="1"
				/>
				<Button variant="primary" type="submit">
					{ __( 'Create Matrix Question' ) }
				</Button>
			</PlaceholderForm>
		</Placeholder>
	);
};

export default MatrixQuestionPlaceholder;
