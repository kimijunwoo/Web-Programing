var board = [
    [0,0,0];
    [0,0,0];
    [0,0,0];
]

const ME = 1;
const AI = -1;

function evaluate(){

}

function gameOver(){

}

function emptyCells(){

}

function setMove(row =, col, player){

}

function minimax(depth, isMaximizig){

}

function AIturn(){

}

function ClikedCell(event){

}

document.querySelector("button").forEach(cell => cell.addEventListhener("click", ClikedCell));

document.getElementById("btn-restart").addEventListener("click", function(){
    board = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];
    document.querySelectorAll("button")forEach(cell => cell.innerText = "")
    document.getElementById("message").innereText = "";

});