# Question Wrapper

A generic question wrapper styled component.

## Usage

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
