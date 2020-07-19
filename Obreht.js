let inland = [
    '\"The longer I live, Burke, the more I have come to understand that extraordinary people are eroded by their worries while the useless are carried ever forward by their delusions.\"',
    '\"Life\'s happiness is always a famine, and what little we find interests nobody. What use is it, the happiness of some stranger? At worst, it drives onlookers to envy; at best, it bores them.\"',
    '\"...the older she grew the more she came to recognize falsehood as the preservative that allowed the world to maintain its shape.\"',
    '\"But ain’t that how we learn to be ourselves? Failing to impress them that matter most to us?\"',
    '\"Might the dead truly inhabit the world alongside the living: laughing, thriving, growing, and occupying themselves with the myriad mundanities of afterlife, invisible merely because the mechanism of seeing them had yet to be invented?\"',
    ];

let tiger = [
    '\"When the fight is about unraveling—when it is about your name, the places to which your blood is anchored, the attachment of your name to some landmark or event—there is nothing but hate...\"',
    '\"In the end, all you want is someone to long for you when it comes time to put you in the ground.\"',
    '\"My mother always says that fear and pain are immediate, and that, when they\'re gone we\'re left with the concept, but not the true memory.\"',
    '\"We\'re all entitled to our superstitions.\"',
    '\"The fact that you are in a hurry is of no particular interest to them; in their opinion, if you are making your journey in a hurry, you are making it poorly.\"',
    ];

document.querySelector('select').onchange = function () {
    let book = document.getElementById('books');
    if (books.value === "inland")
    {
        let random = Math.floor(Math.random() * (inland.length));
            document.getElementById('quote').innerHTML = inland[random];
    }

    else if (books.value === "tiger")
    {
        let random = Math.floor(Math.random() * (tiger.length));
            document.getElementById('quote').innerHTML = tiger[random];
    }
}

//Button to generate new quote under the same book selection

function diffquote() {
    let book = document.getElementById('books');

    if (books.value === "") //if button is clicked but no book selected
    {
        document.getElementById('quote').innerHTML = "Oops, you forgot to select a book!";
    }

    else if (books.value === "inland")
    {
        let random = Math.floor(Math.random() * (inland.length));
            document.getElementById('quote').innerHTML = inland[random];
    }

    else if (books.value === "tiger")
    {
        let random = Math.floor(Math.random() * (tiger.length));
            document.getElementById('quote').innerHTML = tiger[random];
    }
}

