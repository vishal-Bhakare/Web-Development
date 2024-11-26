async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data); // Output: "Data fetched!"
    } catch (error) {
        console.error(error);
    }
}

getData();

console.log("------------------------------------------------------------------------------");

async function fetchPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchPost();

