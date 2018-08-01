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


Promise.all([
  loadBackGround(), loadTrees()
])
.then(([background, tree]) => {
  context.drawImage(background, 0, 0);
  randomSpawn(tree, context, 100);

});

function randomSpawn(image, context, num){
  for(let i=0; i<num; i++){
    context.drawImage(image, Math.random()*2000, Math.random()*2000);
  }
}

var player=GameObject;

function MakePlayer(){
    player = new GameObject("player","player_sheet.png",0,0,64,64);
    player.AddAnimation("idle",10,1);// We add an idle animation , which exists on the 10th row to the 1st coloumn
    player.AddAnimation("walk_right",11,10); // We add a walking animation , which exists on the 11th row to the 9th coloumn
    player.AddAnimation("walk_left",9,9);// same cheez baki sab mein ez
    player.AddAnimation("walk_up",8,9);
    player.AddAnimation("walk_down",10,9);
}

// MakePlayer();

function Update() {
  // console.log('hua call');
 player.PlayAnimation("idle",context);
  if (rightinput){
      player.PlayAnimation("walk_right",context);
      // console.log('hua re hua');
  }

  if (leftinput)
  player.PlayAnimation("walk_left",context);

  if (upinput)
  player.PlayAnimation("walk_up",context);

 if (downinput)
 player.PlayAnimation("walk_down",context);

if (!rightinput && !leftinput && !upinput && !downinput)
 player.PlayAnimation("idle",context);

 // requestAnimationFrame(Update); // londa nhi dikhra isme
}



//Managing Inputs
let leftinput = false;
let rightinput = false;
let upinput = false;
let downinput = false;

document.addEventListener("keydown", e => {
  console.log(e.which);
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

document.addEventListener('DOMContentLoaded', () => {
  MakePlayer();
});

setInterval(function(){
  Update();
},100);
