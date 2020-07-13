menu = initMenu();

window.onload = slideshow;


cake = [];
for(i=0;i<menu.length;i++) {
	cake[i] = menu[i];
}
var current_cake = 0;

function slideshow() {

	if (current_cake == menu.length) {
		current_cake = 0;
	}

	document.getElementById("cakeimg").src = "../image/"+cake[current_cake].imagefile;
	document.getElementById("cakename").innerHTML = cake[current_cake].description;
	document.getElementById("carbohydrate").innerHTML = cake[current_cake].nutrition[0].percentage;
	document.getElementById("protein").innerHTML = cake[current_cake].nutrition[1].percentage;
	document.getElementById("fat").innerHTML = cake[current_cake].nutrition[2].percentage;
	document.getElementById("cholesterol").innerHTML = cake[current_cake].nutrition[3].percentage;
	document.getElementById("total").innerHTML = cake[current_cake].nutrition[0].percentage + cake[current_cake].nutrition[1].percentage + cake[current_cake].nutrition[2].percentage + cake[current_cake].nutrition[3].percentage;
	document.write
	setTimeout("slideshow()",3000);
	current_cake++;
}
