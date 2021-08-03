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
numd(14, 'метр', 'метра', 'метров', {withNumber: false}); // метров
```

## API

### numd([num, ]word[, singular], plural[, options])

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

const meters = numd('метр', 'метра', 'метров', {withNumber: false});
rur(4); // метра
rur(55); // метров
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

#### options

Type: `object`

Options object. Care about passing the third parameter `plural` when passing the options:

```js
import numd from 'numd';

numd(2, 'dollar', 'dollars', null, {withNumber: false}); // dollars
numd(14, 'рубль', 'рубля', 'рублей', {withNumber: false}); // рублей
```

#### options.withNumber

Type: `boolean`

Flag indicating whether the number should be included in the result string

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/numd
[travis-image]: https://travis-ci.org/andrepolischuk/numd.svg?branch=master
