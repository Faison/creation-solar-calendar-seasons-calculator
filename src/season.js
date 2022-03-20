const HOUR_IN_MS = 3600000
const DAY_IN_MS = 24 * HOUR_IN_MS;
const WEEK_IN_MS = 7 * DAY_IN_MS;
const SEASON_IN_MS = 13 * WEEK_IN_MS;
const YEAR_IN_MS = 4 * SEASON_IN_MS;
const JUBILEE_IN_MS = 7 * YEAR_IN_MS;

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
export const getSeasonsFromStartingSpring = (num, startingSpring) => {
  const springs = getManySprings(num, startingSpring)
  return getSeasonsForSprings(springs);
}
