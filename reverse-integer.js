/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
  let str = x.toString();

  let newStr;
  for (let i=0;i<str.length;i++) {
      if (str[i] === "-") {
          newStr += str[i]
      }
  }
  for (let x=str.length - 1; x >= 0; x--) {
      if (str[x] !== "-") {
          newStr += str[x]
      }
  }
  return newStr;
};

console.log(reverse(-123))