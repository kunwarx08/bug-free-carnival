//write a function that takes 
//two numbers and returns the maximum 
//of the two

function max(a,b)
{
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

console.log(max(2,3));

//using ternary operator or conditional operator

function max(a,b)
{
    return (a>b)?a:b;
}

console.log(max(10,3));