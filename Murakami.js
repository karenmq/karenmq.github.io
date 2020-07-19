let Q = [
    '\"I can bear any pain as long as it has meaning.\"',
    '\"That\'s what the world is , after all: an endless battle of contrasting memories.\"',
    '\"You can keep as quiet as you like, but one of these days somebody is going to find you.\"',
    '\"Life is so uncertain: you never know what could happen. One way to deal with that is to keep your pajamas washed.\"',
    '\"Everyone, deep in their hearts, is waiting for the end of the world to come.\"',
    ];

let Dance = [
    '\"As time goes on, you\'ll understand. What lasts, lasts; what doesn\'t, doesn\'t. Time solves most things. And what time can\'t solve, you have to solve yourself.\"',
    '\"What we seek is some kind of compensation for what we put up with.\"',
    '\"Life is a lot more fragile than we think. So you should treat others in a way that leaves no regrets. Fairly, and if possible, sincerely.\"',
    '\"\'Dance,\' said the Sheep Man. \'Yougottadance. Aslongasthemusicplays. Yougotta dance. Don\'teventhinkwhy.\'\"',
    '\"Possibilities are like cancer. The more I think about them, the more they multiply, and there\'s no way to stop them. \"',
    ];

let Kafka = [
    '\"Memories warm you up from the inside. But they also tear you apart\"',
    '\"And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won\'t be the same person who walked in. That\'s what this storm\'s all about.\"',
    '\"If you remember me, then I don\'t care if everyone else forgets.\"',
    '\"Silence, I discover, is something you can actually hear.\"',
    '\"At around 6 p.m. on the evening of the 29th, residents of the *-chome district of Nakano Ward were startled when some 2,000 sardines and mackerel rained down from the sky.\"',
    ];

let Sheep = [
    '\"The world is mediocre. About that there is no mistake. Well then, has the world been mediocre since time immemorial? No. In the beginning, the world was chaos, and chaos is not mediocre.\"',
    '\"No frills.\"',
    '\"Symbols are what you might call the honorary town councillors of the worm universe. In the worm universe, there is nothing unusual about a dairy cow seeking a pair of pliers. A cow is bound to get her pliers sometime. It has nothing to do with me.\"',
    '\"Why, ninety-five percent of the information that reaches you has already been preselected and paid for.\"',
    '\"The real question, though, was why the devil wanted to take over the town to begin with. All it was was a miserable nothing of a few blocks surrounded by cornfields.\"',
    ];

let Bird = [
    '\"Is it possible, in the final analysis, for one human being to achieve perfect understanding of another?\"',
    '\"Spend your money on the things money can buy. Spend your time on the things money can\'t buy.\"',
    '\"\'Everybody\'s born with some different thing at the core of their existence. And that thing, whatever it is, becomes like a heat source that runs each person from the inside. I have one too, of course.\'\"',
    '\"When you\'re supposed to go down, find the deepest well and go down to the bottom. When there\'s no flow, stay still. If you resist the flow, everything dries up. If everything dries up, the world is darkness.\"',
    '\"I\'m not so weird to me.\"',
    ];

document.querySelector('select').onchange = function () {
    let book = document.getElementById('books');
    if (books.value === "Q")
    {
        let random = Math.floor(Math.random() * (Q.length));
            document.getElementById('quote').innerHTML = Q[random];
    }

    else if (books.value === "Dance")
    {
        let random = Math.floor(Math.random() * (Dance.length));
            document.getElementById('quote').innerHTML = Dance[random];
    }

    else if (books.value === "Kafka")
    {
        let random = Math.floor(Math.random() * (Kafka.length));
            document.getElementById('quote').innerHTML = Kafka[random];
    }

    else if (books.value === "Sheep")
    {
        let random = Math.floor(Math.random() * (Sheep.length));
            document.getElementById('quote').innerHTML = Sheep[random];
    }

    else if (books.value === "Bird")
    {
        let random = Math.floor(Math.random() * (Bird.length));
            document.getElementById('quote').innerHTML = Bird[random];
    }
}

//Button to generate new quote under the same book selection

function diffquote() {
    let book = document.getElementById('books');

    if (books.value === "") //if button is clicked but no book selected
    {
        document.getElementById('quote').innerHTML = "Oops, you forgot to select a book!";
    }

    else if (books.value === "Q")
    {
        let random = Math.floor(Math.random() * (Q.length));
            document.getElementById('quote').innerHTML = Q[random];
    }

    else if (books.value === "Dance")
    {
        let random = Math.floor(Math.random() * (Dance.length));
            document.getElementById('quote').innerHTML = Dance[random];
    }

    else if (books.value === "Kafka")
    {
        let random = Math.floor(Math.random() * (Kafka.length));
            document.getElementById('quote').innerHTML = Kafka[random];
    }

    else if (books.value === "Sheep")
    {
        let random = Math.floor(Math.random() * (Sheep.length));
            document.getElementById('quote').innerHTML = Sheep[random];
    }

    else if (books.value === "Bird")
    {
        let random = Math.floor(Math.random() * (Bird.length));
            document.getElementById('quote').innerHTML = Bird[random];
    }
}

