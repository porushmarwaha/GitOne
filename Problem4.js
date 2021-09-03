let test = (first, Second) => {
  let res = [];

  for (let i = 0; i < first.length; i++)
    if (i % 2 == 0) res.push(first[i]);
    else res.push(Second[i]);

  for (let i = first.length - 1; i >= 0; i--)
    if (i % 2 !== 0) res.push(first[i]);
    else res.push(Second[i]);

  return res;
};
let x = [1, 2, 3, 4, 5];
let y = [6, 7, 8, 9, 10];
console.log(test(y, x));
