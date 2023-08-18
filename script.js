module.exports = {
  sort: (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      // console.log(i);
      for (let j = 0; j < arr.length - 1 - i; j++) {
        // console.log(j);
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  },
  maxSubArray: (arr, numb) => {
    if (arr.length < numb) {
      return null;
    }

    let sum = 0;
    let temp = 0;

    for (let i = 0; i < numb; i++) {
      sum += arr[i];
    }

    temp = sum;

    for (let i = numb; i < arr.length; i++) {
      temp = temp - arr[i - numb] + arr[i];
      sum = Math.max(temp, sum);
    }

    return sum;
  },
  sumEvenObj: (obj) => {
    let sum = 0;
    for (const key in obj) {
      if (typeof obj[key] === "object") {
        sum += this.sumEvenObj(obj[key]);
      } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
        sum += obj[key];
      }
    }
    return sum;
  },
};
