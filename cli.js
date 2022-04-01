const Thermostat = require('./thermostat');
const readline = require('readline');
const { Console } = require('console');

const thermostat = new Thermostat();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = () => {
  rl.question('Enter command > ', (userInput) => {
    if (userInput === 'psm on' && thermostat.getTemperature() >= 25) {
      thermostat.setPowerSawingMode(true);
      console.log(`Temperature is 25 (maximum reached)`);
    } else if (userInput === 'up') {
      thermostat.up();
      console.log(`Temperature is ${thermostat.getTemperature()}`);
    } else if (userInput === 'down') {
      thermostat.down();
      console.log(`Temperature is ${thermostat.getTemperature()}`);
    } else if (userInput === 'psm off') {
      thermostat.setPowerSawingMode(false);
    }
  });
};

setInterval(() => {
  prompt();
}, 2000);
