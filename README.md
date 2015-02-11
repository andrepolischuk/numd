# Numd

  Склонение слов после числительных

  * 1 рубль
  * 2 рубля
  * 5 рублей

## Установка

  Браузер:

```html
<script src="https://cdn.rawgit.com/andrepolischuk/numd/1.1.2/dist/numd.min.js"></script>
```

  Component(1):

```sh
$ component install andrepolischuk/numd
```

  Npm:

```sh
$ npm install numd
```

```js
var numd = require('numd');
```

## API

### numd(values)

  Добавление массива значений

```js
numd({
  'usd': ['доллар', 'доллара', 'долларов'],
  'gbp': ['фунт', 'фунта', 'фунтов']
});
```

### numd(name, nominative, genitiveSingular, genitivePlural)

  Добавление одного значения

```js
numd('rub', 'рубль', 'рубля', 'рублей');
```

### numd.word(num) или numd(num, name)

  Получаем слово в нужном склонении

  * `num` - число
  * `name` - индекс склоняемой комбинации (например, 'usd')

```js
numd.rub(2);
// 2 рубля

numd(5, 'rub');
// 5 рублей
```

### numd(num, nominative, genitiveSingular, genitivePlural)

  Получаем слово в нужном склонении без предварительного сохранения комбинации

```js
numd(14, 'рубль', 'рубля', 'рублей');
// 14 рублей
```
