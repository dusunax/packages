/** Function to get option value from command line arguments ⌨️ */
export const getOptionCLI = (option: string): string | null => {
  const optionIndex = process.argv.indexOf(`--${option}`);
  if (optionIndex !== -1 && process.argv[optionIndex + 1]) {
    return process.argv[optionIndex + 1];
  }
  return null;
};
