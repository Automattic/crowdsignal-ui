# @crowdsignal/block-editor

This package contains the editor interface for all of our blocks. For public facing UI, see [@crowdsignal/blocks](../blocks).

## Block naming

All of our blocks are registered under `crowdsignal-forms` namespace, so the complete block name should look something like this: `crowdsignal-forms/my-block`.

In general, the block registered name should match it's display name closely. If a block happens to fall within a certain category, it's good to signify that using an appropriate suffix. For example:

- `-question`
- `-answer`
- `-input`
- etc.

## Block exports

Each `@crowdsignal/block-editor` block must export an object with the following properties:

- **name**: The name to register and reference the block with. See _Block naming_.
- **settings**: Block settings.
