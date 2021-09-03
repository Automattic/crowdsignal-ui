/**
 * External dependencies
 */
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { useCallback } from '@wordpress/element';
import { parse } from '@wordpress/blocks';
import { debounce, noop } from 'lodash';

/**
 * Internal dependencies
 */
import Toolbar from './toolbar';

/**
 * Style dependencies
 */
import './style.scss';

const settings = {
	iso: {
		toolbar: {
			inspector: true,
			toc: true,
		},
	},
};

export const BlockEditor = ( { onSave, onLoad, children } ) => {
	const handleChangeContent = useCallback(
		debounce( ( content ) => onSave( parse( content ) ), 1000 ),
		[ onSave ]
	);

	return (
		<IsolatedBlockEditor
			settings={ settings }
			onSaveContent={ handleChangeContent }
			onLoad={ onLoad || noop }
			onError={ noop }
		>
			<Toolbar />
			{ children }
		</IsolatedBlockEditor>
	);
};
