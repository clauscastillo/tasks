// revertir

function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

const str = "criatura";
const reversedStr = reverseString(str);
console.log(reversedStr);


// Quitar cadenas de longitud uniforme

function removeStringsByLength(arr, len) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length !== len) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  
  let arr = ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."];
  arr = removeStringsByLength(arr, 8);
  arr = removeStringsByLength(arr, 2);
  arr = removeStringsByLength(arr, 4);
  arr = removeStringsByLength(arr, 6);
  arr = removeStringsByLength(arr, 7);
  console.log(arr);
  

// Entero a números romanos

function convertToRoman(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
    let result = '';
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
    return result;
  }

console.log(convertToRoman(1465));


// Números romanos a enteros

function romanToDecimal(romanNum) {
    const romanNumerals = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let decimalNum = 0;
    for (let i = 0; i < romanNum.length; i++) {
      const currentNum = romanNumerals[romanNum[i]];
      const nextNum = romanNumerals[romanNum[i+1]];
      if (currentNum < nextNum) {
        decimalNum -= currentNum;
      } else {
        decimalNum += currentNum;
      }
    }
    return decimalNum;
  }

  
console.log(romanToDecimal("MCDLXV"));
  
