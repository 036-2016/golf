
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");

//Set initial positions for ball and hole images.
ball_x = 0;
ball_y = 0;
hoal_x = 400;
hoal_y = 800;

block_image_width = 5;
block_image_height = 5;

function new_image(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
hole_obj = Img;
hole_obj.scaleTowidth(50);
hole_obj.scaleToheight(50);
hole_obj.set({
	top:hole_y,
	left:hole_x
});
  canvas.add(hole_obj);
});
new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("ball.png", function(Img){
ball_obj = Img;
ball_obj.scaleToheight(50);
ball_obj.scaleTowidth(50);
ball_obj.set({
	top:ball_x,
	left:ball_y
});
canvas.add(ball_obj);
	});


}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hoal_x)&&(ball_y==hoal_y)	)
	{
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You have hit the goal!!!!"
		document.getElementById("myCanvas").style.borderColor = "red"
	}
	
	else{
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
		// Write a code to move ball upward.
		if(ball_y >=0)
		{
			player_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when down arrow key is pressed, X=" + ball_y + ", Y=" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(ball_y <=450)
		{
			player_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when down arrow key is pressed, X=" + ball_y + ", Y=" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left()
	{
		if(ball_x >=5)
		{
			// Write a code to move ball left side.
			player_y = ball_x + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when down arrow key is pressed, X=" + ball_y + ", Y=" + ball_y);
			canvas.remove(ball_obj);
			new_image()
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			player_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("when down arrow key is pressed, X=" + ball_y + ", Y=" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

//ma'am the I can't view the ball and the hole can you help me? 