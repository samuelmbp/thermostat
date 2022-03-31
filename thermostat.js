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

  down() {
    --this.temperature;
  }
}


module.exports = Thermostat;


const thermostat = new Thermostat()
thermostat.up()
console.log(thermostat.getTemperature())
thermostat.down()
console.log(thermostat.getTemperature())
