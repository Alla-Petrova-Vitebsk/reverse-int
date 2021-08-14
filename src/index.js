 module.exports = function reverse(n) {
     if (n < 0) n *= -1;
     let str = n.toString();
     let arr = str.split('').reverse().join('');
     return (arr);
 }