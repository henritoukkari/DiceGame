const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
const randomIMG1 = src="./images/dice" + [randomNumber1] + '.png'
const randomIMG2 = src="./images/dice" + [randomNumber2] + '.png'

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");

document.querySelector(".img1").src = randomIMG1;
document.querySelector(".img2").src = randomIMG2;


const header = document.querySelector(".h1");

if(randomNumber1 > randomNumber2){
    header.innerHTML = "Player 1 wins";
}else if(randomNumber2 > randomNumber1){
    header.innerHTML = "Player 2 wins";
}else{
    header.innerHTML = "It's a draw!"
}



