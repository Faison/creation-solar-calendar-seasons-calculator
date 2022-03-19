const VALID_OUTPUTS = ['default', 'csv'];
/**
 * Checks if a date object is valid.
 *
 * @param {Date} d - The date object to validate.
 * @returns {boolean} True if valid, false if not.
 */
export const isValidDate = (d) => d instanceof Date && !isNaN(d);

/**
 * .
 *
 * @param {string}    num         - .
 * @param {string}    startString - .
 * @param  {string[]} args        - .
 * @returns {object} .
 */
export const validateArgs = (num, startString, ...args) => {
  const results = {
    errors: [],
    values: {}
  };

  const parsedNum = parseInt(num, 10);

  if (!Number.isInteger(parsedNum)) {
    results.errors.push('The first argument must be a positive integer greater than 0');
  }

  // Always set the time of the start date to noon, to avoid having the day roll back due to daylight savings time.
  const date = new Date(`${startString} 12:00`);

  if (!isValidDate(date)) {
    results.errors.push('The second argument must be a valid date string (MM/DD/YYYY)');
  }

  let output = 'default';

  args.forEach((arg) => {
    if (arg.indexOf('--output=') === 0) {
      const outputArg = arg.split('--output=')[1];

      if (!VALID_OUTPUTS.includes(outputArg)) {
        results.errors.push(`"--output" must be one of the following: ${VALID_OUTPUTS.join(', ')}`);
        return;
      }

      output = outputArg;
    }
  })

  if (results.errors.length === 0) {
    results.values = {
      output,
      num: parsedNum,
      startingSpring: date
    };
  }

  return results;
};
