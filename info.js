


const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
var collection = [];


//MOVEMENT PHYSICS AND ANIMATION
document.addEventListener("keydown",function(e){
console.log(e.which);
if (e.keyCode == 68) { //MOVE RIGHT
current_anim = 1;
x+=1;
}

if (e.keyCode == 87) { //MOVE UP
current_anim = 3;
y-=1;
}
if (e.keyCode == 65) { //MOVE LEFT
current_anim = 2;
x-=1;
}
if (e.keyCode == 83) { //MOVE UP
current_anim = 4;
y+=1;
}
});

document.addEventListener("keyup",function(e){
current_anim = 0;
});

document.addEventListener("DOMContentLoaded",function(){
Start();
});


function lerp(a, b, t) {
    var len = a;
    if(b != len) return;

    var x =0;
  //  x = x + ()
        x.push(a[i] + t * (b[i] - a[i]));
    return x;
}















// SIRF ANIMATION


var spritesheet = new Image();  // LOAD HUA SHEEY
spritesheet.src = "player_sheet.png";
var bg = new Image();
bg.src = "bg.png";
var OBJ_A = new Image();
OBJ_A.src = "tree_A.png";
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


var posx = [];
var posy = [];
var i;

// function assign_pos(){
// for ( i = 0 ; i <40 ; i ++){
//   posx[i] =(Math.random() * 2000) + 0;
//   posy[i] = (Math.random() * 1000)+84;
//   console.log(   posx[i] );
//
// }
// }


//
// function updateFrame(){
//   srcX = currentframe * width;
//   srcY = height*anim_data_row[current_anim] ;
// //  currentframe = ++ currentframe% anim_data_column[current_anim];
// currentframe ++;
// if ( currentframe >=anim_data_column[current_anim] )
//       currentframe = 0;
//       context.clearRect(0,0,800,500);
//
// //context.clearRect(x,y,width,height);
//
// }

// function drawImage(){
//   updateFrame();
// //  context.translate(-x,-y);
//   context.drawImage(bg,0,0,3000,3000,-x,-y,3000,3000);
// for ( i = 0 ; i <40 ; i ++)
//  context.drawImage(OBJ_A, 0,0,84,145,-x+posx[i],-y+posy[i],84,145);
//   context.drawImage(spritesheet,srcX,srcY,width,height,400,250,width,height);
// }

setInterval(function(){
  context.save();
  context.translate(10,10);
    context.restore();
  console.log("wasaa");
  //drawImage();
},100);


function Start(){
 context.drawImage(bg,0,0,3000,3000); //DRAW BACKGROUND

for (i =0 ; i <100;i ++)
new GameObject("tree",OBJ_A,(Math.random() * 1000),(Math.random() * 1000));

}









function GameObject (name,sprite,xpos,ypos){
    this.name = name;
    this.sprite = sprite;
    this.xpos = xpos;
    this.ypos = ypos;

    this.make =function(){
        context.drawImage(this.sprite,this.xpos,this.ypos);
        collection[collection.length+1] = this.GameObject;
        this.id = collection.length;
      }

 this.make();
}
