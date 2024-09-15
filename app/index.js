
//! Exercise list Medium IT Beginner Series: JavaScript IF/ELSE Exercises

/* Musbet Menfii */
function handlenum(num) {
    if (num < 0) {
        console.log("Bu menfidir", num);
        return
    }
    console.log("Bu busmetdir", num);
};

handlenum(-5)


//!  Cut tek

function evenOdd(num) {
    if (num % 2 === 0) {
        console.log("even", num);
        return
    }
    console.log("odd", num);

}

evenOdd(6)


function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log("Ilk reqem ikinciden boyukdur", num1);

    } else if (num2 > num1) {
        console.log("Ikinci  reqem birinciden boyukdur", num2);
    } else {
        console.log("Reqemler beraberdir", num1, num2);
    }
}

greaterNum(3, 3);


/* A 8-10  B  4-7  c 1-3 */

function letterGrade(num) {
    if (num <= 10 && num > 7) {
        console.log("A");

    } else if (num <= 7 && num > 3) {
        console.log("B");

    } else if (num <= 3 && num > 0) {
        console.log("C");

    } else {
        console.log("Bele bal yoxdur");

    }

}

letterGrade(0);


/* Yasa Gore bilet */


const ticket = (age) => {
    if (age < 12 && age >= 3) {
        console.log("Biletin qiymeti 5 azn");

    } else if (age < 18 && age >= 12) {
        console.log("Biletin qiymeti 10 azn");

    } else if (age < 60 && age >= 18) {
        console.log("Biletin qiymeti 20 azn");

    } else if (age >= 60 && age <= 90) {
        console.log("Biletin qiymeti 15 azn");

    } else {
        console.log("Bu yas araligina bilet satilmir");

    }
}

ticket(100)




/* lesp year  4 - 400 bolunmeli 100 bolunmemeli*/


function leapYear(year) {

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("Leap year", year);
                return
            } else {
                console.log("Year", year);
                return
            }
        } else {
            console.log("Leap year", year);
            return

        }

    } else {
        console.log("Leap", year);
        return
    }
}
leapYear(2000)



/* calculates a discount */

function calculatesiDiscount(money) {
    if (money >= 100) {
        console.log("Discount 20%");

    } else if (money >= 50 && money < 100) {
        console.log("Discount 10%");

    } else {
        console.log("Discount 0%");
    }
}

calculatesiDiscount(20);

/* time of day */
const date = new Date();
function getDate(time) {
    if (time > 18 && time < 24) {
        console.log("axşamınız xeyir");

    } else if (time >= 12 && time < 18) {
        console.log("günortanız xeyir");

    } else {
        console.log("sabahınız xeyir");
    }
}

getDate(date.getHours())


/* calculates the Body Mass Index  */

function bodyMassIndex(weight, height) {
    height = height / 100;
    let mass = null;
    mass = weight / (height * height);
    console.log(mass.toFixed(2));
}

bodyMassIndex(73, 180);

/* Write a simple number guessing game. */


/* 1 den 10 kimi reqem yaza bilersiz 3 defe sansiniz var
proqram duz tapmaqda size komeklik edecek
*/
const lifeSpan = document?.querySelector(".conta__life--three");

let randomNumber = Math.floor(Math.random() * 10) + 1;
let life = 3;

const conta__inp = document.querySelector(".conta__inp")
    .addEventListener("change", function () {
        randomN(Number(this.value));
        console.log(randomNumber);

        this.value = "";
    })


function randomN(num) {

    if (!isNaN(num)) {

        if (randomNumber !== num) {
            life--;
            if (life < 0) {
                alert("Caniniz bitdi, Oyuns yeinden basalyin");
                location.reload();
            } else {
                alert(`sehv tapdiz caniniz biri getdi, qalan can sayi, ${life}`)
                num > randomNumber ? alert("Yazdiginiz reqem boyukdu kicik reqem daxil edin") : alert("yazdiginiz reqem kicikdi boyuk reqem daxil edin")
                lifeSpan.innerHTML = life;
            }

        } else if (num === randomNumber) {
            alert("Tebrikler duz reqemi tapdiz Oyun bitdi")
            location.reload();
        }
    } else {
        alert("Duzgun reqem daxil edin")
    }
}


/* Klass room tapsiriq */

const myArray = [5, 2, "salam", "necesen", "salam", 56, 2, 7, 7, 7]
let eyniOlanlar = [];
for (let i = 0; i < myArray.length; i++) {
    let count = 0;
    for (let j = 0; j < myArray.length; j++) {
        if (myArray[i] === myArray[j]) {
            count++;
        }
    }
    let success = false;
    for (let k = 0; k < eyniOlanlar.length; k++) {
        if (eyniOlanlar[k].element === myArray[i]) {
            success = true;
            break
        }
    }
    if (!success) {
        eyniOlanlar.push({ element: myArray[i], count: count });
    }

}
for (let i = 0; i < eyniOlanlar.length; i++) {
    console.log(`${eyniOlanlar[i].element} -> ${eyniOlanlar[i].count} ədəd`);
}



