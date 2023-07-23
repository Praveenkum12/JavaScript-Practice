'use strict';

const airline = 'TAP Air Portugal';
console.log(airline.slice(4, 7));
console.log(airline.slice(-2));
console.log(airline.toUpperCase());
console.log(airline.toLowerCase());
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.includes('Air'));
console.log(airline.split(' '));
console.log(airline.startsWith('T'));
console.log(airline.length);
console.log(airline.padStart(20, '*'));
console.log(airline.padEnd(20, '*'));

const passenger = 'pRAveen';
const passengerLower = passenger.toLowerCase();
const [first, ...others] = [...passengerLower];
console.log([first.toUpperCase(), others].flat().join(''));
