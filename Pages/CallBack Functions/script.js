function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  // Calling the function with a callback
  greet("Alice", sayGoodbye);

console.log("------------------------------------------------")


function fetchData(callback) {
   
    console.log("Fetching data...");
    
    setTimeout(() => {
      console.log("Data fetched!");
      callback("Sample Data");
    }, 2000); // Simulates a 2-second delay
  }
  
  function processData(data) {
    console.log("Processing:", data);
  }
  
  // Call fetchData and pass processData as the callback
  fetchData(processData);
  