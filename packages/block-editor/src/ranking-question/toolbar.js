/**
 * Internal dependencies
 */
import { JustificationControl } from '../util/justification-control';

export default ( { attributes, setAttributes } ) => {
	return (
		<JustificationControl
			justification={ attributes.justification }
			onChange={ ( value ) => {
				setAttributes( { justification: value } );
			} }
		/>
	);
};
