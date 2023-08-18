console.log("heeloo");

// sortir array tanpa menggunakan builtin function javascript

const sort = (arr) => {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

const arr1 = [1, 2, 4, 3, 5, 3, 2, 1];
console.log(sort(arr1));

// fungsi dengan input array of number dan number, temukan jumlah maksimum subarray dengan panjang  array sama dengan number yang sudah ditentukan

const maxSubArray = (arr, numb) => {
  if (numb > arr.length) {
    return null;
  }

  let max = 0;
  let temp = 0;

  for (let i = 0; i < numb; i++) {
    max += arr[i];
  }

  temp = max;

  for (let i = numb; i < arr.length; i++) {
    temp = temp - arr[i - numb] + arr[i];
    max = Math.max(temp, max);
  }

  return max;
};

// maxSum(arr2, numb);

const arr2 = [100, 200, 300, 400];
const arr3 = [1, 4, 2, 10, 23, 3, 1, 0, 20];
const arr4 = [-3, 4, 0, -2, 6, -1];
const numb1 = 2;
const numb2 = 4;
const numb3 = 2;

console.log(maxSubArray(arr2, numb1));
console.log(maxSubArray(arr3, numb2));
console.log(maxSubArray(arr4, numb3));

// buatlah fungsi untuk mendapatkan jumlah semua bilangan genap dalam nested objek

const sumObject = (obj) => {
  let sum = 0;

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      sum += sumObject(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }

  return sum;
};

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

console.log(sumObject(input1));
console.log(sumObject(input2));
