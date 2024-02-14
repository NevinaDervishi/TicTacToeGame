let currentPlayer = "X";

function clickOnSquare(id) {
    console.log("Square clicked: ", id); // Add this line
    document.getElementById(id).innerHTML = currentPlayer;
    if (checkWinner(currentPlayer)) {
        alert(currentPlayer + " is the winner!");
    } else {
        if (currentPlayer === 'X') {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
    }
}

function resetGame(){
    for(let i = 0; i < 9; i++){
        document.getElementById(i).innerHTML = '';
    }
}

function checkWinner(player) {
    const squares = [];
    for (let i = 0; i < 9; i++) {
        squares.push(document.getElementById(i).innerHTML);
    }
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (const combo of winningCombos) {
        if (squares[combo[0]] === player && squares[combo[1]] === player && squares[combo[2]] === player) {
            return true;
        }
    }
    return false;
}
function sendMessage() {
    const messageInput = document.getElementById('chat-input');
    const message = messageInput.value.trim();
    if (message !== '') {
        const chatMessages = document.getElementById('chat-messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

