export const coloredAsciiHello = () => {
  const reset = "\x1b[0m";
  const bright = "\x1b[1m";
  const red = "\x1b[31m";
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const blue = "\x1b[34m";
  const magenta = "\x1b[35m";

  return `
    ${bright}${red}H   H  ${green}EEEEE${yellow}  L${magenta}        L        ${blue}OOO${reset}
    ${bright}${red}H   H  ${green}E      ${yellow}L${magenta}        L       ${blue}O   O${reset}
    ${bright}${red}HHHHH  ${green}EEEE${yellow}   L${magenta}        L       ${blue}O   O${reset}
    ${bright}${red}H   H  ${green}E      ${yellow}L${magenta}        L       ${blue}O   O${reset}
    ${bright}${red}H   H  ${green}EEEEE${yellow}  LLLLL${magenta}    LLLLL    ${blue}OOO${reset}
  `;
};
