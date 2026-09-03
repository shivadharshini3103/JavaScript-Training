//Task 1 — For Loop
console.log("Task 1");

for(let i = 1;i<=10; i++){
    console.log(i);
}

//Task 2 — Reverse Number
console.log("Task 2");
for(let i=10 ; i>=0 ;i--){
    console.log(i);
}

//Task 3 — Even Numbers
console.log("Task 3");
for(let i = 1;i<=20 ; i++){
    if(i%2==0){
        console.log(i);
    }
}

//Task 4 — Odd Numbers
console.log("Task 4");
for(let i=1;i<=20;i++){
    if(i%2!=0){
        console.log(i);
    }
}

//Task 5 — Multiplication Table
console.log("Task 5");
let number = prompt("Enter the number: ");
for(let i = 1;i<=10;i++){
    console.log(number + " x " + i + " = " + (number*i));
}

//Task 6 — Countdown
console.log("Task 6");
let i = 10;
while(i>=1){
    console.log(i);
    i--;
}

//Task 7 — Sum of Numbers
console.log("Task 7");
let i1 = 1;
let sum = 0;
while(i1<=10){
    sum = sum + i1;
    i1++;
}
console.log(sum);

// Task 8 do while
console.log("Task 8");

let i8 = 1;
do {
    console.log(i8);
    i8++;
} while (i8 <= 5);

//Task 9 — Do While Understanding
console.log("Task 9");
let a = 10;
do {
    console.log(a);
    a++;
} while (a <= 5);

//Task 10 — String Characters
console.log("Task 10");
let name = "javascript";
for(let character of name){
    console.log(character);
}

//Task 11 — Array Values
console.log("Task 11");
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for(let fruit of fruits){
    console.log(fruit);
}

// Task 12 Student Names
console.log("Task 12");
let studentNames = ["Naveen","Arun","Karthik","Dinesh","Kavin"]
for (let student of studentNames){
    console.log("Student: ",studentNames);
}

//Task 13 — Employee Object
console.log("Task 13");
let employees = {
    Name13 : "Naveen",
    Age13 : 25,
    Role13 : "Software Developer",
    City13 : "Coimbatore",
}

for (let key in employees){
    console.log(key ,employees[key]);
}

//Task 14 — Product Object
console.log("Task 14");
let Product = {
    productName : "MacBook",
    Price : 99999,
    Brand : "Apple",
    Category : "M1",
    Stock : "Available",
}

for(let keys in Product){
    console.log(keys, Product[keys]);
}

//Task 15 — Simple Function
console.log("Task 15");
function welcome(){
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();

//Task 16 — Function With Parameter
console.log("Task 16");
function greet(name){
    console.log("Hello " + name);
}
greet("Naveen");
greet("Kavin");
greet("Praveen");

// Task 17 — Multiple Parameters
console.log("Task 17");
function Students(name,age,department){
    console.log("Name: " , name);
    console.log("Age: " ,age);
    console.log("Department: ",department);
}

Students("Kavin" , 22 , "EEE");
Students("Naveen" , 22 , "EEE");
Students("Praveen" , 22 , "EEE");

//Task 18 — Addition Function
console.log("Task 18");
function add(a,b){
    return a + b;
}
let answer = add(10,12);
console.log(answer);

//Task 19 — Salary
console.log("Task 19");
function salary19(month){
    return month
}
let salaryAmount = salary19(90000);
console.log(salaryAmount);

//Task 20 — Bonus Calculator
console.log("Task 20");
function bonus (salary20 , bonusAmount){
    return salary20 + bonusAmount;
}

let total = bonus(50000,5000);
console.log(total);

//Task 21
console.log("Task 21");
function employees21(name,role = "Developer"){
    console.log("Name: ",name);
    console.log("Role: ",role);
}
employees21("Arun");
employees21("Priya","Designer");


//Task 22 — Named Function
console.log("Task 22");
function squares(number22){
    return number22 * number22;
}
console.log(squares(2));
console.log(squares(3));
console.log(squares(4));
console.log(squares(5));
console.log(squares(6));

//Task 23 — Anonymous Function
console.log("Task 23");
let calculate = function(a,b){
    return a+b;
};

let result = calculate(10,20);
console.log(result);


//Task 24 — Arrow Function
console.log("Task 24");
let multiply = (a,b) => {
    return a*b;
};
console.log(multiply(10,2));

//Task 25 — Scope
console.log("Task 25");
function test() {

    if (true) {

        var a25 = 10;
        let b25 = 20;
        const c25 = 30;

        console.log(a25);  //10
        console.log(b25);   //20
        console.log(c25);   //30
    }

    console.log(a25);  //10
    //console.log(b25);
    //console.log(c25);
}

test();  

//Task 26 — Predict
console.log("Task 26");
console.log(a26);

var a26 = 10;

//Task 27
//console.log("Task 27");
//console.log(b27);

//let b27 = 20;

//Task 28
//console.log("Task 28");
//console.log(c28);

//const c28 = 30;

//Task 29 — IIFE
console.log("Task 29");

(function(){
    console.log("Welcome to JavaScript");
})

let discountOffer = function(product, discount) {
    console.log(product + " has " + discount + "% discount");
};
discountOffer("Laptop", 20);

//Task 30
console.log("Task 30");
function welcome() {
    console.log("Welcome");
}
function execute(callback) {
    callback();
}
execute(welcome);

//Task 31 — Generator Function
console.log("Task 31");
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let result31 = cashback();
for (let value of result31){
    console.log(value);
}

//Task 32 — Employee Management Console
let employees32 = [
    {
        name: "Aarav",
        age: 25,
        department: "IT",
        role: "Developer",
        salary1: 40000
    },
    {
        name: "Nivetha",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary1: 35000
    },
    {
        name: "Yazhini",
        age: 26,
        department: "IT",
        role: "Frontend Developer",
        salary1: 45000
    }
];


// for...of
for (let employee of employees32) {
    console.log(employee);
}


// for...in
for (let employee of employees32) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}


// Function
function displayEmployee(name, age, department, role, salary) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary1:", salary);
}


// Function call
displayEmployee(
    "Aarav",
    25,
    "IT",
    "Developer",
    40000
);


// Return
function getSalary(employee) {
    return employee.salary;
}

let salary = getSalary(employees32[0]);

console.log("Employee Salary:", salary);


// Condition
for (let employee of employees32) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " → Salary is 40000 or above");
    } else {
        console.log(employee.name + " → Salary is below 40000");
    }
}


// Arrow Function
let calculateBonus = (salary, bonus) => {
    return salary + bonus;
};

console.log("Total Salary:", calculateBonus(40000, 5000));


// Generator
function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log("Benefit:", benefit);
}