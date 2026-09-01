//  Task 1 — var, let, const
var studentName = "Shiva";
let studentAge = 22;
const collegeName = "SKCET";

console.log(studentName);
console.log(studentAge);
console.log(collegeName);

studentName = "dharshini";
console.log(studentName);

studentAge = 23;
console.log(studentAge);

collegeName = "Skcet";
console.log(collegeName);

var studentName = "Shivu";
console.log(studentName);


// Task 2 - User Information
let Name = prompt("What is your Name?");
let Age = prompt("What is your age?");
let City = prompt("What is your city?");
console.log(Name);
console.log(Age);
console.log(City);

//  Task 3 — Welcome Message
let userName = prompt("Enter your name");
alert("Welcome " + userName + "!");

//  Task 4 — Age Calculator
let birthYear = prompt("Enter your birthyear:");
let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Birthyear: "+birthYear);
console.log("Age: "+age);

//Task 5 — Identify Data Types
let text5 = "Hello";
let num5 = 100;
let weight5 = 25.5;
let valueTrue = true;
let valueFalse =false;
let nothing;
let empty5 = null;

console.log(typeof(text5));
console.log(typeof(num5));
console.log(typeof(weight5));
console.log(typeof(valueTrue));
console.log(typeof(valueFalse));
console.log(typeof(nothing));
console.log(typeof(empty5));

// Task 6 — Student Data
let employee= {
    name = "Shiva",
    age = 22,
    city = "Coimbatore",
    qualification = "BE",
    isStudent = false,

}

console.log(employee);

//Task 7 — Fruit Array
let fruitName = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];

console.log(fruitName[0]);
console.log(fruitName[1]);
console.log(fruitName[fruitName.length-1]);
console.log(fruitName.length);

//Task 8 — Basic Calculator
let num1 = 20;
let num2 = 5;
console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ",num1*num2);
console.log("Division: ",num1/num2);
console.log("Modulus: ".num1%num2);
console.log("Exponentiation: ",num1 ** num2);

// Task 9 — Shopping Bill
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let totalPrice = Shirt + Pant + Shoes;

console.log("Total Price: "+totalPrice);

//Task 10 — Simple Marks Calculation
let Tamil = 80;
let English = 75;
let Maths = 90;
let TotalMarks = Tamil + English + Maths;
let AverageMarks = TotalMarks / 3;

console.log(TotalMarks);
console.log(AverageMarks);

//Task 11 — Post Increment
let a = 10;
let b = a++;

console.log(a);
console.log(b);

//Task 12 — Pre Increment
let a1 = 10;
let b1 = ++a1;

console.log(a1);
console.log(b1);

//Task 13 — Post Decrement
let a2 = 20;
let b2 = a2--;

console.log(a2);
console.log(b2);

//Task 14 — Pre Decrement
let a3 = 20;
let b3 = --a3;

console.log(a3);
console.log(b3);

//Task 15 — Find the Final Values
let a4 = 5;
let b4 = a4++;
let c4 = ++a4;
let d4 = b4--;

console.log(a4);
console.log(b4);
console.log(c4);
console.log(d4);

//Task 16 — Assignment Operators
let num16a = 10;
num16a += 5;
console.log("+= :", num16a);

let num16a = 10;
num16a -= 5;
console.log("-= :", num16b);

let num16a = 10;
num16a *= 5;
console.log("*= :", num16c);

let num16a = 10;
num16a /= 5;
console.log("/= :", num16d);

let num16a = 10;
num16a %= 3;
console.log("%= :", num16e);

let num16a = 10;
num16a **= 2;
console.log("**= :", num16f);

//Task 17 — Mini Student Profile
let Name17 = "Naveen";
let Age17 = 25;
let City17 = "Coimbatore";
let College17 = "ABC";

let subject = ["Tamil","English","Maths","Science","Social"];

let employeeDetails = {
    Name17A = "Shivu",
    Age17A = 23,
    City17A = "Salem",
    Subjects17A = ["Tamil","English","Maths"],
    isStudents17A = "Present",
}

console.log(Name17);
console.log(Age17);
console.log(City17);
console.log(Subjects17A[0]);
console.log(Subjects17A.length-1);
console.log(Subjects17A.length);
console.log(employeeDetails);


//Final Challenge — User + Calculator
let number1 = 20;
let number2 = 10;

console.log("Addition: ", number1 + number2);
console.log("Subtraction: ", number1 + number2);
console.log("Mutliplication: ",number1 * number2);
console.log("Division: ",number1 / number2);
console.log("Modulus: ", number1 % number2);
console.log("Power: ", number1 ** number2);















































