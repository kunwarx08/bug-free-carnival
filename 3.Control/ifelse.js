//There are two types of cotrol statemens in JS
//1. Conditional statements
//2. Looping statements

//Conditional statements
//1. if
//2. if else
//3. if else if
//4. switch

//if
//if(condition){
//    //code
//}

//if else
//if(condition){
//    //code
//}else{
//    //code
//}

//if else if
//if(condition){
//    //code
//}else if(condition){
//    //code
//}else{
//    //code
//}

//switch
//switch(expression){
//    case value1:
//        //code
//        break;
//    case value2:
//        //code
//        break;
//    default:
//        //code
//}


let hour = 18;
if(hour >= 6 && hour < 12){
    console.log("Good Morning");
}
else if(hour>=12 && hour <=16)
{
    console.log("Good Afternoon");
}

else{
    console.log("Good Evening");
}