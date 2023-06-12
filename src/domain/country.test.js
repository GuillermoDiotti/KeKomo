/* eslint-disable max-len */

import {Country} from './country.js';

test('country name Uruguay', () => {
  const aCountry = new Country('Uruguay');
  expect(aCountry.getNombre()).toBe('Uruguay');
});

import {Menu, Sistema, Reserva} from './classes.js';


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


const reserva = new Reserva('1/10/2023', 'Juan González', '$450',
    'selected dishes');

test('reserve date should be "1/10/2023"', () => {
  expect(reserva.toStringDate()).toBe('1/10/2023');
});

test('reserve user should be "Juan González"', () => {
  expect(reserva.toStringUser()).toBe('Juan González');
});

test('reserve price should be "$450"', () => {
  expect(reserva.toStringPrice()).toBe('$450');
});

test('reserve description should be "selected dishes"', () => {
  expect(reserva.toStringDesc()).toBe('selected dishes');
});


const sis = new Sistema();
sis.addMenu(menu);
sis.addReserva(reserva);

test('menu list should be greater than 1', () => {
  expect(sis.getMenu().length).toBeGreaterThanOrEqual(1);
});

test('reserve list should be greater than 1', () => {
  expect(sis.getReserva().length).toBeGreaterThanOrEqual(1);
});

