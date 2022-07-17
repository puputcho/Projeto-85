canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

greencarWidth = 75;
greencarHeight = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencarX = 5;
greencarY = 225;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = backgroundImage

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadGreenCar;
	greencar_imgTag.src = greencarImage
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencarX, greencarY, greencarWidth, greencarHeight)
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencarY >=0) {
		greencarY = greencarY - 10
		uploadBackground()
		uploadGreenCar()
	}
}

function down()
{
	if (greencarY <=400) {
		greencarY = greencarY + 10
		uploadBackground()
		uploadGreenCar()
	}
}

function left()
{
	if (greencarX >=0) {
		greencarX = greencarX - 10
		uploadBackground()
		uploadGreenCar()
	}
}

function right()
{
	if (greencarX <=800) {
		greencarX = greencarX + 10
		uploadBackground()
		uploadGreenCar()
	}
}
