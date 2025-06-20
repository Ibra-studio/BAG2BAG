/**
 * Formats a date string into a more readable format.
 * Example: "January 1, 2023" (output may vary based on locale)
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string, or "Date Inconnue" / "Date Invalide".
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'Date inconnue';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Date invalide';

  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString(undefined, options); // undefined uses the runtime's default locale
};

/**
 * Formats a date string into a short month and year format.
 * Example: "Jan 2023"
 * @param {string} dateString - The date string to format.
 * @returns {string} The formatted date string, or "Date Inconnue" / "Date Invalide".
 */
export const formatMonthYear = (dateString) => {
  if (!dateString) return 'Date inconnue';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Date invalide';

  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
};

// Add other date utility functions here if needed in the future.
