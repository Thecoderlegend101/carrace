canvas = document.getElementById('myCanvas')
ctx = canvas.getContext("2d");
car1_width = 100;
car1_height = 90;
car1_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI8yLuih1SAiwj_syyaVqNUNmmXysHBmKyFA&usqp=CAU";
car1_x = 10;
car1_y = 10;


car2_width = 100;
car2_height = 90;
car2_image = "https://i.postimg.cc/YqdnnNX1/car1.png";
car2_x = 10;
car2_y = 100;


function add() {
	backgroundimgtag = new Image()
	backgroundimgtag.onload = uploadBackground;
	backgroundimgtag.src = "https://i.postimg.cc/bv5d35nK/racing.jpg"

	car1imgtag = new Image();
	car1imgtag.onload = uploadcar1;
	car1imgtag.src = car1_image;

	car2imgtag = new Image();
	car2imgtag.onload = uploadcar2;
	car2imgtag.src = car2_image;

}

speed = 10

function uploadBackground() {
	ctx.drawImage(backgroundimgtag, 0, 0, canvas.width, canvas.height)
}

function uploadcar1() {
	ctx.drawImage(car1imgtag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
	ctx.drawImage(car2imgtag, car2_x, car2_y, car2_width, car2_height);
}



window.addEventListener('keydown', my_keydown)

function my_keydown(e) {
    keyPressed = e.keyCode;
	if (keyPressed == "38") {
		
		car1_up();
	}
	if (keyPressed == "40") {
		
		car1_down();
	}
	if (keyPressed == "39") {
		
		car1_right();
	}
	if (keyPressed == "37") {
		
		car1_left();
	}

	if (keyPressed == "87") {

		car2_up()
	}
	if (keyPressed == "83") {

		car2_down()
	}
	if (keyPressed == "68") {

		car2_right()
	}
	if (keyPressed == "65") {

		car2_left()
	}
	
	if (car1_x > 700) {
		document.getElementById('gamstat').innerHTML = "Car 1 Wins!"
		speed = 0
		
	}

	if (car2_x > 700) {
		document.getElementById('gamstat').innerHTML = "Car 2 Wins!"
		speed = 0
	}
}

function car1_up() {

	if (car1_y >= 0) {

		car1_y -= speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}

function car2_up() {

	if (car2_y >= 0) {

		car2_y -= speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}

function car1_down() {

	if (car1_y <= 500) {

		car1_y += speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}

function car2_down() {

	if (car2_y <= 500) {

		car2_y += speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}

function car1_right() {

	if (car1_x <= 700) {

		car1_x += speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}

function car2_right() {

	if (car2_x <= 700) {

		car2_x += speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}

function car1_left() {

	if (car1_x >= 0) {

		car1_x -= speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}

function car2_left() {

	if (car2_x >= 0) {

		car2_x -= speed
		uploadBackground();
		uploadcar1()
		uploadcar2()
	}
}