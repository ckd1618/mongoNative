
//the arguments reside here
//the if statement resides here to discern between error and response
const aPromThatAcceptsAProm = new Promise( (resolve, reject) => {
    console.log("wait 1 sec for promise to trigger");
    setTimeout(() => {
        var rejectArg = undefined;
        var resolveArg = [10,20,30,40];
        if (rejectArg) {
            return reject(rejectArg);
        }
        resolve( resolveArg);
    }, 1000);
})

//the logic resides here
aPromThatAcceptsAProm.then( (resolve) => {
    console.log('Success', resolve);
}).catch( (reject) => {
    console.log('Error', reject);
})