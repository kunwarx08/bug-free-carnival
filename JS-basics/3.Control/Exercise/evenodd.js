function showNumbers(limit){
    for(i=0;i<=limit;i++){
        // if(i % 2 == 0)
        // console.log(i,'Even');
        // else
        // console.log(i,'ODD');

        const message = (i % 2 == 0 ? 'Even' : 'Odd');//using terinary operator
        console.log(i, message);

    }
}

showNumbers(10);