/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
function reverse(str) {
  let word = "";
  if (str === '' || str.length === 1) return str
  let firstChar = str[0]
  let rest = str.slice(1)

  return reverse(rest) + firstChar
}


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
