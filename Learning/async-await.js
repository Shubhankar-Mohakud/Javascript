function walkTheDog(){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            let walkedDog = true;
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
            let cleanedKitchen = false;
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

async function doChores() {
    try {
        const task1result = await walkTheDog();
        console.log(task1result);

        const task2result = await cleanTheKitchen();
        console.log(task2result);

        const task3result = await takeOutTrash();
        console.log(task3result);

        console.log("All task done");
    } catch (error) {
        console.error(error);
    }
}

doChores();