/**
 * Output functions.
 */

const HEADER_LABELS = ['Spring', 'Summer', 'Fall', 'Winter'];

const dateFormat = new Intl.DateTimeFormat(
  'en-US',
  {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'America/Chicago'
  }
);

/**
 * .
 *
 * @param {string} str   - .
 * @param {number} width - .
 * @returns {string} .
 */
const centerString = (str, width) => {
  const padLeft = Math.floor((width - str.length) / 2);
  const padRight = width - str.length - padLeft;

  return new Array(padLeft > 0 ? padLeft : 0).fill(' ').join('')
    + str
    + new Array(padRight > 0 ? padRight : 0).fill(' ').join('');
}

/**
 * .
 *
 * @param {string} str    - .
 * @param {number} amount - .
 * @returns .
 */
const padLeft = (str, amount) => {
  const padAmount = amount - str.length;
  const pad = padAmount > 0 ? new Array(padAmount).fill(' ').join('') : '';
  return `${pad}${str}`;
}

/**
 * Formats the season start dates into one continuous string.
 *
 * @param {Season} season - The season to get the date string for.
 * @returns {string} The dates of the seasons in one string.
 */
const getSeasonString = (season, separator) => [
  dateFormat.format(season.spring),
  dateFormat.format(season.summer),
  dateFormat.format(season.fall),
  dateFormat.format(season.winter),
].join(separator);

/**
 * Prints the seasons in the stdout.
 *
 * @param {Season[]} seasons - The seasons to print.
 */
export const printSeasons = (seasons) => {
  const headerString = HEADER_LABELS.map((label) => centerString(label, 12)).join('|');
  const seasonStrings = seasons.map((season) => getSeasonString(season, ' | '));
  console.log(`|      |${headerString}|`);
  seasonStrings.map((str, i) => console.log(`| ${padLeft(`${i + 1}`, 4)} | ${str} |`));
};

/**
 * Prints the seasons in CSV format.
 *
 * @param {Season[]} seasons - The seasons to print to a CSV
 */
export const printSeasonsForCSV = (seasons) => {
  const seasonStrings = seasons.map((season) => getSeasonString(season, ','));
  console.log(HEADER_LABELS.join(','));
  seasonStrings.map((str) => console.log(str));
}
