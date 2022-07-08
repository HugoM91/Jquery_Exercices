//Restart Button 
var restart = document.querySelector("#b");
//Get all Squares
var squares = document.querySelectorAll('td');

//Clear Squares
function clearSquare() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener("click", clearSquare);

//Check square marker


function changeSquare(){

    
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}


for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click',changeSquare)
}

//Add the event