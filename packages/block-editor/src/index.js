/**
 * External dependencies
 */
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import Toolbar from './toolbar';

/**
 * Style dependencies
 */
import './style.scss';

const settings = {};

export const BlockEditor = ( { onSave } ) => {
	return (
		<IsolatedBlockEditor
			settings={ settings }
			onSaveBlocks={ onSave }
			onLoad={ ( parse ) => parse( '' ) }
			onError={ noop }
		>
			<Toolbar />
		</IsolatedBlockEditor>
	);
};