/* task 2 */

function arraysAreEqual(firstArr, secondArr) {

    if (firstArr.length !== secondArr.length) {
        return false;
    }
    function manualSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {

                if (String(arr[i]) > String(arr[j])) {

                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    manualSort(firstArr);
    manualSort(secondArr);

    for (let i = 0; i < firstArr.length; i++) {
        if (firstArr[i] !== secondArr[i]) {
            return false;
        }
    }
    return true;
}


console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysAreEqual([1, 2, 3], [3, 2, 1])); // true
console.log(arraysAreEqual([1, 2], [1, 2, 2])); // false
console.log(arraysAreEqual(["salam", 2], ["salam", "2"])); // false
console.log(arraysAreEqual([1, 4, "at"], ["at", 1, 4])); // true
console.log(arraysAreEqual(["At", 1], [1, "aT"])); // false

/* task 3 */

const arrayNum = [-7, -71, 66, 11, 3, 8, 67];
const arrayNum2 = [1, 6, 0, 5, 3, 8, 16];


function bigNum(num) {

    for (let i = 0; i < num.length -1 ; i++) {
       
        
        for (let j = i; j < num.length ; j++) {
           
           
            if(num[i] > num[j]) {
                let temp = num[i];
                num[i] = num[j];
                num[j] = temp;
            }
            
        }
        
    }

  return num
    

}


console.log(bigNum(arrayNum));





let arr = 'qwerts   ';

console.log(arr.split('').reverse().join(''));




/* 1.    Capitalize the First Letter of Each Word
example:
capitalizeWords("hello world!"); // "Hello World!"

2.    Check if a String Contains a Substring
example:
containsSubstring("Mehdiyevashumen", "men"); // true
containsSubstring("Mehdiyevashumen", "sha");  // false

3.    Reverse a String
example :
reverseString("hello"); // "olleh"

4.    Count the Number of Vowels in a String
example:
countVowels("hello world"); // 3

5.    Check if a String is a Palindrome
isPalindrome("qulluq"); // true
isPalindrome("hello");   // false

6.    Format a Number to a Fixed Number of Decimal Places
example:
formatToDecimal(5.75759, 2); // "5.76"

7.    Generate a Random Integer Between Two Values
example:
randomInteger(1, 10); //random num: 5

8.    Convert a Number to a String
example:
numberToString(123); // "123"

9.    Find the Maximum Value in an Array of Numbers
example:
findMaxValue([3, 18, 56, 15]); // 56

10.    Round a Number to the Nearest Integer
example:
roundNumber(4.7); // 5 */



function capitalizeWords(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(capitalizeWords("hello World"));

function containsSubstring(name, search) {
    if (name.includes(search)) return true;
    return false
}
console.log(containsSubstring("Mehdiyevashumen", "sha"));
console.log(containsSubstring("Ramin", "min"));


function reverseString(reverse) {
    return reverse.split("").reverse().join("");
}
console.log(reverseString("hello"));

let count = 0;
function countVowels(text) {
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < text.length; j++) {
            if (text[i] === vowels[j]) {
                count += 1
                break
            }
        }
    }
    return count;
}
console.log(countVowels("hello world"));


function isPalindrome(str) {
    let newStr = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[newStr]) {
            return false;
        }
        newStr--;
    }
    return true
}

console.log(isPalindrome("qulluq"), "palindrom");// true
console.log(isPalindrome("hello"), "no");   // false


function formatToDecimal(num, decimal) {
    return num.toFixed(decimal)
}

console.log(formatToDecimal(25.75759, 3), "decimal");
; // "5.76"




function numberToString(num) {
    // num.toString()
    return num + ""
}

console.log(numberToString(123), "str");// "123"



function findMaxValue(arr) {

    // metod
    // return arr.sort((a,b)=>b-a)[0];


    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length; j++) {

            if (arr[i] < arr[j]) {
                let num = arr[i];
                arr[i] = arr[j];
                arr[j] = num
            }
        }
    }
    return arr[0]

}



console.log(findMaxValue([100, 18, 56, 15]), "max value");
; // 100



function NumberInteger(Integer) {
    return parseInt(Integer)
}



console.log(NumberInteger(4.7), "integer");// 5 */





let redArray = [1, 2, 3, 4, 5];
let textArray = ["hello", "world"];
console.log(redArray.reduce((acc, item) => acc + item, 0));

function even(arr) {
    return arr.filter(ev => ev % 2 === 0)
}
console.log(even(redArray));


function minMax(arr) {
    let min = arr.sort((a, b) => a - b)[0]
    let max = arr.sort((a, b) => b - a)[0]
    return [max, min]
}
console.log(minMax(redArray));


