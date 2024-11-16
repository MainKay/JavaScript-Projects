let character = document.getElementById("character");
let block = document.getElementById("block");
let game = document.getElementById("game");

function jump() {
	if (!character.classList.contains("animate")) {
		character.classList.add("animate");
		setTimeout(function () {
			character.classList.remove("animate");
		}, 500);
	}
}

function resetGame() {
	block.style.animation = "none";
	setTimeout(function () {
		block.style.animation = "block 1s infinite linear";
	}, 10);
}

let checkDead = setInterval(function () {
	let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
	let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

	// Warunek kolizji
	if (blockLeft < 100 && blockLeft > 20 && characterTop >= 120 && characterTop <= 150) {
		block.style.animation = "none";
		alert("Oh no! Potato is dead! :(");
		resetGame();
	}
}, 10);

document.addEventListener("click", jump);