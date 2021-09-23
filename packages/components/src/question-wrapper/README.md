# Question Wrapper

A generic question wrapper styled component.

## Usage

Note: This component only provides the fixed styles common across all our blocks. Customizable parts like colors or borders need to be passed explicitly using `style` or `className`. When working with blocks, useXXXStyles hooks from `@crowdsignal/styles` are the recommended way to do that.

```javascript
import { QuestionWrapper } from '@crowdsignal/components';
import { useBorderStyles, useColorStyles } from '@crowdsignal/styles';

const QuestionBlock = ( { attributes } ) => {
	<QuestionWrapper
		style={ {
			...useColorStyles( attributes ),
			...useBorderStyles( attributes ),
			width: attributes.width,
		} }
	>
		...
	</QuestionWrapper>
};
```
