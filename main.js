var canvas =new fabric.Canvas('myCanvas');
var blockWidth= 30;
var blockHeight= 30;
var player_x= 10;
var player_y= 10;
var player_object="";


function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}


function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockWidth);
        block_object.scaleToHeight(blockHeight);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
  keyPressed=e.keyCode;
  if(e.shiftKey&&keyPressed=='80'){
  blockWidth=blockWidth+10;
  blockHeight=blockHeight+10;
  document.getElementById("currentWidth").innerHTML=blockWidth;
  document.getElementById("currentHeight").innerHTML=blockHeight;
  }


  if(e.shiftKey&&keyPressed=='77'){
    blockWidth=blockWidth-10;
    blockHeight=blockHeight-10;
    document.getElementById("currentWidth").innerHTML=blockWidth;
    document.getElementById("currentHeight").innerHTML=blockHeight;
 }


  if(keyPressed=='38'){
  up();
  }
  if(keyPressed=='40'){
  down();
  }
  if(keyPressed=='37'){
  left();
  }
  if(keyPressed=='39'){
  right();
  }


  if(keyPressed=='84'){
    new_image('trunk.jpg');
  }
  if(keyPressed=='68'){
    new_image('dark_green.png');
  }
  if(keyPressed=='76'){
    new_image('light_green.png');
  }
  if(keyPressed=='71'){
    new_image('ground.png');
  }
  if(keyPressed=='87'){
    new_image('wall.jpg');
  }
  if(keyPressed=='89'){
    new_image('yellow_wall.png');
  }
  if(keyPressed=='82'){
    new_image('roof.jpg');
  }
  if(keyPressed=='67'){
    new_image('cloud.jpg')
  }
  if(keyPressed=='85'){
    new_image('unique.png');
  }
  }


  function up() {
    if(player_y>=0) {
      player_y=player_y-blockHeight;
      console.log("blockHeight="+blockHeight);
      console.log("When up arrow key is pressed,X ="+player_x+"Y =" +player_y);
      canvas.remove(player_object);
      player_update();
    }
  }

  function down() {
    if(player_y<=500) {
   player_y=player_y+blockHeight;
   console.log("blockHeight="+blockHeight);
   console.log("when down arrow key is pressed,X ="+player_x+ "Y="+player_y);
   canvas.remove(player_object);
   player_update();
    }
  }

  function left() {
  if(player_x >0){
    player_x=player_x-blockHeight;
    console.log("blockWidth="+blockWidth);
    console.log("when left arrow key is pressed,X ="+player_x+ "Y="+player_y);
    canvas.remove(player_object);
    player_update();
  }
  }

  function right() {
    if(player_x <850) {
      player_x=player_x+blockWidth;
      console.log("blockWidth="+blockWidth);
      console.log("when right arrow is pressed,X ="+player_x+ "Y="+player_y);
      canvas.remove(player_object);
      player_update();
    }
  }