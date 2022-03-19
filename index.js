import { printSeasonsFromSpring, printSeasonsFromSpringForCSV } from './src/index.js';
import { validateArgs } from './src/validation.js';

const { errors, values } = validateArgs(...(process.argv.slice(2)));

if (errors.length > 0) {
  errors.map((error) => console.error(`Error: ${error}`));
  process.exit(1);
}

const { num, startingSpring, output } = values;

switch (output) {
  case 'default':
    printSeasonsFromSpring(num, startingSpring);
    break;
  case 'csv':
    printSeasonsFromSpringForCSV(num, startingSpring);
    break;
}
