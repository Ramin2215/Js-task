
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

