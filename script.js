import fetch from 'node-fetch';

// Nikita 
// Maksim
// Adele

async function getData() {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();

    let authorNames = [];
    let nonDuplicantArray = [];
    for (let i = 0; i < data.quotes.length ; i++) {
      authorNames.push(data.quotes[i].author);
    }
    nonDuplicantArray = Array.from(new Set(authorNames));


    return nonDuplicantArray;
}

let authorNames = [];

getData().then((value) => {
  console.log(value);
});













