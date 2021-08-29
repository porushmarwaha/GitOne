let resArr = [];

function arrFlat(arr1) {
  for (let a of arr1) {
    if (!Array.isArray(a)) resArr.push(a);
    else arrFlat(a);
  }
}
let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
arrFlat(arr);
for (let i of resArr) console.log(i);
