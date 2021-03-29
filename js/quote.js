const getQuoteOfTheDay = async () => {
  const result = await fetch('https://quotes.rest/qod?language=en');
  const parsedResult = await result.json();
  return parsedResult;
}

const setQuote = async () => {
  const quote = new DOMReference('quote');
  const quoteAuthor = new DOMReference('quoteAuthor');

  const QOD = await getQuoteOfTheDay();
  const sentence = QOD.contents.quotes[0].quote;
  const author = QOD.contents.quotes[0].author;
  quote.setContent(sentence);
  quoteAuthor.setContent(author);
}