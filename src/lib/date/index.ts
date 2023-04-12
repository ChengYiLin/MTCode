import dayjs from 'dayjs';

/**
 * Format the given date based on the provided format.
 *
 * @param {Date} value - The date value to be formatted.
 * @param {string} formate - The format string to format the date value.
 *
 * @returns {string} The formatted date string.
 */
export function dateFormate(value: Date, formate: string): string {
  if (!dayjs(value).isValid()) {
    return '--';
  }

  return dayjs(value).format(formate);
}
