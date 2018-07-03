


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

//context.fillRect(0,0,500,500);


document.addEventListener("keydown",function(e){
console.log(e.which);
if (e.keyCode == 68) { //MOVE RIGHT
current_anim = 1;
//context.beginPath();
//context.moveTo(2,20);
x+=5;
}

if (e.keyCode == 87) { //MOVE UP
current_anim = 3;
y-=5;
}
if (e.keyCode == 65) { //MOVE LEFT
current_anim = 2;
x-=5;
}
if (e.keyCode == 83) { //MOVE UP
current_anim = 4;
y+=5;
}
});

document.addEventListener("keyup",function(e){
current_anim = 0;
});























var spritesheet = new Image();  // LOAD HUA SHEEY
spritesheet.src = "player_sheet.png";

var current_anim = 0; // ANIMATION PLAY  0-IDLE   1-WALK RIGHT   2-WALK LEFT 3-WALK UP 4-WALK DOWN
var anim_data_column = new Array(1,9,9,9,9);
var anim_data_row = new Array(10,11,9,8,10);

var x = 50;
var y = 50;
var srcX;
var srcY ;

var col = 0;
var row=0;
var width = 64;
var height =64;
var currentframe = 0;

function updateFrame(){
  srcX = currentframe * width;
  srcY = height*anim_data_row[current_anim] ;
//  currentframe = ++ currentframe% anim_data_column[current_anim];
currentframe ++;
if ( currentframe >=anim_data_column[current_anim] )
      currentframe = 0;

context.clearRect(x,y,width,height);
}

function drawImage(){
  updateFrame();
 context.drawImage(spritesheet,srcX,srcY,width,height,x,y,width,height);
//context.drawImage(spritesheet,0,0,48,64,0,0,48,64);

}
setInterval(function(){
  drawImage();
},100);
