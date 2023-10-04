const getQuote = async () => {
    const response = await fetch('https://zenquotes.io/api/quotes/');
    const data = await response.json();
    // return data[0];
    return data[0].q;
}
export default getQuote;