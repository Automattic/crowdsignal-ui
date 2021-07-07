/**
 * Internal dependencies
 */
import Button from '../';

const buttonGridStyle = {
	alignItems: 'center',
	display: 'grid',
	gridGap: '20px',
	gridTemplateColumns: '200px 200px 200px',
	justifyItems: 'center',
};

export default {
	title: 'Components/Button',
	component: Button,
	decorators: [
		( Story ) => (
			<div style={ buttonGridStyle }>
				<Story />
			</div>
		),
	],
};

export const Regular = () => (
	<>
		<Button large>Large</Button>
		<Button>Medium</Button>
		<Button compact>Compact</Button>

		<Button disabled large>
			Large
		</Button>
		<Button disabled>Medium</Button>
		<Button disabled compact>
			Compact
		</Button>

		<Button borderless large>
			Large
		</Button>
		<Button borderless>Medium</Button>
		<Button borderless compact>
			Compact
		</Button>
	</>
);

export const Primary = () => (
	<>
		<Button primary large>
			Large
		</Button>
		<Button primary>Medium</Button>
		<Button primary compact>
			Compact
		</Button>

		<Button primary disabled large>
			Large
		</Button>
		<Button primary disabled>
			Medium
		</Button>
		<Button primary disabled compact>
			Compact
		</Button>

		<Button primary borderless large>
			Large
		</Button>
		<Button primary borderless>
			Medium
		</Button>
		<Button primary borderless compact>
			Compact
		</Button>
	</>
);

export const Secondary = () => (
	<>
		<Button secondary large>
			Large
		</Button>
		<Button secondary>Medium</Button>
		<Button secondary compact>
			Compact
		</Button>

		<Button secondary disabled large>
			Large
		</Button>
		<Button secondary disabled>
			Medium
		</Button>
		<Button secondary disabled compact>
			Compact
		</Button>

		<Button secondary borderless large>
			Large
		</Button>
		<Button secondary borderless>
			Medium
		</Button>
		<Button secondary borderless compact>
			Compact
		</Button>
	</>
);

export const Highlight = () => (
	<>
		<Button highlight large>
			Large
		</Button>
		<Button highlight>Medium</Button>
		<Button highlight compact>
			Compact
		</Button>

		<Button highlight disabled large>
			Large
		</Button>
		<Button highlight disabled>
			Medium
		</Button>
		<Button highlight disabled compact>
			Compact
		</Button>

		<Button highlight borderless large>
			Large
		</Button>
		<Button highlight borderless>
			Medium
		</Button>
		<Button highlight borderless compact>
			Compact
		</Button>
	</>
);

export const Scary = () => (
	<>
		<Button scary large>
			Large
		</Button>
		<Button scary>Medium</Button>
		<Button scary compact>
			Compact
		</Button>

		<Button scary disabled large>
			Large
		</Button>
		<Button scary disabled>
			Medium
		</Button>
		<Button scary disabled compact>
			Compact
		</Button>

		<Button scary borderless large>
			Large
		</Button>
		<Button scary borderless>
			Medium
		</Button>
		<Button scary borderless compact>
			Compact
		</Button>
	</>
);

export const Link = () => <Button href="#">Click me</Button>;
