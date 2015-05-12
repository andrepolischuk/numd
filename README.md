# numd [![Build Status](https://travis-ci.org/andrepolischuk/numd.svg?branch=master)](https://travis-ci.org/andrepolischuk/numd)

  > Склонение слов после числительных

  * 1 рубль
  * 2 рубля
  * 5 рублей

## Установка

```sh
$ npm install --save numd
$ component install andrepolischuk/numd
```

## API

### numd(num, nominative, genitiveSingular, genitivePlural)

  Получаем слово в нужном склонении

```js
numd(14, 'рубль', 'рубля', 'рублей'); // 14 рублей
```

### numd(nominative, genitiveSingular, genitivePlural)

  Получаем функцию склонения

```js
var rur = numd('рубль', 'рубля', 'рублей');

rur(22); // 22 рубля
rur(51); // 51 рубль
```

## License

  MIT
