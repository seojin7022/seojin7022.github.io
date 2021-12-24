const quotes = [
    {
        quote: "Love For All, Hatred For None.",
        author: "Khalifatul Masih III"
    },
    {
        quote: "Change the world by being yourself.",
        author: "Amy Poehler"
    },
    {
        quote: "Every moment is a fresh beginning.",
        author: "T.S Eliot"
    },
    {
        quote: "Never regret anything that made you smile.",
        author: "Mark Twain"
    },
    {
        quote: "Die with memories, not dreams.",
        author: "Unknown"
    },
    {
        quote: "Aspire to inspire before we expire.",
        author: "Unknown"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci"
    },
    {
        quote: "Whatever you do, do it well.",
        author: "Walt Disney"
    },
    {
        quote: "What we think, we become.",
        author: "Buddha"
    },
];

function getRandom(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[getRandom(quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;