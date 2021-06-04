export const validateEmail = (input) => {
  const regex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  let m = regex.exec(input);
  if (m !== null) {
    // The result can be accessed through the `m`-variable.
    return true;
  }
  return false;
};
