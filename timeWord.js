"use strict";
const count = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty one",
  "twenty two",
  "twenty three",
  "twenty four",
  "twenty five",
  "twenty six",
  "twenty seven",
  "twenty eight",
  "twenty nine",
  "thirty",
];
const decimals = [, , "twenty", "thirty", "forty", "fifty"];

function getNumberOfDecades(number) {
  return Math.floor(number / 10);
}

function getRestOfDivisionWith10(number) {
  return number % 10;
}
function addToString(parent, child, space = true) {
  return `${parent}${space ? " " : ""}${child}`;
}
function timeword(str) {
  let output = "";

  if (str === "12:00") return "noon";
  if (str === "00:00") return "midnight";
  const [hourStr, minuteStr] = str.split(":");
  const hour = +hourStr;
  const minute = +minuteStr;
  const decades = getNumberOfDecades(hour);
  const divisionWith10 = getRestOfDivisionWith10(hour);

  if (hour === 0) {
    output = addToString(output, "twelve", false);
  } else if (hour <= 12) {
    output = addToString(output, count[hour], false);
  } else {
    output = addToString(
      output,
      count[(decades - 1) * 10 + divisionWith10 - 2],
      false
    );
  }

  output = addToString(output, minuteCheck(minute), false);
  output = addToString(output, hour >= 12 ? "pm" : "am");
  return output;
}

function minuteCheck(minute) {
  let output = "";
  if (!minute) {
    output += " o'clock";
  } else if (minute < 10) {
    output += " oh " + count[minute];
  } else if (minute < 20 && minute >= 10) {
    output += " " + count[minute];
  } else {
    output += " " + decimals[getNumberOfDecades(minute)];
    const divisionWith10 = getRestOfDivisionWith10(minute);
    if (divisionWith10) {
      output += " " + count[divisionWith10];
    }
  }

  return output;
}
module.exports = timeword;
