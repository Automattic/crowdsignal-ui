const FormTextInput = ( { className, ...props } ) => {
	return (
		<div className={ className }>
			<input type="text" { ...props } />
		</div>
	);
};

export default FormTextInput;
