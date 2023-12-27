const promiseOne = new Promise(function(resolve, reject){
    // Do an async task; such as: DB calls, cryptography, network

    setTimeout(() => {
        console.log('Async task is complete');
    }, 1000);
 })

 promiseOne.then(function(){
    console.log("promise consumed");
 })