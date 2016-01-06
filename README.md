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
var numd = require('numd');
numd(2, 'dollar', 'dollars'); // 2 dollars
numd(14, 'рубль', 'рубля', 'рублей'); // 14 рублей
```

## API

### numd(num, word[, singular], plural)

Return string

```js
numd(1, 'dollar', 'dollars'); // 1 dollar
numd(1, 'рубль', 'рубля', 'рублей'); // 1 рубль
```

### numd(word[, singular], plural)

Return function

```js
var usd = numd('dollar', 'dollars');
var rur = numd('рубль', 'рубля', 'рублей');
usd(22); // 22 dollars
rur(51); // 51 рубль
```

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/numd
[travis-image]: https://travis-ci.org/andrepolischuk/numd.svg?branch=master
