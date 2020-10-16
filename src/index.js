module.exports = function reverse (n) {
  let arr = n.toString().split('');
  
   if (arr[0] === '-') arr = arr.slice(1);
   if (arr[arr.length - 1] === '0') arr = arr.slice(0, arr.length - 1);

   return arr.reverse().join('');
}
