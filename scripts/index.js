"use strict";

const button = document.getElementById("convertBtn");

button.addEventListener("click", function () {
	var rgb = document.getElementById("input").value;

	if (isValid(rgb)) {
		var split = rgb.split(",");

		document.getElementById("result").innerHTML = RGBToHex(
			parseInt(split[0]),
			parseInt(split[1]),
			parseInt(split[2])
		);
	} else {
		document.getElementById("result").innerHTML =
			"Please insert a valid RGB value!";
	}
});

function isValid(color) {
	var split = color.split(",");

	return (
		isInRange(parseInt(split[0])) &&
		isInRange(parseInt(split[1])) &&
		isInRange(parseInt(split[2]))
	);
}

function isInRange(x) {
	return x >= 0 && x < 256;
}

function RGBToHex(r, g, b) {
	r = r.toString(16);
	g = g.toString(16);
	b = b.toString(16);

	if (r.length == 1) r = "0" + r;
	if (g.length == 1) g = "0" + g;
	if (b.length == 1) b = "0" + b;

	return "#" + r + g + b;
}
