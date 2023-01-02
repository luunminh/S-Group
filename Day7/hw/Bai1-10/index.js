// ********* Bài 1 *********
const arrowFunctionDefinition = () => {
  const result = `
			Arrow function là hàm được định nghĩa bằng ký hiệu => ở đằng sau () thay vì cú pháp function ở đằng trước => để giúp ta viết code ngắn gọn hơn
			Cú pháp: let myFunc = (a,b) => { /// }
	`;

  return result;
};

///////////////////

() => {
  const result = `
			Anonymous function là hàm ẩn danh, thường thì không thể truy cập sau lần tạo đầu tiên
			Cú pháp: 
                + Dạng thường : (function() {...})()  (ko có tên hàm, trong trường hợp này là dùng trong IIFE)
                + Dạng mũi tên: let myFunc = () => {///}
			Thường dùng để làm đối số ở trong hàm khác, trong arrow function hay sử dụng để làm hàm tự gọi ngay lập tức ngay sau khi khai báo
	`;

  return result;
};

// Cho một vài ví dụ về arrow function và anonymous function:

// arrow function
let msg = () => {
  console.log("Im learning JS !!!");
};

// anonymous function : hàm ẩn danh làm đối số trong hàm map
// arr.map((element) => {
//   return element + 69;
// });

// ...

// ********* Bài 2 *********
function getDateTime() {
  let currentTime = new Date();
  return `Now is ${currentTime.toLocaleTimeString()} ${currentTime.toLocaleDateString()}`;
}

const now = getDateTime();
// console.log(now); // Now is: 23:30 28/12/2022


// ********* Bài 3 *********
function allFormatsOfDate({ day, month, year }) {
  return `
  ${month}-${day}-${year} 
  ${day}/${month}/${year}
  ${day}-${month}-${year}
  ${day}/${month}/${year}
  `;
}

const date = {
  day: 28,
  month: 12,
  year: 2022,
};

const result = allFormatsOfDate(date);
console.log(result);
// 12-28-2022
// 12/28/2022
// 28-12-2022
// 28/12/2022

// ********* Bài 4 *********

function isIncreaseChainNumber(number) {
  // your code here
  let count = 0;
  let arr = handleChainNumber(number);
  for (let i = 0; i < arr.length - 1; i++) {
    if (count === 3) break;
    if (arr[i + 1] - arr[i] === 1n || arr[i + 1] - arr[i] === 1) {
      count++;
    } else {
      count = 1;
    }
  }
  if (count >= 3) {
    return true;
  } else return false;
}

function handleChainNumber(number) {
  let arr = [];
  while (number != 0) {
    let rs = number % BigInt(10);
    arr.push(rs);
    number = number / BigInt(10);
  }
  return arr.reverse();
}

const number1 = 123456789n;
const number2 = 123432112321n;
const number3 = 988811111n;

// console.log(isIncreaseChainNumber(number1)); // true
// console.log(isIncreaseChainNumber(number2)); // true
// console.log(isIncreaseChainNumber(number3)); // false

// ********* Bài 5 *********

function getCaesarString(text, step) {
  let arr = text.split("");
  return arr
    .map((element) => {
      if (element !== " ") {
        return String.fromCharCode(element.charCodeAt(0) + 3);
      } else return element;
    })
    .join("");
}

const name = "Hoang Nhan";
const cypherText = getCaesarString(name, 3);

// console.log(cypherText); // Krdqj Qkdq

// ********* Bài 6 *********
function highestFreqNumber(numbers) {
  const disctinctArr = numbers.filter((value, index) => {
    return numbers.indexOf(value) === index;
  });
  const FreqNumArr = disctinctArr.map((element) => {
    return numbers.filter((numElement) => {
      return element === numElement;
    }).length;
  });
  let maxFreq = FreqNumArr.reduce((acc, value) => {
    return acc > value ? acc : value;
  });
  return disctinctArr[FreqNumArr.indexOf(maxFreq)];
}

const numbers = [
  1, 2, 3, 5, 6, 7, 4, 7, 3, 2, 1, 6, 7, 8, 7, 7, 1, 7, 3, 7, 9999, 7, 123, 7,
];

// console.log(highestFreqNumber(numbers)); // 7

// ********* Bài 7 *********

const isIncludeJS = (str) => {
  return str.toUpperCase().includes("JAVASCRIPT");
};

const str1 = "asdsajkzzjAVAscriptttaskldjkl123aszxc";
const str2 = "jjjjjjjavaaaaScriptttttttttt";
const str3 = "888javaScript888";

// console.log(isIncludeJS(str1)); //true
// console.log(isIncludeJS(str2)); //false
// console.log(isIncludeJS(str3)); //true

// ********* Bài 8 *********

const getMonthName = (monthNumber) => {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "wrong number";
  }
};

console.log(getMonthName(3)); // March
console.log(getMonthName(4)); // April

// ********* Bài 9 *********

const longestWord = (str) => {
  let arr = str.split(" ");
  arr = arr.map((element) => {
    return element.replace(",", "");
  });
  let numElementArr = arr.map((element) => {
    return element.length;
  });
  let value = numElementArr[0];
  let index = 0;
  for (element of numElementArr) {
    if (element >= value) {
      index = numElementArr.indexOf(element);
      value = element;
    }
  }
  return arr[index];
};

const str = "Little darlin', it's been a loooooong, cold, lonely winter";

// console.log(longestWord(str)); // loooooong

// ********* Bài 10 *********

const sum = (number) => {
  const arr = handleChainNumber(number).join("").replace("n", "").split("");
  return arr
    .filter((element) => {
      return Number.parseInt(element) !== 5;
    })
    .reduce((acc, value) => {
      return Number.parseInt(acc) + Number.parseInt(value);
    });
};

console.log(sum(1231312321378127391237219312n)); // 90
console.log(sum(99999999999999999999999999999n)); // 261
console.log(sum(12345678908765432123456555566n)); // 98
