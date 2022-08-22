export function trunc(str, length) {
  if (typeof str !== 'string' && typeof length !== 'number') {
    return 'Error';
  }

  if (str.length > length) {
    return str.slice(0, length) + '...';
  }
  return str;
}

export const mapReverse = (array, callback) => {
  if (array.length === 0) {
    return [];
  }

  const resultArray = [];
  for (let index = array.length - 1; index >= 0; index--) {
    resultArray.push(callback(array[index], index, array));
  }

  return resultArray;
};

export function sleeper(ms) {
  return function (x) {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
