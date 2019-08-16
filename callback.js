//the arguments reside here
const aFuncThatAcceptsAFunc = (fun1) => {
    console.log("wait 1 sec...");
    setTimeout(() => {
        fun1(undefined, [1,2,3]);
    }, 1000)
}

//the logic resides here
//the if statement resides here to discern between error and response
aFuncThatAcceptsAFunc( (error, result) => {
    if (error) {
        return console.log(error);
    }
    console.log(result);
})