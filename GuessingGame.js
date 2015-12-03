
var view = {
showAnswer: function (index) {
//	showAnswer: function () {	
		var imagespot = document.getElementById("imagespot");
		imagespot.src = "files/zero.jpg";
		
	//	imagespot.src = "files/"+ model.clearImages[index];
	}
}

var model = {
	blurredImages: ["zeroblur.jpg","oneblur.jpg","twoblur.jpg","threeblur.jpg","fourblur.jpg","fiveblur.jpg"],
	clearImages: ["zero.jpg","one.jpg","two.jpg","three.jpg","four.jpg","five.jpg"],

}

function init() {
 	var firstImageIndex = Math.floor(Math.random()*6);
	var imagespot = document.getElementById("imagespot");
	imagespot.src = "files/"+model.blurredImages[firstImageIndex];
	
	imagespot.src = "files/zeroblur.jpg";
//	imagespot.onmouseover = view.showAnswer;
//	imagespot.onclick = view.showAnswer;

imagespot.onclick = view.showAnswer(firstImageIndex);
}


window.onload = init;

