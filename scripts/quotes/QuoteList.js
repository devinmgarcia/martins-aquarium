
import { getQuotes } from "../database.js"

export const quoteList = () => {

    const quotes = getQuotes()

    let htmlString = '<article class="quotes">'

    for (const quote of quotes) {
        htmlString += `
        <div class="quote">${quote.text}</div>
        `
    }

    htmlString += `</article>`;

    return htmlString;
};

const target = document.querySelector(".dynamicQuote");

target.innerHTML = quoteList();