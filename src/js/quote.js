const quotes = [
  { quote: "첫번째 명언", author: "작가1" },
  { quote: "두번째 명언", author: "작가2" },
  { quote: "세번째 명언", author: "작가3" },
  { quote: "네번째 명언", author: "작가4" },
  { quote: "다섯번째 명언", author: "작가5" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log(todayQuote);
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
