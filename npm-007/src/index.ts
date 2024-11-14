export const COLOR_CODES = {
  grey: "\x1b[90m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  purple: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",
  reset: "\x1b[0m",
} as const;

export type ColorCodeKeys = keyof typeof COLOR_CODES;
export type ColorCode = (typeof COLOR_CODES)[keyof typeof COLOR_CODES];
export type StatusCodeRange = 100 | 200 | 300 | 400 | 500;

const statusColorSettings: Record<StatusCodeRange, ColorCode> = {
  100: COLOR_CODES.grey,
  200: COLOR_CODES.green,
  300: COLOR_CODES.cyan,
  400: COLOR_CODES.red,
  500: COLOR_CODES.red,
};

/**
 * Returns the colored status code string.
 * @param statusCode - The status code to color.
 * @returns The colored status code string.
 */
export const coloredStatusCode = (statusCode: number) => {
  let colorKey: ColorCode = COLOR_CODES.reset;
  const statusCodeRange = Object.keys(
    statusColorSettings
  ) as unknown as ColorCodeKeys[];
  const targetKey = statusCodeRange.find((key) => {
    const keyNum = parseInt(key);
    return statusCode >= keyNum && statusCode < keyNum + 100;
  });

  if (targetKey) {
    colorKey = statusColorSettings[targetKey as unknown as StatusCodeRange];
  } else {
    colorKey = COLOR_CODES.reset;
  }

  return `${colorKey}${statusCode}${COLOR_CODES.reset}`;
};

/**
 * Changes the color of a status code.
 * @param statusCode - The status code to change the color of.
 * @param color - The color to change the status code to.
 */
export function changeStatusColorSettings(
  statusCode: StatusCodeRange,
  color: ColorCodeKeys
) {
  if (!statusCode || !COLOR_CODES[color])
    throw new Error("Invalid status code or color");
  if (statusCode < 100 || statusCode > 599)
    throw new Error(
      `Invalid status code range: ${statusCode}\nPlease use 100-599`
    );

  statusColorSettings[statusCode] = COLOR_CODES[color];
}
