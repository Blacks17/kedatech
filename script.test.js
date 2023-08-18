const { sort, maxSubArray, sumEvenObj } = require("./script");

// Q
const arr1 = [1, 2, 4, 3, 5, 3, 2, 1];

const arr2 = [100, 200, 300, 400];
const arr3 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const arr4 = [-3, 4, 0, -2, 6, -1];
const numb1 = 2;
const numb2 = 4;
const numb3 = 2;

const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const input2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 4 }, ee: "car" },
};

// A
const res1 = [5, 4, 3, 3, 2, 2, 1, 1];
const res2 = 700;
const res3 = 39;
const res4 = 5;
const res5 = 6;
const res6 = 12;

describe("sort test", () => {
  it("Should sort correctly  ", () => {
    const result = sort(arr1);
    expect(result).toStrictEqual(res1);
  });
});

describe("maxSum test", () => {
  it("Should sum correctly  ", () => {
    expect(maxSubArray(arr2, numb1)).toBe(res2);
    expect(maxSubArray(arr3, numb2)).toBe(res3);
    expect(maxSubArray(arr4, numb3)).toBe(res4);
  });
});

describe("recursion test", () => {
  it("Should recurs correctly ", () => {
    expect(sumEvenObj(input1)).toBe(res5);
  });
});
