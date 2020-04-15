const answerBox = document.querySelector("#answerBox");
const equationsBox = document.querySelector("#equationsBox");


const numBtns = document.querySelectorAll(".num");
numBtns.forEach((button) => {
    addEventListener('click', clickNum)
})

function clickNum(){
    if (event.target.className == "num"){
        let val = event.target.textContent;
        equationsBox.innerHTML += val;
    }
}


