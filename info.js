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

//MOVEMENT PHYSICS AND ANIMATION
document.addEventListener("keydown", function(e) {
  console.log(e.which);
  if (e.keyCode == 68) { //MOVE RIGHT
    current_anim = 1;
    x += 1;
  }

  if (e.keyCode == 87) { //MOVE UP
    current_anim = 3;
    y -= 1;
  }
  if (e.keyCode == 65) { //MOVE LEFT
    current_anim = 2;
    x -= 1;
  }
  if (e.keyCode == 83) { //MOVE UP
    current_anim = 4;
    y += 1;
  }
});

document.addEventListener("keyup", function(e) {
  current_anim = 0;
});

document.addEventListener("load", function() {
  Start();
});

// Draw background using Promise.

function loadImage(path) {
  return new Promise((resolve) => {
    let image = new Image();
    image.src = path;
    image.addEventListener('load', function() {
      // for(let i=0; i<100; i++)
      resolve(image);
    });

  });
}



// SIRF ANIMATION


let spritesheet = new Image(); // LOAD HUA SHEEY
spritesheet.src = "player_sheet.png";



let OBJ_A = new Image();
OBJ_A.src = "tree_A.png";
let current_anim = 0; // ANIMATION PLAY  0-IDLE   1-WALK RIGHT   2-WALK LEFT 3-WALK UP 4-WALK DOWN
let anim_data_column = new Array(1, 9, 9, 9, 9);
let anim_data_row = new Array(10, 11, 9, 8, 10);

let x = 50;
let y = 50;
let srcX;
let srcY;

let col = 0;
let row = 0;
let width = 64;
let height = 64;
let currentframe = 0;


let posx = [];
let posy = [];
let i;



function updateFrame() {
  srcX = currentframe * width;
  srcY = height * anim_data_row[current_anim];
  currentframe = ++currentframe % anim_data_column[current_anim];
  currentframe++;
  if (currentframe >= anim_data_column[current_anim])
    currentframe = 0;
  // context.clearRect(0, 0, windowWidth, windowHeight); //KYU DALA YE

  // context.clearRect(x,y,width,height);
  loadImage('bg.png').then(image => {
    console.log('heloo');
    context.drawImage(image, 0, 0); //DRAW BACKGROUND
    console.log(image);
  });
  context.drawImage(spritesheet, srcX, srcY, width, height, 400, 250, width, height);
  requestAnimationFrame(updateFrame); // Always use

}

updateFrame();

function Start() {

  console.log('asodnaisnd')
  for (i = 0; i < 100; i++) {
    // let tree = new GameObject("tree", OBJ_A, (Math.random() * 1000), (Math.random() * 1000)).make(context);
  }
}
