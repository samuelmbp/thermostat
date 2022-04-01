const BASE_TEMP = 20;
const POWER_SAWING_ON_MAX_TEMP = 25;
const POWER_SAWING_OFF_MAX_TEMP = 32;
const MINIMUM_TEMP = 10;

class Thermostat {
  constructor() {
    this.temperature = BASE_TEMP;
    this.mode = true;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    if (this.temperature >= 25 && this.mode === true)
      this.temperature = POWER_SAWING_ON_MAX_TEMP;
    else if (this.temperature === 32 && this.mode === false) {
      this.temperature = POWER_SAWING_OFF_MAX_TEMP;
    } else {
      ++this.temperature;
    }
  }

  down() {
    if (this.temperature <= 10) {
      this.temperature = MINIMUM_TEMP;
    } else {
      --this.temperature;
    }
  }

  setPowerSawingMode(mode) {
    if (typeof mode === 'boolean') {
      return (this.mode = mode);
    }
  }

  reset() {
    this.temperature = BASE_TEMP;
  }

  energyUsage() {
    if (this.temperature <= 17) return 'Low usage!';
    if (this.temperature <= 25) return 'Medium usage!';
    if (this.temperature >= 26) return 'High usage!';
  }
}

module.exports = Thermostat;

// const thermostat = new Thermostat();
// thermostat.up();
// console.log(thermostat.getTemperature());
// thermostat.down();
// console.log(thermostat.getTemperature());
