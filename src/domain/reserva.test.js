import {Reserva} from './reserva.js';

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
