const Thermostat = require('../thermostat');

describe('Thermostat', () => {
  const thermostat = new Thermostat();

  test('initial temperature is 20 degrees', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });
});
