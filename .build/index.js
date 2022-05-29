let s = "Let's take LeetCode contest";
function reverseWords(s2) {
  s2 = s2.split(" ");
  for (let i = 0; i < s2.length; i++) {
    s2[i] = s2[i].split("").reverse().join("");
  }
  s2 = s2.join(" ");
  return s2;
}
;
console.log(reverseWords(s));
//# sourceMappingURL=index.js.map
