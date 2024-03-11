const repeatString = function (string, rep) {
  let result = "";
  if (rep < 0) {
    result = "ERROR";
  } else if (string.length > 0) {
    while (rep > 0) {
      result += string;
      rep--;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
