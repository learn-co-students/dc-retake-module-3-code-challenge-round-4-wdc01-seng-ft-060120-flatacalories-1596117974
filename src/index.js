
document.addEventListener('DOMContentLoaded', e => {
const url = "http://localhost:3000/characters"


    const getCharacters = () => {
        fetch(url)
        .then(response => response.json())
        .then(characters =>{
            // console.log(characters) to see if console was populated with the data
            renderCharacters(characters)})
    }

    const renderCharacters = characters => {
        characters.forEach(character => renderCharacter(character))
    }

    function renderCharacter(character) {
        let characterBar = document.getElementById('character-bar')
        let span = document.createElement('span')
        span.innerText = character.name
        characterBar.appendChild(span)
    

    const name = document.getElementById('name')
    name.innerText = character.name

    const image = document.getElementById('image')
    image.src = character.image 

    const calories = document.getElementById('calories')
    calories.innerText = character.calories
    }
    
    const button = document.querySelector('button[type="submit"]')
    button.addEventListener
 
    /* const addCalories = (calories) =>
    //  param = {
    //      method: 'PATCH',
    //      headers: {
    //          "content-type": "application/json",
    //          "accept": "application/json"
    //      },
    //      body: JSON.stringify(calories)
    //     }
    //      fetch(url)
    // } */ 



    getCharacters();
    renderCharacters()


})