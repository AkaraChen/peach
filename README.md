# Peach

A few API adapter for some CLI tools.

## Motivation

### All in one

You don't need to install any other dependencies anymore, peach bundle everything you need。

### Delightful default options

Peach coordinates the default options for each library, making their behaviour uniform and more intuitive to the developer.

### Make API looks more elegant

```ts
/* Write this: */
import { confirm } from '@akrc/peach'
if (await confirm('Do you want to reboot your computer?')) {
    /* Some logic */
}

/* Not this */
import prompts from 'prompts'

const result = await prompts({
    type: 'confirm',
    name: 'confirm',
    message: 'Do you want to reboot your computer?'
});

if (result.confirm) {
    /* Some logic */
}
```
