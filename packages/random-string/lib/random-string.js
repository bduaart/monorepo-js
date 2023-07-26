"use strict";

const randomNumber = require("@bduaart/random-number");
const charactersSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

// 1
function randomString(len = 5) {
  const str = [...Array(len)]
      .map((i) =>
          charactersSet.charAt(Math.floor(Math.random() * charactersSet.length))
      )
      .join("");
  return randomNumber(str);
}

// 2
module.exports = randomString;
