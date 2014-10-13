# Numd

  Declination numerals

## Instalation

  Via script tag in page sources:

```html
<script src="/static/js/numd.min.js">
```

## API

### numd.set(name, values)
  
  Add one value

```js
numd.set('rub', ['рубль', 'рубля', 'рублей']);
```

### numd.set(values)
  
  Add value object

```js
numd.set({
  'usd': ['доллар', 'доллара', 'долларов'],
  'gbp': ['фунт', 'фунта', 'фунтов']
});
```

### numd.get(num, word)

  Get saved value by number

* `num` - number
* `word` - declination variant id (например, 'usd')

```js
numd.get(2, 'rub');
// 2 рубля
```