/**
 * Style dependencies
 */
import { InputPrefix, InputWrapper, Input } from './styles';

const FormTextInput = ( { className, inputRef, prefix, style, ...props } ) => {
	return (
		<InputWrapper className={ className } style={ style }>
			{ prefix && <InputPrefix>{ prefix }</InputPrefix> }

			<Input ref={ inputRef } type="text" { ...props } />
		</InputWrapper>
	);
};

export default FormTextInput;
