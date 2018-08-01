export default class GameObject{
  
  constructor(name, sprite, xpos, ypos,width,height){
    this.name = name;
    this.sprite = new Image();
    this.sprite.src = sprite;
    this.xpos = xpos;
    this.ypos = ypos;
    this.collection = [];
    this.id = 0;

    this.width = width;
    this.height = height;

    this.current_anim = -1;
    this.currentframe = 0;
    this.anims = [];
    this.anim_data_row = [];
    this.anim_data_column = [];
    this.anim_data_length = [];
  }
  //width and height not need
  // create(image, xpos, ypos){
  //   const buffer = document.createElement('canvas');
  //
  // }

  make(context){
    if (this.height == 0)
    context.drawImage(this.sprite, this.xpos, this.ypos);
    else{
    context.drawImage(this.sprite,0,0,this.width,this.height, this.xpos, this.ypos,this.width,this.height);

    }
    this.collection[this.collection.length + 1] = this.GameObject;
    this.id = this.collection.length;
    // console.log(this.collection.length)
  }

  AddAnimation(name,row_index,coloumn_index){ // pass the name of the animation , the location of row and coloumn , and total number of frams anim ke lia
    this.anims[this.anims.length] = name;
    this.anim_data_row[this.anim_data_row.length] = row_index;
    this.anim_data_column[this.anim_data_column.length] = coloumn_index;
  }

  PlayAnimation(name,context){
    for ( this.i = 0 ; this.i < this.anims.length ; this.i++)
     if (this.anims[this.i] == name)
       this.current_anim = this.i;

       this.srcX =  this.currentframe * this.width;
       this.srcY = this.height * this.anim_data_row[this.current_anim];
    //   this.currentframe = ++this.currentframe % this.anim_data_column[  this.current_anim];
       this.currentframe++;
    if (this.currentframe >= this.anim_data_column[this.current_anim])
         this.currentframe = 0;

      context.clearRect(this.xpos,this.ypos,this.width,this.height); //!!!!!DOING THIS MAKES A WHITE BACKGROUND WHICH MESSES EVERYTHING , PURA BACKGROUND DRAW KARNA PADEGA VAAPAS !!!!!!!!! ISSUE TO BE FIXED
       context.drawImage(this.sprite, this.srcX, this.srcY, this.width, this.height, this.xpos, this.ypos, this.width, this.height);
  }
}



// const(image, width, height)
// define(name, x, y) -> buffer
// store each buffer in a map
// draw buffer on canvas
