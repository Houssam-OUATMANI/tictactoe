const cells = document.querySelectorAll(".cell")
let currentPlayer = "X"
let board = Array(9).fill("")
const overlay = document.querySelector(".overlay")
let gameIsActive = true





function handleClick (event) {
    const id = event.target.dataset.id
    if(board[id] !== "" || !gameIsActive) return
    board[id] = currentPlayer
    event.target.textContent = currentPlayer

    if(checkForWin()) {
        displayResult(`Le joueur ${currentPlayer} a gagne` )
    }
    else if(!board.includes("")) {
        displayResult(`Match nul` )
    }
    else currentPlayer = currentPlayer === "X" ? "O" : "X"

}

function displayResult(message) {
    overlay.style.display = "flex"
    overlay.querySelector("h1").textContent = message
    gameIsActive = false

}


function resetGame() {
    overlay.style.display = "none"
    board = Array(9).fill("")
    currentPlayer = "X"
    gameIsActive = true
    cells.forEach(cell => cell.textContent = "")
}

function checkForWin() {
    const combs = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
return combs.some(comb =>  {
    const [a,b,c] = comb
    return board[a] && board[a] === board[b] &&  board[a] === board[c]
})
}



function main () {
    cells.forEach(cell => cell.addEventListener("click", handleClick))
    overlay.querySelector("button").addEventListener("click", resetGame)
}

main()