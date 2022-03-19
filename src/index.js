const HOUR_IN_MS = 3600000
const DAY_IN_MS = 24 * HOUR_IN_MS;
const WEEK_IN_MS = 7 * DAY_IN_MS;
const SEASON_IN_MS = 13 * WEEK_IN_MS;
const YEAR_IN_MS = 4 * SEASON_IN_MS;
const JUBILEE_IN_MS = 7 * YEAR_IN_MS;
const DATES_HEADER = '|      |   Spring   |   Summer   |    Fall    |   Winter   |';

const dateFormat = new Intl.DateTimeFormat('en-US', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'America/Chicago' });

/**
 * @typedef {object} Season
 * @property {Date} spring - .
 * @property {Date} summer - .
 * @property {Date} fall - .
 * @property {Date} winter - .
 */

/**
 * .
 *
 * @param {number} num - .
 * @param {Date} startingSpring - .
 * @returns {Date[]} .
 */
const getManySprings = (num, startingSpring) => {
  const springs = [startingSpring];

  for (let i = 1; i < num; i++) {
    springs.push(new Date(springs[i - 1].getTime() + YEAR_IN_MS));
  }

  return springs;
}

/**
 * .
 *
 * @param {Date} startDate - .
 * @returns {Season} .
 */
const getSeasonFromSpring = (startDate) => {
  const season = {};

  season.spring = new Date(startDate.getTime());
  season.summer = new Date(season.spring.getTime() + SEASON_IN_MS);
  season.fall = new Date(season.summer.getTime() + SEASON_IN_MS);
  season.winter = new Date(season.fall.getTime() + SEASON_IN_MS);

  return season;
};

/**
 * .
 *
 * @param {Date[]} springDates 
 * @returns {Season[]} .
 */
const getSeasonsForSprings = (springDates) => springDates.map(getSeasonFromSpring);

/**
 * .
 *
 * @param {number} num - .
 * @param {Date}   startingSpring - .
 * @returns {Season[]} .
 */
const getSeasonsFromStartingSpring = (num, startingSpring) => {
  const springs = getManySprings(num, startingSpring)
  return getSeasonsForSprings(springs);
}

/**
 * .
 *
 * @param {Season} season - .
 * @returns {string} .
 */
const getSeasonString = (season, separator) => [
  dateFormat.format(season.spring),
  dateFormat.format(season.summer),
  dateFormat.format(season.fall),
  dateFormat.format(season.winter),
].join(separator);

/**
 * .
 *
 * @param {Season[]} seasons - .
 * @returns {string[]} .
 */
const getSeasonStrings = (seasons, separator) => seasons.map((season) => getSeasonString(season, separator));

const padLeft = (amount, str) => {
  const padAmount = amount - str.length;
  const pad = padAmount > 0 ? new Array(padAmount).fill(' ').join('') : '';
  return `${pad}${str}`;
}

/**
 * .
 *
 * @param {number} num            - .
 * @param {Date}   startingSpring - .
 * @returns {string[]} .
 */
const getSeasonStringsFromStartingSpring = (num, startingSpring, separator) => {
  const seasons = getSeasonsFromStartingSpring(num, startingSpring)
  return getSeasonStrings(seasons, separator);
}

/**
 * .
 *
 * @param {number} num - .
 * @param {Date} startingSpring - .
 */
export const printSeasonsFromSpring = (num, startingSpring) => {
  const seasonStrings = getSeasonStringsFromStartingSpring(num, startingSpring, ' | ');

  console.log(DATES_HEADER);
  seasonStrings.map((str, i) => console.log(`| ${padLeft(4, `${i + 1}`)} | ${str} |`));
}

/**
 * .
 *
 * @param {number} num - .
 * @param {Date} startingSpring - .
 */
export const printSeasonsFromSpringForCSV = (num, startingSpring) => {
  const header = ['Spring', 'Summer', 'Fall', 'Winter'].join(',');
  const seasonStrings = getSeasonStringsFromStartingSpring(num, startingSpring, ',');

  console.log(header);
  seasonStrings.map((str) => console.log(str));
}
