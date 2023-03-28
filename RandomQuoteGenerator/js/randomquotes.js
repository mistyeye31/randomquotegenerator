function generateQuote() {
    const quotes = [
        {
            quotes : "This is my first quote.",
            author : "Sam Garcia"
        },
        {
            quotes : "This is my second quote.",
            author : "Miguel Garcia"
        },   
        {
            quotes : "This is my third quote.",
            author : "Julia Garcia"
        },  
        {
            quotes : "This is my fourth quote.",
            author : "Bill Wegner"
        }, 
        {
            quotes : "This is my fifth quote.",
            author : "Erin Garcia"
        }
    ];

    let currentQuote = Math.floor(Math.random() * quotes.length);
    //console.log(currentQuote);

    document.getElementById('quotation').innerHTML = "&quot;" + quotes[currentQuote].quotes + "&quot;";
    document.getElementById('author').innerHTML = "-" + quotes[currentQuote].author;


}

window.onload = function() {
    generateQuote();
    //document.getElementById('generate').addEventListener('click', generateQuote);

}

