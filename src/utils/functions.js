export function trunc(str, length) {
  if (typeof str !== 'string' && typeof length !== 'number') {
    return 'Error';
  }

  if (str.length > length) {
    str = str.slice(length) + '...';
  }
  return str;
}
