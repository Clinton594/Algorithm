const sum = (a) => a.reduce((x, y) => x + y);

const fairindex = (A, B) => {
  let indexes = 0;

  let leftA = 0;
  let rightA = sum(A.slice(0));
  let leftB = 0;
  let rightB = sum(B.slice(0));

  for (let i = 0; i < A.length; i++) {
    leftA += A[i];
    rightA -= A[i];
    leftB += B[i];
    rightB -= B[i];
    if (leftA === rightA && leftB === rightB && leftA === rightB) indexes++;
  }
  return indexes;
};

const result = fairindex([0, 4, -1, 0, 3], [0, -2, 5, 0, 3]);
console.log(result);
