import test from 'ava';
import numd from './index';

test('return string', t => {
  t.is(numd(1, 'рубль', 'рубля', 'рублей'), '1 рубль');
  t.is(numd(4, 'доллар', 'доллара', 'долларов'), '4 доллара');
  t.is(numd(7, 'франк', 'франка', 'франков'), '7 франков');
  t.is(numd(150.2, 'метр', 'метра', 'метров'), '150.2 метра');
  t.is(numd(-4, 'градус', 'градуса', 'градусов'), '-4 градуса');
  t.is(numd(1, 'ruble', 'rubles'), '1 ruble');
  t.is(numd(4, 'dollar', 'dollars'), '4 dollars');
  t.is(numd(150.2, 'meter', 'meters'), '150.2 meters');
  t.is(numd(-4, 'degree', 'degrees'), '-4 degrees');
});

test('return function', t => {
  t.is(numd('рубль', 'рубля', 'рублей')(1), '1 рубль');
  t.is(numd('градус', 'градуса', 'градусов')(-4), '-4 градуса');
  t.is(numd('ruble', 'rubles')(1), '1 ruble');
  t.is(numd('degree', 'degrees')(-4), '-4 degrees');
});
