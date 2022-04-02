// const Thermostat = require('../thermostat');
import Thermostat from '../thermostat.js';
// import WeatherApi from '../weather.js';

describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  });

  test('initial temperature is 20 degrees', () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  test('increment temperature by 1', () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  test('decrease temperature by 1', () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  test('checks if the power sawing mode is on', () => {
    for (let i = 0; i <= 10; i++) thermostat.up();
    thermostat.setPowerSawingMode(true);
    expect(thermostat.getTemperature()).toBe(25);
  });
  test('checks if the power sawing mode is off', () => {
    thermostat.setPowerSawingMode(false);
    for (let i = 0; i <= 10; i++) thermostat.up();
    expect(thermostat.getTemperature()).toBe(31);
  });

  test('temperature can not to go above 32 degrees', () => {
    thermostat.setPowerSawingMode(false);
    for (let i = 0; i <= 15; i++) thermostat.up();

    expect(thermostat.getTemperature()).toBe(32);
  });

  test('temperature can not go below 10 degrees', () => {
    for (let i = 0; i < 16; i++) thermostat.down();
    expect(thermostat.getTemperature()).toBe(10);
  });

  test('resets to the base temperature', () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toBe(20);
  });

  test('checks medium energy usage', () => {
    expect(thermostat.energyUsage()).toBe('Medium usage!');
  });

  test('checks high energy usage', () => {
    thermostat.setPowerSawingMode(false);
    for (let i = 0; i <= 50; i++) thermostat.up();
    expect(thermostat.energyUsage()).toBe('High usage!');
  });

  test('checks high energy usage', () => {
    thermostat.setPowerSawingMode(false);
    for (let i = 0; i <= 10; i++) thermostat.down();
    expect(thermostat.energyUsage()).toBe('Low usage!');
  });

  test('returns the weather for a given city', () => {
    const weather = { fetchWeatherApi: () => 11 };
    const thermostat = new Thermostat(weather);
    thermostat.setCity('London', () => {});
    expect(thermostat.getTemperature()).toBe(11);
  });
});
