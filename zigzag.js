/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
  var convert = function(s, numRows) {

      if (numRows === 1) {
        return s;
      }

      let rows = [];
      let currentRow = 0;
      let reverse = false;
      let result = "";
    
      for (let num = 0; num < numRows; num++) {
        rows[num] = [];
      }
    
      for (let num = 0; num < s.length; num++) {
        rows[currentRow].push(s[num]);
        if (reverse === false) {
          currentRow++;
        } else {
          currentRow--;
        }
    
        if (currentRow === numRows - 1 || currentRow === 0) {
          reverse = !reverse;
        }
      }
    
      rows.forEach((row) => {
        result += row.join("");
      });
  
      return result;
 };

console.log(convert("PAYPALISHIRING", 4));
console.log(convert("PINALSIGYAHRPI", 5));