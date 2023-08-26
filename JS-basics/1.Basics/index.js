let name='Irwin';
console.log(name); 

//Video 1

let interestRate=0.3;// const is used for declaring constant
interestRate=1;
console.log(interestRate);

//Video 2

let nick_name='Irwin'; //String Literal
let age=30; //Number Literal
let isApproved=false; //Boolean Literal
let firstName=undefined;
let selectedColor=null;
//Primitive types in JavaScript
//Video 3

//JavaScript is a dynamic language and use of typeof operator.
//Video 4


let person={name:'Irwin', age:22};//Object Literal (Contains key value pairs)
console.log(person);

//Dot Notation
console.log(person.name);
console.log(person.age); //preffered way
//Bracket Notation

console.log(person['name']);
console.log(person['age']);

//dynamic way of accessing properties
let selection='name';
person[selection]='Mary';
//Reference Types in JavaScript (Objects, Arrays, Functions)
//video 5


let selectedColors=['red','blue'];//Array Literal

console.log(selectedColors);//prints whole array
console.log(selectedColors[0]);
selectedColors[2]='green';
selectedColors[3]=1; //we can add different types of elements in array
console.log(selectedColors.length);

//Video 6 Arrays (array is an object in JavaScript)


function greet(name,lastName){
    console.log('Hello '+name+' '+lastName);
}

greet('Irwin','King'); 

//Video 7 functions

function square(number){
    return number*number;
}
console.log(square(2)); //we passed function as an argument to another function

