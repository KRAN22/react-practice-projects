function arr(n) {
  let s = 0;
  let count = 0;
  while (n > 0) {
    s = s * 10 + (n % 2);
    if (n % 2 === 1) {
      count++;
    }
    n = parseInt(n / 2);
  }
  return count - 1;
}
console.log(arr(6));
function reverse(n) {
  var s = 0;
  while (n > 0) {
    s = s * 10 + (n % 10);
    n = parseInt(n / 10);
  }
  return s;
}
console.log(reverse(arr(13)));
