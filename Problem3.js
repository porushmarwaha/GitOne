const isStringMapable = (str1, str2) => {
  const set1 = new Set();
  const set2 = new Set();

  for (let i = 0; i < str1.length; i++) {
    set1.add(str1[i]);
    set2.add(str2[i]);
  }
  if (set2.size !== set1.size) return false;

  return true;
};
const str3 = "abc";
const str4 = "bcd";
console.log(isStringMapable(str3, str4));
