function roll(){
    const numberOfDice = document.getElementById("numberOfDice").value;
    const textResult = document.getElementById("textResult");
    const imgResult = document.getElementById("imgResult");
    let diceText = [];
    let diceImg = [];

    // ambil value dari number
    for(let i = 0; i < numberOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        diceText.push(value);
        diceImg.push(`<img src="img/${value}.png">`);
    }
    textResult.textContent = `dice: ${diceText.join(', ')}`;
    imgResult.innerHTML = diceImg.join('');
}