const HOUR_IN_MS = 3600000
const DAY_IN_MS = 24 * HOUR_IN_MS;
const WEEK_IN_MS = 7 * DAY_IN_MS;
const SEASON_IN_MS = 13 * WEEK_IN_MS;
const YEAR_IN_MS = 4 * SEASON_IN_MS;

/**
 * @typedef {object} Season
 * @property {Date} spring - The start date of spring.
 * @property {Date} summer - The start date of summer.
 * @property {Date} fall   - The start date of fall.
 * @property {Date} winter - The start date of winter.
 */

/**
 * Calculates the start of spring from the provided date for the number of years provided.
 *
 * @param {number} num          - The number of years to calculate.
 * @param {Date} startingSpring - The start of spring to calculate from.
 * @returns {Date[]} An array of spring start dates.
 */
const getManySprings = (num, startingSpring) => {
  const springs = [startingSpring];

  for (let i = 1; i < num; i++) {
    springs.push(new Date(springs[i - 1].getTime() + YEAR_IN_MS));
  }

  return springs;
}

/**
 * Takes a starting spring date and calculates the rest of the seasons; start dates.
 *
 * @param {Date} startDate - The start of spring to calculate from.
 * @returns {Season} The start of all seasons, starting with the provided start date.
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
 * Calculate the season start dates for a number of years starting from a start of spring date.
 *
 * @param {number} num            - The number of years to calculate.
 * @param {Date}   startingSpring - The start of spring to calculate from.
 * @returns {Season[]} An array of seasonal start dates.
 */
export const getSeasonsFromStartingSpring = (num, startingSpring) => {
  const springs = getManySprings(num, startingSpring)
  return springs.map(getSeasonFromSpring);
}
