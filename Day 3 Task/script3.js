//Task 1 — Variables
var Name1 = "Shiva";
let Age1 = 22;
const City1 = "Coimbatore";
const College1 = "SKCET";

console.log(Name1);
console.log(Age1);
console.log(City1);
console.log(College1);

Age1 = 23;
console.log(Age1);

Name1 = "Shivadharshini";
console.log(Name1);

// These are the showing error that's why i have commented
//City1 = "Salem";

//var Name1 = "Naveen";

//let Age1 = 25; 

//const College1 = "ABC"

//Task 2 — Printing Statements
console.log("Hello JavaScript");

alert("Welcome to JavaScript");

confirm("Are you ready?");

let name = prompt("Enter your name:");

document.writeln("Hello " + name);

//Task 3 — User Details
let Name3 = prompt("Enter your name: ");
let Age3 = prompt("Enter your age: ");
let City3 = prompt("Enter your city: ");
let Qualification3 = prompt("Enter you qualification: ");

console.log("Name: " , Name3);
console.log("Age: ",Age3);
console.log("City: ",City3);
console.log("Qualification: ",Qualification3);

//Task 4 — Find Data Types
let a = "Javascript";
let b = 100;
let c = 99.5;
let d = true;
let e = false;
let f = undefined;
let g = null;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));
console.log(typeof(g));

//Task 5 — Student Array
let Student5 = ["Naveen","Arun","Priya","Kumar","Divya","Rahul"];

console.log(Student5[0]);
console.log(Student5[1]);
console.log(Student5[Student5.length-1]);
console.log(Student5.length);

//Task 6 — Employee Object
let employeeDetails = {
    Name6 : "Shivaaaa",
    Age6 : 24,
    Role6 : "Frontend Developer",
    Skills6 : ["HTML","CSS","JavaScript","React.js"],
    isWorking6 : true,
    Qualification6 : "BE",
}

console.log("Employee Name: ",employeeDetails.Name6);
console.log("Age: ",employeeDetails.Age6);
console.log("Role: ",employeeDetails.Role6);
console.log("First Skill: ",employeeDetails.Skills6[0]);
console.log("Last Skill: ",employeeDetails.Skills6[employeeDetails.Skills6.length - 1]);
console.log("Working status: " , employeeDetails.isWorking6);

// Task 7 — Calculator
let number1 = 20;
let number2 = 10;

console.log("Addition: ", number1+number2);
console.log("Subtraction: ",number1-number2);
console.log("Multiplication: ",number1*number2);
console.log("Division: ",number1/number2);
console.log("Modulus: ", number1%number2);
console.log("Exponentation: " ,number1**number2);

//Task 8 — Shopping Bill
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let Bag = 799;

let TotalPrice = Shirt + Pant + Shoes + Bag;

console.log("TotalPrice: ",TotalPrice);

//Task 9 — Increment & Decrement
let a1 = 10;
let b1 = a1++;
console.log(a1);
console.log(b1);

let a2 = 10;
let b2 = ++a2;
console.log(a2);
console.log(b2);

let a3 = 10;
let b3 = a3--;
console.log(a3);
console.log(b3);

let a4 = 10;
let b4 = --a4;
console.log(a4);
console.log(b4);

//Task 10 Assignment Operator Tasks
let number10 = 10;

number10 += 10;
console.log("Addition: ",number10);

number10 -= 5;
console.log("Subtraction: ",number10);

number10 *= 2;
console.log("Multiplication: ",number10);

number10 /= 2;
console.log("Division: ",number10);

number10 %= 3;
console.log("Modulus: ",number10);

number10 **=2;
console.log("Exponentation: ",number10);


// Task 11 Comparison Operator Tasks
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);    //true
console.log(10 <= 9);     // false

console.log(5 == "5");     //true
console.log(5 === "5");     //false

console.log(10 != "10");     //true
console.log(10 !== "10");     //false

//Task 12 — AND
console.log(true && true);  //true
console.log(true && false);  //false
console.log(false && true);  //false
console.log(false && false);  //false

//Task 13 — OR
console.log(true || true);     //true
console.log(true || false);    //true
console.log(false || true);    //true
console.log(false || false);    //false

//Task 14 — NOT
console.log(!true);   //false
console.log(!false);   //true
console.log(!(5 > 10));   //true
console.log(!(10 > 5));    //false

//Task 15 — Combination
console.log(5 == "5" && !(5 === 5) || 6 > 7);  //false

