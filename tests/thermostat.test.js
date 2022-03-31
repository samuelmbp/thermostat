const Thermostat = require('../thermostat');

describe('Thermostat', () => {
  const thermostat = new Thermostat();

  test('initial temperature is 20 degrees', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  test('increment temperature by 1', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  test('decrease temperature by 1', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(20);
  })
});
