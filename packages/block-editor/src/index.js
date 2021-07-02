/**
 * External dependencies
 */
import IsolatedBlockEditor from 'isolated-block-editor'; // eslint-disable-line import/default
import { noop } from 'lodash';

const settings = {};

export const BlockEditor = () => {
	return (
		<IsolatedBlockEditor
			settings={ settings }
			onSaveContent={ noop }
			onLoad={ ( parse ) => parse( '' ) }
			onError={ noop }
		/>
	);
};
