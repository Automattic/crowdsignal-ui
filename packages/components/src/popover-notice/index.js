/**
 * Internal dependencies
 */
import Popover from '../popover';

/**
 * Style dependencies
 */
import { Wrapper } from './styles';

const PopoverNotice = ( { children, ...popoverProps } ) => (
	<Popover { ...popoverProps }>
		<Wrapper>{ children }</Wrapper>
	</Popover>
);

export default PopoverNotice;
