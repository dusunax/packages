/** Function to get the current date 📅 */
export const getCurrentDateString = (): string => {
  return new Date().toISOString().slice(0, 10);
};
