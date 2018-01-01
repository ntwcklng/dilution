# dilution

Calculate the dilution of 2 parts, like 1:2 for a 500ml bottle

## Install

1. Add this module to your dependencies

```bash
yarn add dilution
# or
npm install --save dilution
```

## Usage

```js
const dilution = require('dilution')

console.log(dilution(1, 2, 500)) //=> { part1: '167', part2: '333' }
console.log(dilution(50, 50, 500)) //=> { part1: '250', part2: '250' }
```

## License

MIT - Marvin Mieth
