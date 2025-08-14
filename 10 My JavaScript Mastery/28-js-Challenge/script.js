const maxCharacters = 60;
const input = document.getElementById('myInput');

function updateRemainingCharacters() {
    const remaining = maxCharacters - input.value.length;
    document.getElementById('remaining').textContent = remaining;
}

input.addEventListener("input", updateRemainingCharacters);

// done by me