let blind = [
    '\"If you knew what was going to happen, if you knew everything that was going to happen next—if you knew in advance the consequences of your own actions—you\'d be doomed. You\'d be ruined as God. You\'d be a stone. You\'d never eat or drink or laugh or get out of bed in the morning. You\'d never love anyone, ever again. You\'d never dare to.\"',
    '\"Beginnings are sudden, but also insidious. They creep up on you sideways, they keep to the shadows, they lurk unrecognized. Then, later, they spring.\"',
    '\"Why does the mind do such things? Turn on us, rend us, dig the claws in. If you get hungry enough, they say, you start eating your own heart. Maybe it\'s much the same.\"',
    '\"Happiness is a garden walled with glass: there\'s no way in or out. In Paradise there are no stories, because there are no journeys. It\'s loss and regret and misery and yearning that drive the story forward, along its twisted road.\"',
    '\"\'Should\' is a futile word. It\'s about what didn\'t happen. It belongs in a parallel universe. It belongs in another dimension of space.\"',
    ];

let cat = [
    '\"Another belief of mine: that everyone else my age is an adult, whereas I am merely in disguise.\"',
    '\"Love blurs your vision; but after it recedes, you can see more clearly than ever. It\'s like the tide going out, revealing whatever\'s been thrown away and sunk: broken bottles, old gloves, rusting pop cans, nibbled fishbodies, bones. This is the kind of thing you see if you sit in the darkness with open eyes, not knowing the future.\"',
    '\"Knowing too much about other people puts you in their power, they have a claim on you, you are forced to understand their reasons for doing things and then you are weakened.\"',
    '\"I knew what love was supposed to be: obsession with undertones of nausea.\"',
    '\"Happy as a clam, is what my mother says for happy. I am happy as a clam: hard-shelled, firmly closed.\"',
    ];

let hand = [
    '\"Better never means better for everyone...It always means worse, for some.\"',
    '\"We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories.\"',
    '\"\'There is more than one kind of freedom,\' said Aunt Lydia. \'Freedom to and freedom from. In the days of anarchy, it was freedom to. Now you are being given freedom from. Don\'t underrate it.\'\"',
    '\"But people will do anything rather than admit that their lives have no meaning. No use, that is. No plot.\"',
    '\"We thought we had such problems. How were we to know we were happy?\"',
    ];

document.querySelector('select').onchange = function () {
    let book = document.getElementById('books');
    if (books.value === "blind")
    {
        let random = Math.floor(Math.random() * (blind.length));
            document.getElementById('quote').innerHTML = blind[random];
    }

    else if (books.value === "cat")
    {
        let random = Math.floor(Math.random() * (cat.length));
            document.getElementById('quote').innerHTML = cat[random];
    }

    else if (books.value === "hand")
    {
        let random = Math.floor(Math.random() * (hand.length));
            document.getElementById('quote').innerHTML = hand[random];
    }
}

//Button to generate new quote under the same book selection

function diffquote() {
    let book = document.getElementById('books');

    if (books.value === "") //if button is clicked but no book selected
    {
        document.getElementById('quote').innerHTML = "Oops, you forgot to select a book!";
    }

    else if (books.value === "blind")
    {
        let random = Math.floor(Math.random() * (blind.length));
            document.getElementById('quote').innerHTML = blind[random];
    }

    else if (books.value === "cat")
    {
        let random = Math.floor(Math.random() * (cat.length));
            document.getElementById('quote').innerHTML = cat[random];
    }

    else if (books.value === "hand")
    {
        let random = Math.floor(Math.random() * (hand.length));
            document.getElementById('quote').innerHTML = hand[random];
    }
}

//doesn't work, each book is overriding the other :C

//ORIGINAL C:
// document.querySelector('select').onchange = function blindquote() {
//     let book = document.getElementById('blind').selected;
//         let random = Math.floor(Math.random() * (blind.length));
//             document.getElementById('quote').innerHTML = blind[random];
//     }