# NirCmd Fluent API

<p>
  <img alt="Version" src="https://img.shields.io/npm/v/nircmd-fluent?style=for-the-badge" />
  
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" />

  <img alt="Open Issues" src="https://img.shields.io/github/issues/jarvisprestidge/nircmd-fluent?style=for-the-badge" />
  
  <img alt="Size" src="https://img.shields.io/bundlephobia/minzip/nircmd-fluent?style=for-the-badge" />

</p>

Description

-   🎉 First class Typescript support
-   ✨ Fluent API to compose commands
-   🌈 Returns the full result
-   0️⃣ Zero dependencies
-   👌 Maps directly to NirCmd API

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [Examples](#examples)
-   [Run Tests](#run-tests)
-   [Author](#author)
-   [Contributing](#contributing)
-   [Support](#show-your-support)

## Install

```bash
yarn add nircmd-fluent
```

```bash
npm install nircmd-fluent
```

## Usage

Commands, actions and additional parameters are chained together via a fluent api (with the aid of type inference for typescript users) and executed with a final `run()` method call.

All commands are executed asynchronously, returning a native node promise that should be awaited.

Commands are composed as you would read them from the [NirCmd command reference](https://nircmd.nirsoft.net/win.html). For example:

```typescript
await NirCmd.win().setsize(300, 200, 1280, 720).title("Notepad").run();
```

Example bringing the window containing the sequence of
characters "Fortnite" to the foreground.

```typescript
import { NirCmd } from "nircmd-fluent";

(async () => {
    let output: string;
    try {
        output = await NirCmd.win().show().ititle("Fortnite").run();
    } catch (error) {
        console.error(`Failed to bring window to foreground: ${output}`);
    }
    console.log(output);
})();
```

## Examples

More examples can be found in the [examples](./examples) directory.

There are example implementations for both [javascript](./examples/javascript/index.js) and [typescript](./examples/typescript/index.ts).

```bash
➜ yarn example
$ ts-node example/index.ts

Example output
```

## Run tests

```bash
yarn test
```

## Author

👤 **Jarvis Prestidge <jarvisprestidge@gmail.com>**

-   Site: <https://jarvisprestidge.io>
-   Twitter: [@jarvisprestidge](https://twitter.com/jarvisprestidge)
-   Github: [@jarvisprestidge](https://github.com/jarvisprestidge)
-   LinkedIn: [@jarvisprestidge](https://linkedin.com/in/jarvisprestidge)

<p>
  <a href="https://twitter.com/jarvisprestidge" target="_blank">
    <img alt="Twitter: jarvisprestidge" src="https://img.shields.io/twitter/follow/jarvisprestidge.svg?style=social" />
  </a>
</p>

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/jarvisprestidge/nircmd-fluent/issues). You can also take a look at the [contributing guide](./CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/jarvisprestidge">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>
