# Numd

  Склонение слов после числительных

  * 1 рубль
  * 2 рубля
  * 5 рублей

## Установка

  Браузер:

```html
<script src="https://cdn.rawgit.com/andrepolischuk/numd/2.0.0/numd.min.js"></script>
```

  Component(1):

```sh
$ component install andrepolischuk/numd
```

  Npm:

```sh
$ npm install numd
```

## API

### numd(num, nominative, genitiveSingular, genitivePlural)

  Получаем слово в нужном склонении

```js
numd(14, 'рубль', 'рубля', 'рублей');
// 14 рублей
```

### numd(nominative, genitiveSingular, genitivePlural)

  Получаем функцию склонения

```js
var rur = numd('рубль', 'рубля', 'рублей');

rur(22);
// 22 рубля

rur(51);
// 51 рубль
```

## License

  MIT
