"use strict";

// 1
export function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}