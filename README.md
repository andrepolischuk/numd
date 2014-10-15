# Numd

  Declination russian numerals

  * 1 рубль
  * 2 рубля
  * 5 рублей

## Instalation

  In browser:

```html
<script src="/static/js/numd.min.js"></script>
```

  In node.js

```sh
npm install numd
```

```js
var numd = require('numd');
```


## API

### numd(values)
  
  Add some values

```js
numd({
  'usd': ['доллар', 'доллара', 'долларов'],
  'gbp': ['фунт', 'фунта', 'фунтов']
});
```

### numd(name, nominative, genitiveSingular, genitivePlural)
  
  Add one value

```js
numd('rub', 'рубль', 'рубля', 'рублей');
```

### numd.word(num) or numd(num, name)

  Get saved value by number

  * `num` - number
  * `name` - declination variant name (example, 'usd')

```js
numd.rub(2);
// 2 рубля

numd(5, 'rub');
// 5 рублей
```

### numd(num, nominative, genitiveSingular, genitivePlural)

  Get not saved value

```js
numd(14, 'рубль', 'рубля', 'рублей');
// 14 рублей
```
