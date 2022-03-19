/**
 * Checks if a date object is valid.
 *
 * @param {Date} d - The date object to validate.
 * @returns {boolean} True if valid, false if not.
 */
export const isValidDate = (d) => d instanceof Date && !isNaN(d);

export const validateArgs = (num, startingSpringString, ...args) => {
  const results = {
    errors: [],
    values: {}
  };

  const parsedNum = parseInt(num, 10);

  if (!Number.isInteger(parsedNum)) {
    results.errors.push('The first argument must be a positive integer greater than 0');
  }

  const date = new Date(`${startingSpringString} 12:00`);

  if (!isValidDate(date)) {
    results.errors.push('The second argument must be a valid date string (MM/DD/YYYY)');
  }

  if (results.errors.length === 0) {
    results.values = {
      num: parsedNum,
      startingSpring: date
    };
  }

  return results;
};
