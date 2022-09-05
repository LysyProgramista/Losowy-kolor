function randomColor() {
	let random = "#";
	let randomChar = "";

	for (i = 0; i < 3; i++) {
		while (randomChar.length != 2) {
			randomChar = parseInt(Math.random() * 255).toString(16);
		}
		random += randomChar;
		randomChar = "";
	}
	return random;
}

window.onload = function () {
	let button = document.querySelector("#button");
	button.addEventListener("click", function () {
		let backgroundDiv = document.querySelector("#text");
		let color = randomColor();
		backgroundDiv.innerHTML =
			'<span id="h">Random color</span>' +
			'<span id="random">' +
			color +
			"</span>";
		let random = document.querySelector("#random");
		random.style.color = color;

		document.body.style.backgroundColor = color;
		random.addEventListener("click", function () {
			navigator.clipboard.writeText(color);
			random.innerHTML = "Copied!";
		});
		random.addEventListener("mouseover", function () {
			random.style.textTransform = "uppercase";
			random.innerHTML = "Click to copy!";
		});
		random.addEventListener("mouseout", function () {
			random.innerHTML = color;
		});
	});
};
