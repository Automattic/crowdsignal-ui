/**
 * Style dependencies
 */
import { InputPrefix, InputWrapper, Input } from './styles';

const FormTextInput = ( { className, compact, error, inputRef, prefix, style, warning, ...props } ) => {
	return (
		<InputWrapper className={ className } style={ style }>
			{ prefix && (
				<InputPrefix>
					{ prefix }
				</InputPrefix>
			) }

			<Input ref={ inputRef } type="text" { ...props } />
		</InputWrapper>
	);
};

export default FormTextInput;
