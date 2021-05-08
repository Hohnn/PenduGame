const myWords = [
    "BONJOUR",
    "AUREVOIR",
    "SALUT",
    "HELLO",
    "HOLA",
]

var word = document.getElementById("word");
let wordselected;
let wordLength;
const output = document.getElementById('output')
const letterOne = document.querySelectorAll('button[data-button="letter"]');
const shoot = document.getElementById('shoot')
const retry = document.getElementById("retry")
const myblur = document.getElementById("blur")
const finish = document.getElementById("finish")
const finishState = document.getElementById("finishState")
retry.addEventListener('click', () => {
    recommence()
    myblur.classList.remove('blur')
    finish.classList.add('d-none')
    output.classList.remove('crash')
})
// PAS FINI !! au click lancer une recherche aléatoire des mots, puis afficher le mot selectionné au tableau
const start = document.getElementById("start")
start.addEventListener("click", () => {
    recommence()
    start.innerHTML = 'RESTART'
    output.classList.add('starting')
});

function recommence() {
    myloose = 0
    myWin = 0
    miss2.innerHTML = 'Misses : 0'
    var el = document.getElementById("word");
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
    let randomisation = Math.floor(Math.random() * myWords.length);
    console.log(randomisation)
    if (wordselected == myWords[randomisation]) {
        if (randomisation == 0) {
            randomisation++
        } else {
            randomisation--
        }
    }
    wordselected = myWords[randomisation];
    wordLength = wordselected.length;
    console.log(wordselected);
    console.log(wordLength);
    for (i = 0; i < wordLength; i++) {
        console.log(wordselected);
        let newdiv = document.createElement("div");
        newdiv.className = "wordBorder transparent";
        word.append(newdiv);
        newdiv.innerHTML = wordselected[i];

        for (let i = 0; i < letterOne.length; i++) {
            letterOne[i].classList.remove("transparent2");
            letterOne[i].classList.remove("false");


        }
    }
}


// mettre les bouton dans la constante letterOne
let myWin = 0;
let myloose = 0;
let perdu;
let gg = 0
let difficulty = 8
const ennemi = document.getElementById("ennemi")
const miss2 = document.getElementById('miss2')
// recupérer la lettre en cliquant sur le bouton
letterOne.forEach(element => (
    element.addEventListener("click", function () {
            let letter = this.dataset.translate;
            console.log(word)
            shoot.classList.remove('anim')
            void shoot.offsetWidth;
            shoot.classList.add('anim')
            gg = 0
            for (let i = 0; i < wordLength; i++) {
                console.log(element)
                
                console.log(word.childNodes[i].innerHTML)
                if (element.innerHTML == word.childNodes[i].innerHTML) {
                    console.log("ca marche")

                    setTimeout(function () {

                        word.childNodes[i].classList.remove("transparent");
                        element.classList.add("transparent2");
                        ennemi.classList.remove('hit')
                        void ennemi.offsetWidth;
                        ennemi.classList.add('hit')
                    }, 900);
                    
                    myWin++
                } else {
                    element.classList.add("false");
                    gg++

                }
            }
            if (gg == wordLength) {
                myloose++
                miss2.innerHTML = 'Misses : ' + myloose

            }
            if (myWin == wordLength) {
                myWin = 0;
                myloose = 0;
                finishState.innerHTML = 'You Win ! <br>' + wordselected + ' is destroy'
                finish.classList.remove('d-none')
                myblur.classList.add('blur')
                output.classList.add('crash')
                
            }
            console.log(myloose);
            if (myloose == difficulty) {
                myWin = 0;
                myloose = 0;
                finishState.innerHTML = 'You fail ! <br> The enemy was ' + wordselected
                finish.classList.remove('d-none')
                myblur.classList.add('blur')

            }

        }

    )
));

const miss = document.getElementById('miss')

let hard = document.getElementById("hard")
hard.addEventListener("click", () => {
    difficulty = 5;
    hard.classList.add("difficulty");
    easy.classList.remove("difficulty");
    normal.classList.remove("difficulty");
    miss.innerHTML = 'Misses allowed : ' + difficulty
})

let easy = document.getElementById("easy")
easy.addEventListener("click", () => {
    difficulty = 12;
    easy.classList.add("difficulty");
    hard.classList.remove("difficulty");
    normal.classList.remove("difficulty");
    miss.innerHTML = 'Misses allowed : ' + difficulty
})

let normal = document.getElementById("normal")
normal.addEventListener("click", () => {
    difficulty = 8;
    normal.classList.add("difficulty");
    easy.classList.remove("difficulty");
    hard.classList.remove("difficulty");
    miss.innerHTML = 'Misses allowed : ' + difficulty
})