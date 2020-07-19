let castle = [
    '\"You misinterpret everything, even the silence.\"',
    '\"If a man has his eyes bound, you can encourage him as much as you like to stare through the bandage, but he\'ll never see anything.\"',
    '\"There\'s no quiet place here on earth for our love, not in the village and not anywhere else, so I picture a grave, deep and narrow, in which we embrace as if clamped together, I bury my face against you, you yours against me, and no one will ever see us.\"',
    '\"One must fight to get to the top, especially if one starts at the bottom.\"',
    '\"Since I met you, I\'ve felt abandoned without your nearness; your nearness is all I ever dream of, the only thing.\"',
    ];

let trial = [
    '\"It\'s only because of their stupidity that they\'re able to be so sure of themselves.\"',
    '\"From a certain point onward there is no longer any turning back. That is the point that must be reached.\"',
    '\"Logic may indeed be unshakeable, but it cannot withstand a man who is determined to live.\"',
    '\"Someone must have slandered Josef K., for one morning, without having done anything truly wrong, he was arrested.\"',
    '\"\'No,\' said the priest, \'you don\'t need to accept everything as true, you only have to accept it as necessary.\'\"',
    ];

document.querySelector('select').onchange = function () {
    let book = document.getElementById('books');
    if (books.value === "castle")
    {
        let random = Math.floor(Math.random() * (castle.length));
            document.getElementById('quote').innerHTML = castle[random];
    }

    else if (books.value === "trial")
    {
        let random = Math.floor(Math.random() * (trial.length));
            document.getElementById('quote').innerHTML = trial[random];
    }
}

//Button to generate new quote under the same book selection

function diffquote() {
    let book = document.getElementById('books');

    if (books.value === "") //if button is clicked but no book selected
    {
        document.getElementById('quote').innerHTML = "Oops, you forgot to select a book!";
    }

    else if (books.value === "castle")
    {
        let random = Math.floor(Math.random() * (castle.length));
            document.getElementById('quote').innerHTML = castle[random];
    }

    else if (books.value === "trial")
    {
        let random = Math.floor(Math.random() * (trial.length));
            document.getElementById('quote').innerHTML = trial[random];
    }
}

//doesn't work, each book is overriding the other :C

//ORIGINAL C:
// document.querySelector('select').onchange = function blindquote() {
//     let book = document.getElementById('blind').selected;
//         let random = Math.floor(Math.random() * (blind.length));
//             document.getElementById('quote').innerHTML = blind[random];
//     }