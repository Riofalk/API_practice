import fetch from 'node-fetch';

// Nikita 
// Maksim
// Adele

async function getData() {
    const response = await fetch("https://dummyjson.com/quotes");
    const data = await response.json();

    let authorNames = []; let nonDuplicantQuotesArray, authorQuotes = [];
    let matchWord = "you";
    let quote;

    for (let i = 0; i < data.quotes.length ; i++) {

      authorNames.push(data.quotes[i].author);
      
      quote = data.quotes[i].quote;

      if(quote.toLowerCase().split(" ").includes(matchWord)) {
        authorQuotes.push(quote);
        console.log('\n' + quote);
      }

    }
    nonDuplicantQuotesArray = Array.from(new Set(authorNames));

    return nonDuplicantQuotesArray;

}

getData().then((value) => {
  console.log(value);
});












