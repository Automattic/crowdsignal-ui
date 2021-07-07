/**
 * Internal dependencies
 */
import FormTextInput from '../';

export default {
	title: 'Components/FormTextInput',
	components: FormTextInput,
};

export const Default = () => <FormTextInput />;

export const Error = () => <FormTextInput error />;

export const Compact = () => <FormTextInput compact />;

export const Prefix = () => (
	<FormTextInput prefix="https://crowdsignal.com/" defaultValue="foo" />
);
