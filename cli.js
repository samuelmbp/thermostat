const Thermostat = require('./thermostat');
const readline = require('readline');

const thermostat = new Thermostat();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const prompt = () => {
  rl.question('Enter command > ', (userInput) => {
    thermostat.setPowerSawingMode(true);
    if (userInput === 'up') {
      thermostat.up();
      console.log(`Temperature is ${thermostat.getTemperature()}`);
    } else if (userInput === 'down') {
      thermostat.down();
      console.log(`Temperature is ${thermostat.getTemperature()}`);
    } else if (userInput === 'psm on' && thermostat.getTemperature() > 25) {
      console.log(`Temperature is 25 (maximum reached)`);
    } else if (userInput === 'psm off') {
      thermostat.setPowerSawingMode(false);
    }
  });
};

setInterval(() => {
  prompt();
}, 1000);
