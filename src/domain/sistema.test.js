import {Sistema} from './sistema.js';
import {Menu} from './menu.js';
import {Reserva} from './reserva.js';

const menu = new Menu(1, 'pescado', 'tarta', 'gelatina',
    '100', '100', '50');

const reserva = new Reserva('1/10/2023', 'Juan González', '$450',
    'selected dishes');

const sis = new Sistema();
sis.addMenu(menu);
sis.addReserva(reserva);

test('menu list should be greater than 1', () => {
  expect(sis.getMenu().length).toBeGreaterThanOrEqual(1);
});

test('reserve list should be greater than 1', () => {
  expect(sis.getReserva().length).toBeGreaterThanOrEqual(1);
});
