export function randomQuote(quotes, prev_quote) {
  let rand = Math.floor(Math.random() * quotes.length);
  if (prev_quote) {
    while (prev_quote === quotes[rand]) {
      rand = Math.floor(Math.random() * quotes.length);
    }
  }

  let result = quotes[rand];
  return result;
}
