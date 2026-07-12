// PROMISES
// new Promise((resolve, reject)=>{asynchronous})

// function walkTheDog(callback){
//     setTimeout(() => {
//         console.log("You walked the dog");
//         callback();
//     }, 2500);
// }

// function cleanTheKitchen(callback) {
//     setTimeout(() => {
//         console.log("You cleaned the kitchen");
//         callback();
//     }, 2500);
// }

// function takeOutTrash(callback) {
//     setTimeout(() => {
//         console.log("You took out trash");
//         callback();
//     }, 2500);
// }

// walkTheDog(()=>{
//     cleanTheKitchen(()=>{
//         takeOutTrash(()=>{
//             console.log("All task completed");
//         });
//     });
// });

function walkTheDog(){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let walkedDog = false;
            if (walkedDog) {
                resolve("You walked the dog");    
            } else {
                reject("You didn't walk the dog");
            }
            
        }, 2500);
    });
}

function cleanTheKitchen() {
    

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let cleanedKitchen = true;
            if (cleanedKitchen) {
                resolve("You cleaned the kitchen");
            } else {
                reject("You didn't clean the kitchen");
            }
        }, 2500);
    });
}

function takeOutTrash() {

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let disposedTrash = true;
            if (disposedTrash) {
                resolve("You took out trash");
            } else {
                reject("You didn't take out trash");
            }
            
        }, 2500);
    });
}

walkTheDog()
    .then(value => {
        console.log(value); 
        return cleanTheKitchen();
    })
    .then(value => {
        console.log(value); 
        return takeOutTrash();
    })
    .then(value => {
        console.log(value); 
        console.log("All task Complete")
    })
    .catch(error => console.error(error));