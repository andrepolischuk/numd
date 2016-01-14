# numd [![Build Status][travis-image]][travis-url]

> Pluralize a word

* 1 dollar, 5 dollars
* 1 рубль, 2 рубля, 5 рублей

## Install

```sh
npm install --save numd
```

## Usage

```js
import numd from 'numd';

numd(2, 'dollar', 'dollars'); // 2 dollars
numd(14, 'рубль', 'рубля', 'рублей'); // 14 рублей
```

## API

### numd([num, ]word[, singular], plural)

Return a string if `num` is defined:

```js
numd(1, 'dollar', 'dollars'); // 1 dollar
numd(1, 'рубль', 'рубля', 'рублей'); // 1 рубль
```

otherwise return a function:

```js
const rur = numd('рубль', 'рубля', 'рублей');
rur(4); // 4 рубля
rur(51); // 51 рубль
```

#### num

Type: `number`

Count to determine a word.

#### word

Type: `string`

Word in the nominative singular.

#### singular

Type: `string`

Word in the genitive singular, not used for English words and some other languages.

#### plural

Type: `string`

Word in the plural/genitive plural.

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/numd
[travis-image]: https://travis-ci.org/andrepolischuk/numd.svg?branch=master
