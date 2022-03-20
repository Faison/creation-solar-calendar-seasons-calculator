import { getSeasonsFromStartingSpring } from './src/index.js';
import { printSeasons, printSeasonsForCSV } from './src/output.js';
import { validateArgs } from './src/validation.js';

const { errors, values } = validateArgs(...(process.argv.slice(2)));

if (errors.length > 0) {
  errors.map((error) => console.error(`Error: ${error}`));
  process.exit(1);
}

const { num, startingSpring, output } = values;

const seasons = getSeasonsFromStartingSpring(num, startingSpring);

switch (output) {
  case 'default':
    printSeasons(seasons);
    break;
  case 'csv':
    printSeasonsForCSV(seasons);
    break;
}
