import GameObject from './GameObject.js';


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






var player = GameObject;

function Start() {
  Manage_background();
  MakePlayer();
}

function Manage_background(){
  //Making background  (abhi cache disable kia hai , last mein ek resource loader banayenge)
  var bgd = new Image();
  bgd.src = "bg.png";
  context.drawImage(bgd, 0, 0);
  //Making Trees
  let i;
 for (i = 0; i < 100; i++) {
    let tree = new GameObject("tree", "tree_A.png", (Math.random() * 1000), (Math.random() * 1000),0,0).make(context);
    }
}

function MakePlayer(){
    player = new GameObject("player","player_sheet.png",0,0,64,64);
    player.AddAnimation("idle",10,1);// We add an idle animation , which exists on the 10th row to the 1st coloumn
    player.AddAnimation("walk_right",11,9); // We add a walking animation , which exists on the 11th row to the 9th coloumn
    player.AddAnimation("walk_left",9,9);// same cheez baki sab mein ez
    player.AddAnimation("walk_up",8,9);
    player.AddAnimation("walk_down",10,9);
}

function Update() {
//  player.PlayAnimation("idle",context);
  if (rightinput)
  player.PlayAnimation("walk_right",context);

  if (leftinput)
  player.PlayAnimation("walk_left",context);

  if (upinput)
  player.PlayAnimation("walk_up",context);

 if (downinput)
 player.PlayAnimation("walk_down",context);

if (!rightinput && !leftinput && !upinput && !downinput)
 player.PlayAnimation("idle",context);


}



//Managing Inputs
let leftinput = false;
let rightinput = false;
let upinput = false;
let downinput = false;

document.addEventListener("keydown", function(e) {
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

document.addEventListener("DOMContentLoaded", function() {
  Start();
});

setInterval(function(){
  Update();
},100);
