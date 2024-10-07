// classic for loops
for (let incrementor = 20; incrementor >= 10; incrementor--) {
    console.log(incrementor);
}

for (let j = 10; j <= 20; j++) {
    console.log(j);
}

// while loop
let count = 0;
while (count < 10) {
    count++;
    console.log("while loop", count)
}

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
}

// for in loop
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};
console.log(car);
for (let key in car) {
    console.log("for in loop", key + ": " + car[key]);
}