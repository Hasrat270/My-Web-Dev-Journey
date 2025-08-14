function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // + Do this "1" ==> 1
    
    playerConfigOverlay.style.display = 'block';
    backdrop.style.display = 'block';
}

function closePlayerConfig() {
    playerConfigOverlay.style.display = 'none';
    backdrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(formElement);
    const enteredPlayerName = formData.get('playername').trim(); // remove white space before and after content


    if (!enteredPlayerName) { // enteredPlayerName ==== " "
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return; // stop the function
    }

    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName; // change the name in the html

    // if (editedPlayer === 1) {
    //     players[0].name = enteredPlayerName;
    // } else {
    //     players[1].name = enteredPlayerName;
    // }
    players[editedPlayer - 1].name = enteredPlayerName; // editedPlayer - 1 === 0 || 1

    closePlayerConfig();
}