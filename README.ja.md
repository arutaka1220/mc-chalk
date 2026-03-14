# mc-chalk

[English version](README.md)

Minecraft Bedrock の書式コード文字列を、Node.js の chalk に近い API で組み立てるための小さなライブラリです。

`chalk.red("text")` や `chalk.bold.yellow("warning")` のように書くと、Minecraft の `§` 書式コード付き文字列を返します。

## インストール

```bash
npm install mc-chalk
```

## 使い方

```ts
import { chalk } from "mc-chalk";

const message = chalk.bold.green("Hello, Bedrock!");
const warning = chalk.bold.red("Warning");
const material = chalk.italic.amethyst("Shard");

console.log(message);
console.log(`${warning}: low durability`);
console.log(material);
```

返り値は通常の `string` です。

```ts
const text: string = chalk.aqua("Water");
```

## チェーン

複数の書式をチェーンして書くことができます。

```ts
chalk.bold.red("Error");
chalk.italic.darkAqua("Info");
chalk.obfuscated.white("Secret");
```

生成される文字列には、左から順に Minecraft の書式コードが連結されます。

```ts
chalk.bold.red("Red!");
// => "§l§cRed!"
```

## 利用可能なスタイル
- `reset`
- `obfuscated`
- `bold`
- `italic`
- `black`
- `darkBlue`
- `darkGreen`
- `darkAqua`
- `darkRed`
- `darkPurple`
- `gold`
- `gray`
- `darkGray`
- `blue`
- `green`
- `aqua`
- `red`
- `lightPurple`
- `yellow`
- `white`
- `minecoinGold`
- `quartz`
- `iron`
- `netherite`
- `redstone`
- `copper`
- `materialGold`
- `emerald`
- `diamond`
- `lapis`
- `amethyst`
- `resin`

## コード例

```ts
import { world } from "@minecraft/server";
import { chalk } from "mc-chalk";

world.sendMessage(chalk.bold.yellow("Server is ready"));
world.sendMessage(`${chalk.red("Alert")}: boss spawned`);
```