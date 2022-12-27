function squareArea(n) {
  return n * n;
}

function triangleArea(h, a) {
  return (1 / 2) * h * a;
}

function circleArea(radius) {
  return radius * radius * 3.14;
}

function isPrime(n) {
  if (n < 2) {
    return false;
  } else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        return false;
      }
    }
    return true;
  }
}

// for (let i = 0; i < 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }

// excercises

// Nguyễn Văn Hoàng Nhân  => "N+g+u+y....."
const hisName = "Nguyễn Văn Hoàng Nhân";
console.log(hisName.split("").join("+").split(" ").join(""));

// to ASC II code
// Nguyễn Văn Hoàng Nhân  => "78 103 117 ..."
console.log(
  hisName
    .split("")
    .map((character, index) => {
      return character.charCodeAt(0);
    })
    .join(" ")
);

// "0123456789999" => "1234567890000"
const str = "0123456789999";
console.log(
  str
    .split("")
    .map((num) => {
      return (Number.parseInt(num) + 1) % 10;
    })
    .join(" ")
);

// [1,2,3,4,5,6,7,8,9] => [2,4,6,8,10,12,14,16,18]
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.map((element) => element * 2));

// remove all odd number in array
// [22, 1,13,9,2,14,3,45,5,6,48,8,9] => [22,4,14,48,8]
const arr2 = [22, 1, 13, 9, 2, 14, 3, 45, 5, 6, 48, 8, 9];
console.log(arr2.filter((n) => n % 2 === 0));
