// classic for loops
for (let incrementor = 20; incrementor >= 10; incrementor--) {
    console.log(incrementor);
};

for (let j = 10; j <= 20; j++) {
    console.log(j);
};

// while loop
let count = 0;
while (count < 10) {
    count++;
    console.log("while loop", count)
};

// do while loop
let num = 0;
do {
    // this work
    console.log("do while loop", num);
    num++;
} while (num <= 5);

// for of loop
let arr = [true, 2, "three", 4, [1, 2, 3]];
console.log(arr);
for (let x of arr) {
    console.log("for of loop", x);
};

// for in loop
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car);
for (let key in car) {
    console.log("for in loop", key + ": " + car[key]);
};

for (let i = 20; i >= 0; i -= 2) {
    console.log(i)
};

for (let i = 20; i >= 0; i--) {
    if (i % 4 === 0) {
        console.log(i)
    }
};
let fruits = ["apple", "pear", "grape"]
console.log(fruits)
for (let angryKids of fruits) {
    console.log(angryKids + "s are so angry")
};
let EV = {
    Make: "Tesla",
    Model: "Cybertruck",
    Year: 2024,

};
console.log(EV)
for (let key in EV) {
    console.log(key + ":" + EV[key])
};

let rows = 5; // number of rows of the pyramid
for (let i = 1; i <= rows; i++) {
    let stars = "";
    // add spaced before the stars
    for (let j = 1; j <= rows - i; j++) {
        stars += " ";
    }

    // add stars
    for (let k = 0; k < (2 * i - 1); k++) {
        stars += "*";
    }

    console.log(stars); // log thr rows of stars
}