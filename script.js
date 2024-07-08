
const counter = {
    one : 0, two : 0, three : 0,
    four : 0, five : 0, six : 0
}

// function to return random color via rgb
const rbgNum = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// function to be called with event initialiaation
const rollDice = () => {

    const heading = document.getElementById('heading');
    const diceResult = document.getElementById('dice-result');

    const diceImages = document.getElementById('dice-images');
    const roll = document.getElementById("roll-dice")

    roll.style.cssText = "bottom: 60px; left: 50%; transform: translateX(-50%); font-size: 1.5rem; position: absolute; padding: 5px 40px; border-radius: 25px; border: none; background-color: rgb(42, 165, 61); color: yellow; font-weight: bold; cursor: pointer;"
    heading.style.display = 'none';

    let value = Math.floor(Math.random() * 6 ) + 1;

// switch to track each dice roll and display image with each event
    switch (value) {
    
        case 1 :
        counter.one += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 2 :
        counter.two += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 3 :
        counter.three += 1;
        images.push(`<img class="dice-face" src="/${value}.png" alt ="Dice ${value}">`);
        break;

        case 4 :
        counter.four += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 5 :
        counter.five += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        break;

        case 6 :
        counter.six += 1;
        images.push(`<img class="dice-face" src="${value}.png" alt ="Dice ${value}">`);
        // TODO ENTER SECOND ROLL HERE
        break;
    }
    
// empty image container to prevent multi-images loading
    diceImages.innerHTML = "";

// add the image to the html with each itertion of the event
    const img = document.createElement('img');
    img.src = `${value}.png`;
    img.alt = `Dice ${value}`;
    img.style.cssText = `border: 50px solid ${rbgNum()}; border-radius: 121px; background-color: ${rbgNum()};`
    diceImages.appendChild(img);

    dice.appendChild(roll);
    

// Add hover effect to roll
roll.classList.add("post-event-button");
    
};
document.getElementById("roll-dice").addEventListener('click', rollDice)


const images = [];
const tracker = [];
