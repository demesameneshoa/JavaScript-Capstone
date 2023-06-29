/**
 * @jest-environment jsdom
 */

import getCount from './reservation-counter.js';

describe('Reservation Count Test', () => {
  // testing with no reservations
  test('No reserations', () => {
    document.body.innerHTML = `
    <ul class="reservation-box"> </ul>`;
    expect(getCount()).toBe(0);
  });

  // testing with 3 reservations
  test('Three reserations', () => {
    document.body.innerHTML = `
    <ul class="reservation-box"> 
    <li class="tag">Reservation1</li>
    <li class="tag">Reservation2</li>
    <li class="tag">Reservation3</li>
    </ul>`;
    expect(getCount()).toBe(3);
  });

  test('Three reserations', () => {
    document.body.innerHTML = `
    <ul class="creservation-box"> 
    <li class="tag">Reservation1</li>
    <li class="tag">Reservation2</li>
    <li class="tag">Reservation3</li>
    </ul>`;
    expect(getCount()).toBe(3);
  });

  test('Ten reserations', () => {
    let reservationHTML = '<ul class="reservation-box">';
    for (let i = 0; i < 10; i += 1) {
      reservationHTML += `<li class="tag">Reservation${i + 1}</li>`;
    }
    reservationHTML += '</ul>';
    document.body.innerHTML = reservationHTML;
    expect(getCount()).toBe(10);
  });

  test('Error Too Many Reservation Above 30', () => {
    let reservationHTML = '<ul class="reservation-box">';
    for (let i = 0; i < 40; i += 1) {
      reservationHTML += `<li class="tag">Reservation${i + 1}</li>`;
    }
    reservationHTML += '</ul>';
    document.body.innerHTML = reservationHTML;
    expect(getCount()).toBe('Error:too many reservations');
  });
});