function concat(arr1, arr2) {
    return [...arr1, ...arr2]
    /* return [arr1 + arr2] */
}
console.log(concat(redArray, textArray));



const includeArray = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6];
let countElement = 0;

function searchArrayElemet(arr, element) {
    return arr.filter(item => item === element).length
}
console.log(searchArrayElemet(includeArray, 3));

function searchArrayElemet2(arr, element) {
    let countX = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            countX += 1;
        }
    }
    return countX
}
console.log(searchArrayElemet2(includeArray, 6));


function uniArray(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (arr.includes(array[i]) === false) {
            arr.push(array[i])
        }
    }
    return arr
}

console.log(uniArray(includeArray));



// searchMedianNumber

const medianNumber = [8, 9, 1, 2, 3, 4, 5, 6, 7, 10];

let x = [1, 2, 3, 4]

function searchMedianNumber(array) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

        }
    }

    if (array.length % 2 === 0) {
        return [array[parseInt(parseInt(array.length / 2) - 1)], array[parseInt(parseInt(array.length / 2))]]
    } else {
        return array[parseInt(parseInt(array.length / 2) - 1)]

    }


};

console.log(searchMedianNumber(medianNumber));




let lifex = 5;
const choose = document.querySelector("input")
let trueAnswer = 0;
const smashArr = ["das", "kagiz", "qayci"];


choose?.addEventListener("change", function () {
    let random = Math.floor(Math.random() * 3);
    smashFun(smashArr[random], choose.value);
    choose.value = "";
})

function smashFun(randomNumber, select) {
    console.log(randomNumber, lifex, trueAnswer, select);
    if (randomNumber === "das") {
        if (select === "das") {
            alert("das beraberdi das")
        } else if (select === "qayci") {
            lifex--;
            alert("1 caniniz getdi siz das qaycini ezdi", lifex)
            if (lifex === 0) {
                alert("Siz uduzduduz")
                location.reload();
            }
        } else if (select === "kagiz") {
            trueAnswer++;
            alert("Siz dasi bagladiz 1 duzgun cavab", trueAnswer)
            trueAnswer === 5 && alert("siz Qalib geldiz")
        } else {
            alert("bos deyer vermek olmaz")
        }
    } else if (randomNumber === "kagiz") {
        if (select === "kagiz") {
            alert("kagiz beraberdi kagiz")
        } else if (select === "das") {
            lifex--;
            alert("1 caniniz getdi siz kagiz dasi bagladi", lifex)
            if (lifex === 0) {
                alert("Siz uduzduduz")
                location.reload();
            }
        } else if (select === "qayci") {
            trueAnswer++;
            alert("Siz kagizi kesdiz 1 duzgun cavab", trueAnswer)
            trueAnswer === 5 && alert("siz Qalib geldiz")
        }
        else {
            alert("bos deyer vermek olmaz")
        }
    } else if (randomNumber === "qayci") {
        if (select === "qayci") {
            alert("qayci beraberdi qayci")
        } else if (select === "kagiz") {
            lifex--;
            alert("1 caniniz getdi siz qayci kagizi kesdi", lifex)
            if (lifex === 0) {
                alert("Siz uduzduduz")
                location.reload();
            }
        } else if (select === "das") {
            trueAnswer++;
            alert("Siz das qaycini ezdi 1 duzgun cavab", trueAnswer)
            trueAnswer === 5 && alert("siz Qalib geldiz")
        }
        else {
            alert("bos deyer vermek olmaz")
        }
    }
}



function numberGuessingGame() {
    let health = 0;
    const random = Math.floor(Math.random() * 51);
    for (let i = 3; i > health; i--) {
        let num = Number(prompt("Reqemi texmin edin : 1-50"))
        console.log(random, num);
        if (num === random) {
            alert("Duz tapdiz")
            alert("Yeniden baslayirsiz")
            location.reload()
        } else if (random > num) {
            alert(`Yazdiginiz Reqem kicikdi, life:${i} `)
        } else if (random < num) {
            alert(`Yazdiginiz Reqm boyukdu,life:${i}`)
        } else {
            alert("Xeta")
        }
    }


}

numberGuessingGame()


//bubble sort
function mergeAndSort(arrays) {
    let mergedArray  = arrays.flat();
    for (let i = 0; i < mergedArray.length; i++) {
      for (let j = 0; j < mergedArray.length - i - 1; j++) {
        if (mergedArray[j] > mergedArray[j + 1]) {

          let temp = mergedArray[j];
          mergedArray[j] = mergedArray[j + 1];
          mergedArray[j + 1] = temp;
        }
      }
    }
  
    return mergedArray;
  }
  
  const arrays = [[1, 5, 9], [2, 6], [3, 4, 7, 8]];
  const result = mergeAndSort(arrays);
  console.log(result);  
  