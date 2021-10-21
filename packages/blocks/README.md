# @crowdsignal/blocks

Crowdsignal block library. This package contains the implementation of the user-facing interface of all our blocks. For editor interface see [@crowdsignal/block-editor](../block-editor).

**Note:** `@crowdsignal/block-editor` depends on `@crowdsignal/blocks` but `@crowdsignal/blocks` **must not** depend on `@crowdsignal/block-edito`.

## Block architecture

Our blocks are exclusively [dynamic](https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/creating-dynamic-blocks/) with the added caveat they're always stored on our backend and rendered as a frontend app.  

The advantages of such approach are:

- It gives us maximum flexibility and consistency in terms of being able to serve the block anywhere and it working/feeling the same.
- Minimal overhead for implementing our block inside other services or plugins.

## Creating new blocks

Each new block goes into its own directory named after it in the package root. See [@crowdsignal/block-editor](../block-editor) for guidelines on block naming.  

It's important for the user-facing block implementation to not rely on any editor dependencies - like state or components.  
It's also a good idea to break down blocks into smaller shared block components that can then also be used to build the editor UI for the block. Take a look at [TextQuestion](./src/text-question/index.js) and [EditTextQuestion](../block-editor/src/text-question/edit.js) for a relatively simple example.

## Block components

Because of their unique nature, blocks **must not** be built using external component libraries such as `@crowdsignal/components` or `@wordpress/components`.  
Specifically, some of such components might come with very explicit styles which would make it difficult for them to be styled using the block editor. We also don't want to be forced into having to provide a separate, external stylesheet for our bundles to work.

That said, it's still a good idea for different blocks to share components where applicable to keep a consistent UI and our codebase concise. There are two rules to keep in mind:

- All shared components used by our blocks should go into the `components/` directory of this package.
- The package should export these shared components so they can be used to replicate the same interface in the editor version of the block.
