const passMeAFunction = (fun1) => {
    console.log("wait 1 sec...");
    setTimeout(() => {
        fun1(undefined, [1,2,3]);
    }, 1000)
}

//we are going to call the function "callthis" and pass into it another function
passMeAFunction( (error, result) => {
    if (error) {
        return console.log(error);
    }
    console.log(result);
})