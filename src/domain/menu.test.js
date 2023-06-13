import {Menu} from './menu.js';

const menu = new Menu(1, 'pescado', 'tarta', 'gelatina',
    '100', '100', '50');

test('primary dish should be "pescado"', () => {
  expect(menu.toStringPrDish()).toBe('pescado');
});

test('secondary dish should be "tarta"', () => {
  expect(menu.toStringAltDish()).toBe('tarta');
});

test('dessert should be "gelatina"', () => {
  expect(menu.toStringDess()).toBe('gelatina');
});

test('primary dish price should be "100"', () => {
  expect(menu.toString$Pri()).toBe(100);
});

test('secondary dish price should be "100"', () => {
  expect(menu.toString$Alt()).toBe(100);
});

test('dessert price should be "50"', () => {
  expect(menu.toString$Dess()).toBe(50);
});
