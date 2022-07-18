const grid = document.querySelector('.grid')


const characters = [
    'cross',
    'dusk',
    'jiro',
    'mirage',
    'petra',
    'ragnir',
    'rayman',
    'thor',
    'xull',
    'yumiko',
    'koji',
    'sidra',
    'scarlet',
    'kaya',
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const checkEndGame = () => {
const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length == 28) {
        setTimeout(() =>{
            alert('Parabens AGORA VC PODE LARGAR SUA PLANCHE!')
        }, 300)
        
    }

}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secundCharacter = secundCard.getAttribute('data-character');

    if (firstCharacter == secundCharacter) {

        firstCard.firstChild.classList.add('disabled-card');
        secundCard.firstChild.classList.add('disabled-card');

        firstCard = '';
        secundCard = '';

        checkEndGame();

    } else 

    setTimeout(() => {
        firstCard.classList.remove('reveal-card');
        secundCard.classList.remove('reveal-card');

        firstCard = '';
        secundCard = '';
        
    }, 500)

    
}

let firstCard = '';
let secundCard = '';


const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if (firstCard == '') {

        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secundCard == '') {

        target.parentNode.classList.add('reveal-card');
        secundCard = target.parentNode;

        checkCards()
    }

    

}


const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);
    
    card.addEventListener('click', revealCard);

    card.setAttribute('data-character', character)

    return card;

}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters]
    const shuffledArray = duplicateCharacters.sort(() => Math.random()- 0.5)

    shuffledArray.forEach((character) => {
     
        const card = createCard(character)
        grid.appendChild(card)
        
    })
}
loadGame()