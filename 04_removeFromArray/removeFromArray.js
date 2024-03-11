const removeFromArray = function(array, ...del) {
   const resultArr = [];
      for (const elem of array) {
         if (!del.includes(elem)) {
            resultArr.push(elem);
         }
      }
   return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
