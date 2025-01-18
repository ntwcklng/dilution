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

```ts
import dilution from "dilution";

console.log(dilution({ part1: 1, part2: 2, bottle: 500 })); //=> { part1: '167', part2: '333' }
console.log(dilution({ part1: 50, part2: 50, bottle: 500 })); //=> { part1: '250', part2: '250' }
```

## License

MIT - Marvin Mieth
