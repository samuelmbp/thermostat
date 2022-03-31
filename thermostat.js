const BASE_TEMP = 20;

class Thermostat {
  constructor() {
    this.temperature = BASE_TEMP;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    ++this.temperature;
  }
}

module.exports = Thermostat;
