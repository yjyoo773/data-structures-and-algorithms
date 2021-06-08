'use strict'

function leftJoin(h1, h2) {
  let result = {};
  for (let i in Object.keys(h1)) {
    if (Object.keys(h1)[i] in h2) {
      result[Object.keys(h1)[i]] = [
        h1[Object.keys(h1)[i]],
        h2[Object.keys(h1)[i]],
      ];
    } else {
      result[Object.keys(h1)[i]] = [h1[Object.keys(h1)[i]], null];
    }
  }
  return result;
}

module.exports = leftJoin;
