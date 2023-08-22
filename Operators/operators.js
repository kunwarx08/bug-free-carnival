//Types of operators is JS
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators

let x = 10;
let y = 3;

// 1. Arithmetic Operators
console.log(x + y); // Addition
console.log(x - y); // Subtraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulus
console.log(x ** y); // Exponentiation

//Increment (++)

console.log(x++); // Post-increment
console.log(++x); // Pre-increment

//Decrement (--)
console.log(x--); // Post-decrement
console.log(--x); // Pre-decrement

// 2. Assignment Operators

let a = 10;

a += 5;// => a = a + 5
a -= 5;// => a = a - 5
a *= 5;// => a = a * 5
a /= 5;// => a = a / 5
a %= 5;// => a = a % 5

// 3. Comparison Operators

let b = 1;

// Relational
console.log(b > 0);
console.log(b >= 1);
console.log(b < 1);
console.log(b <= 1);

// Equality
console.log(b === 1);// Strict equality
console.log(b !== 1);// Not equal to

// 4. Equality Operators

// Strict Equality (Type + Value) -- Most commonly used
console.log(1 === 1); 
console.log('1' === 1);

// Lose Equality (Value)
//It checks only the value even if the type is different
console.log(1 == 1);
console.log('1' == 1);
console.log(true == 1);

// 5. Ternary Operators

// If a customer has more than 100 points,
// they are a 'gold' customer, otherwise,
// they are a 'silver' customer.

let points = 110;
let type = points > 100 ? 'gold' : 'silver'; // Ternary operator -- (Condition ? True : False)
console.log(type);

// 6. Logical Operators 

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); // true
console.log(true && false); // false

//---example
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);


// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
console.log(true || true); // true
console.log(true || false); // true

// Logical NOT (!)
//brief application of NOT operator
highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan);
let applicationRefused = !eligibleForLoan; // !true = false
console.log('Application Refused', applicationRefused);

// 7. Logical Operators with Non-booleans

// Falsy (false) 
//-------Following are some falsey value
// undefined
// null
// 0
// false
// '' (empty string)
// NaN (Not a Number)

// Anything that is not Falsy -> Truthy

//Examples
false || true // true
false || 'Mosh' 
// Mosh is Truthy as it doesnt come under any of the falsy values
false || 1 // 1
// 1 is Truthy as it doesnt come under any of the falsy values

// Short-circuiting
false || 1 || 2 // 1
// 1 is the first truthy value so it is returned and the rest of the values are ignored this is called short-circuiting

// Real world example
let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);

















