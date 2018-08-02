import GameObject from './GameObject.js';
import {loadBackGround, loadTrees, loadPlayer} from './ResourceLoader.js';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


// Creating canvas amd context.
const canvas = document.createElement('canvas');
canvas.style.border = "2px solid black";
canvas.width = windowWidth;
canvas.height = windowHeight;
let body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
const context = canvas.getContext('2d');






var charac = GameObject;

Promise.all([
  loadBackGround(), loadTrees(), loadPlayer()
])
.then(([background, tree, playerImage]) => {
  // context.drawImage(background, 0, 0);
  // randomSpawn(tree, context, 100);
  // let player = new GameObject(playerImage, 64, 64);

  charac = new GameObject(playerImage, 64, 64);
  charac.create('charac', 0, 0);
  charac.draw('charac', context, 50, 50);
  console.log(characImage);
  // console.log('helloo');
  // MakePlayer();
  charac.AddAnimation("idle",10,1);// We add an idle animation , which exists on the 10th row to the 1st coloumn
  charac.AddAnimation("walk_right",11,9); // We add a walking animation , which exists on the 11th row to the 9th coloumn
  charac.AddAnimation("walk_left",9,9);// same cheez baki sab mein ez
  charac.AddAnimation("walk_up",8,9);
  charac.AddAnimation("walk_down",10,9);

 });

function randomSpawn(image, context, num){
  for(let i=0; i<num; i++){
    context.drawImage(image, Math.random()*2000, Math.random()*2000);
  }
}

// var player = GameObject;

function MakePlayer(){
  // player = new GameObject("player","player_sheet.png",0,0,64,64);
  // player == new GAmeObject();
  // player.AddAnimation("idle",10,1);// We add an idle animation , which exists on the 10th row to the 1st coloumn
  // player.AddAnimation("walk_right",11,9); // We add a walking animation , which exists on the 11th row to the 9th coloumn
  // player.AddAnimation("walk_left",9,9);// same cheez baki sab mein ez
  // player.AddAnimation("walk_up",8,9);
  // player.AddAnimation("walk_down",10,9);
}




function Update() {
  // console.log(context)
  // if (rightinput)
  charac.PlayAnimation("walk_right",'charac',context);
  // if (leftinput)
  // charac.PlayAnimation("walk_left",'player', context);
  // if (upinput)
  // charac.PlayAnimation("walk_up",context);
  // if (downinput)
  // charac.PlayAnimation("walk_down",context);
  // if (!rightinput && !leftinput && !upinput && !downinput)
  // charac.PlayAnimation("idle",'player', context);
 // requesAnimationFrame(Update);
}

//Managing Inputs
let leftinput = false;
let rightinput = false;
let upinput = false;
let downinput = false;

document.addEventListener("keydown", function(e) {
  // console.log(e.which);
  if (e.keyCode == 68)  //MOVE RIGHT
  rightinput = true;
  if (e.keyCode == 87)  //MOVE UP
   upinput = true;
  if (e.keyCode == 65)  //MOVE LEFT
   leftinput = true;
  if (e.keyCode == 83)  //MOVE DOWN
    downinput  = true;
});

document.addEventListener("keyup", function(e) {
   leftinput = false;
   rightinput = false;
   upinput = false;
   downinput = false;
});


document.addEventListener("DOMContentLoaded", () => {
  MakePlayer();
});

setInterval(function(){
  Update();
},100);
