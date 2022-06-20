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
        block-Object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}