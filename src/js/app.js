// TODO: write your code here
import { Magician } from './characterClasses';

const mag = new Magician('Dambldor');

for (const prop in mag) {
  if (Object.prototype.hasOwnProperty.call(mag, prop)) {
    const item = mag[prop];
    console.log(`Magician ${prop} is ${item}`);
  }
}

console.log('\n');

mag.powerMode = 'on';
console.log(mag.powerMode);
mag.makeAttack();
mag.makeAttack();
mag.makeAttack();
mag.makeAttack();
console.log(mag.powerMode);


for (const prop in mag) {
  if (Object.prototype.hasOwnProperty.call(mag, prop)) {
    const item = mag[prop];
    console.log(`Magician ${prop} is ${item}`);
  }
}