console.log(10 > 5 && 8 < 12 || 4 === "4");    //true
 
console.log(7 === 7 && 10 != "10" || 5 >= 5);    //true

console.log(15 < 10 || 20 > 15 && 5 == "5");     ///true

//Task 16 — Voting
let age = 20;
if(age>=18){
    console.log("Eligible to vote");
}
else{
    console.log("Not eligible");
}

//Task 17 — Password
let password = true;
let result = password ? "Login successful" : "Wrong password";
console.log(result);


//Task 18 — User Introduction
let Name18= " Naveen";
let Age18 = 25;
let City18 = "Coimbatore";

console.log(`My name is ${Name18}. I am ${Age18} years old. I live in ${City18}.`);

//Task 19 — String Conversion
let a19 = String(100);
let b19 = String(true);
let c19 = String(undefined);
let d19 = String(null);
let e19 = String([,2]);

console.log(typeof(a19));
console.log(typeof(b19));
console.log(typeof(c19));
console.log(typeof(d19));
console.log(typeof(e19));


//Task 20 — Number Conversion
console.log(Number());   //0
console.log(Number(""));  //0
console.log(Number("123"));  //123
console.log(Number("a1"));   //NaN
console.log(Number(true));   //1
console.log(Number(false));   //0
console.log(Number(undefined));   //NaN
console.log(Number(null));     //0

//Task 21 — Boolean Conversion
console.log(Boolean());    //false
console.log(Boolean(""));   //false
console.log(Boolean("hello"));   //true
console.log(Boolean(123));   //true
console.log(Boolean(true));   //true
console.log(Boolean(false));   //false
console.log(Boolean(undefined));  //false
console.log(Boolean(null));   //false
console.log(Boolean([]));   //true
console.log(Boolean({}));   //true

//Task 22 — Voting Eligibility
let Age22 = Number(prompt("What is your age?"));

if(Age22>=18){
    console.log("You can vote");
}else{
    console.log("You can't vote");
}

//Task 23 — Positive or Negative
let Num23 = Number(prompt("Enter a number: "));
if(Num23>0){
    console.log("Positive");
}else if(Num23<0){
    console.log("Negative");
}else{
    console.log("Zero");
}

//Task 24 — Grade System
let Mark = Number(prompt("Enter your mark: "));
if(Mark >= 90){
    console.log("A Grade");
}else if(Mark >= 80){
    console.log("B Grade");
}else if(Mark >= 70){
    console.log("C Grade");
}else if(Mark >= 60){
    console.log("D Grade");
}else{
    console.log("Fail");
}

//Task 25 — Job Eligibility
let Age25 = Number(prompt("Enter your age: "));
let Height25 = Number(prompt("Enter your height: "));
let Weight25 = Number(prompt("Enter your weight: "));

if(Age25>=18) {
    if(Height25>=160){
        if(Weight25>=60){
            console.log("Congratulations! You are selected");
        }else{
            console.log("Weight is below 60");
            
        }
    }else{
        console.log("Height is above 160");
        
    }

}
else{
    console.log("Age is below 18");
    
}

//Task 26 — Traffic Light
let color = prompt("Enter the color: ");
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

//Task 27 — Day

let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//Task 28 — Student Result System
//Step 1 — Get user details
let Name28 = prompt("Enter your name: ");
let Age28 = Number(prompt("Enter your age: "));
let City28 = prompt("Enter your city: ");

//Step 2 — Get marks
let Tamil = Number(prompt("Enter your Tamil Mark: "));
let English = Number(prompt("Enter your English Mark: "));
let Maths = Number(prompt("Enter your Maths Mark: "));

//Step 3 — Calculate
let Total = Tamil + English + Maths;
let Average = Total / 3;

//Step 4 — Check result
let grade;

if(Average>=90){
     grade = "A";
}else if(Average>=80){
    grade = "B";
}else if(Average>=70){
    grade = "C";
}else if(Average>=60){
    grade = "D";
}else{
    grade = "Fail";
}

//Step 5 — Check voting
let ageFinal;

if(Age28 >= 18){
    ageFinal = "Eligible";
}else{
    ageFinal = "Not Eligible";
}

console.log("Name: ",Name28);
console.log("Age: ",Age28);
console.log("City: ",City28);
console.log("Total: ",Total);
console.log("Average: ",Average);
console.log("Grade: ",grade);
console.log("Voting: ",ageFinal);























































