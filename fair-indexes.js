const sum = (a) => a.length && a.reduce((x, y) => x + y);

const fairindex = (A, B) => {
  let indexes = 0;

  for (let i = 0; i < A.length - 1; i++) {
    const leftA = A.slice(0, i + 1);
    const rightA = A.slice(i + 1);

    const leftB = B.slice(0, i + 1);
    const rightB = B.slice(i + 1);

    if (sum(leftA) === sum(rightA) && sum(leftB) === sum(rightB) && sum(leftA) === sum(rightB)) {
      indexes++;
    }
  }
  return indexes;
};

const result = fairindex([0, 4, -1, 0, 3], [0, -2, 5, 0, 3]);
console.log(result);
