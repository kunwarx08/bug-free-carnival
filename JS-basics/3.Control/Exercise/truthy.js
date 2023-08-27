//Approach
//i I have to traverse an array 
//And check with each traversal is that value truthy or not
//If truthy incriment the count else return to next traversal

//falsy values = undefined, null,'', false , NaN ,0.

const array = [0,null,undefined,'',2,3,4];
console.log(countTruthy(array));


function countTruthy(array){
    let count = 0;
    for(let value of array)
        if(value) // as if condition will only be executed if
            count++;//the parameter is truthy so we not need to give all conditions of falsey
    return count;
}