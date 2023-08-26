// Loops

//for loop
console.log("for loop");
for(let i=1;i<=10;i++)
{
    if (i % 2 !== 0) //only odd numbers will be printed
    {console.log(i);} 
    
}


///////////////////////////////////////////////////////////


//while loop
console.log("while loop");
let i=1;
while(i<=10)
{
    if (i % 2 !== 0) //only odd numbers will be printed
    {console.log(i);} 
    i++;
}


///////////////////////////////////////////////////////////


//do while loop
console.log("do-while loop"); //rarely used
let j=1;
do{
    
    if (j % 2 !== 0) //only odd numbers will be printed
    {console.log(j);} 
    j++;
}while(j<=10);


//////////////////////////////////////////////////////////



//for-in loop
console.log("for-in loop");
const person={
    name:"John",
    age:30
};

//sytax for for-in loop
//for(let loop_variable in object)
for(let key in person) //we use for in loop to iterate over the properties of an object 
{
    console.log(key,person[key]); //key is the property of the object
    //person[key] is the value of the property
    //we used bracket notation
}

//similarly iterating arrays using for-in loop

const colors=["red","green","blue"];
for(let index in colors)
{
    console.log(index,colors[index]);
}


//for-of loop

console.log("for-of loop");
//for-of loop is used to iterate over the elements of an array
//sytax for for-of loop
//for(let loop_variable of array)
const cars=["bmw","audi","suzuki"];
for(let car of cars)
{
    console.log(car);
}