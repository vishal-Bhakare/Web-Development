//syntax

//const promise = new Promise((resolve, reject) => {
    // Perform an asynchronous operation
//    if (/* success */ ) {
 //       resolve("Success!"); // Resolves the promise
  //  } else {
   //     reject("Error!"); // Rejects the promise
  //  }
//c}); 

// way to handle promises
/* const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
}); */

// Handling the promise
/* promise1
    .then((result) => {
        console.log(result); // Logs: "Operation was successful!"
    })
    .catch((error) => {
        console.error(error); // Logs: "Operation failed."
    }); */

console.log("-----------------------------------------------------------------------------------");


function fetchData() {

    return new Promise((resolve, reject) => {
        console.log("Fecting Data.....");

        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetch successfully....");
            } else {
                reject("Failed to fetch data....");
            }
        }, 2000);
    });
}

fetchData()
    .then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("fetch operation completed...");
    });