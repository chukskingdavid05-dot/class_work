// alert("welcome")
// console.log("this is the console tab");
// // let name = prompt("enter your name");
// confirm("are you sure");
// let name = "alice";
// let age = 25;
// console.log(typeof name); // string
// console.log(typeof age); // number

// let isAdmin = true;
// console.log(typeof isAdmin);
// let fruits = ["apple","banana"];
// console.log(typeof fruits);

// let randomNum = Math.floor(Math.random() * 10) + 1;
// console.log("Random Number:" + randomNum);


// let age = prompt("enter your age");
// if (age >= 18) {
//     console.log("You can vote!")
// }

let x = 5;
let y = 6;
let z = "5"
let a = x >= y;
console.log(a);

let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
    console.log("Access granted!");
} 











let score = 30;
if (score >= 70){
    console.log("A");
} else if (score >= 60){
    console.log("B");
} else if (score >= 50){

}


// let fruits = ["apple", "banana"];
// fruits.push("mango"); //add to end
// console.log(fruits)

// let numbers = [1,2,3];
// numbers.push(4); //adds 4
// numbers.pop(); // removes the last item on the a 
// console.log(numbers);

let names = ["John", "Jane", "Doe"];
names.shift(); // removes "John"
names.unshift("Paul"); // adds "Paul" at start
console.log(names);

let cars = ["Toyota", "Honda", "BMW"];
console.log(cars[1]);

let language = ['python', 'javascript', 'c++', 'css', 'mysql', 'html'];
let pro = language.slice(1, 3);
console.log(pro);
pro = language.slice(4);
console.log(pro);
pro = language.slice(-2);
console.log(pro);

let types = ['numbers', 'boolean', 'string', 'array', 'object'];
let data = types.splice(3, 2);
console.log(data);




// let person = {
//     name: "alice",
//     age: 25,
//     country: "nigeria"
// };

// let person = {name: "alice", age: 25};
// person.age = 26;
// person.city = "lagos"
// console.log(person);


let i = 1;
while (i <= 5){
    console.log("Number:",i);
    i++;
}

for (let i = 1; i <= 5; i++){
    console.log("Count:", i);
}

for (let i = 1; i <= 10; i++){
    // if (i === 3) continue; //skips 3
    if (i === 5) break;    //stops loop at 5
    console.log(i);
}

for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 2; j++){
        console.log("i =", i, "j =", j);
    }
}

// let fruits = ["apple", "banana", "cherry"];
// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }

let student = {name: "john", age: 20, grade: "A"};
for (let key in student){
    console.log(key + ":" + student[key]);
}

// function greet(){
//     console.log("Hello, welcome to javaScript");
// }

// greet();


function addNumbers(){
    let sum = 5 + 3;
    console.log(sum);
}
addNumbers(); //invoking


// function greet(name){
//     console.log("Hello " + name + "i");
// }

// greet("Charles");


// function add(a, b){
//     return a + b;
// }

// let result = add(5, 10);
// console.log(result);



let globalVar = "i'm global!";
function testScope(){
    let localVar = "i'm local!";
    console.log(globalVar);
    console.log(localVar);
}

testScope();



function outer(){
    function inner(){
        console.log("I'm inside the outer function!");
    }
    inner();
}

outer();



const greet = () => console.log("Hello!");
greet();


const add = (a, b) => a + b;
console.log(add(4, 6));



function countdown(n){
    if (n <= 0) return;
    console.log(n);
    countdown(n - 1);
}

countdown(5);


let person ={
    name: "Alice",
    greet: function(){
        console.log("Hi, I'm" + person.name);
    }
};
person.greet();



const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function(item){
    console.log(item);
});



const numbers = [2, 4, 6, 7, 34, 45, 67];
const result = mumbers.find((num) => num > 20);
console.log(result);



const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled);


const scores = [45, 78, 82, 90];
console.log(scores.some(score > 80)); //true
console.log(scores.every(score => score >= 45));


const ages = [12, 18, 25, 16, 30];
const adults = ages.filter(age => age >= 18);
console.log(adult)


// function greet(name = "Guest") {
//     console.log("Welcome, ")
// }






// const nums = [4, 8, 12]




// const user = (name: "John", age: 25);
// const job }


// const user = { name: Alice}


function display({name, age}) {
    console.log(name + "is" + age + "years old");
}

display({name: "John", age: 30});


