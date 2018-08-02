export default class GameObject{

  constructor(sprite, width, height){
    // this.name = name;
    // this.sprite = new Image();
    this.sprite = sprite;
    this.xpos = 0;
    this.ypos = 0;
    // this.collection = [];
    this.id = 0;
    this.collection = new Map();

    this.width = width;
    this.height = height;

    this.current_anim = -1;
    this.currentframe = 0;
    this.anims = [];
    this.anim_data_row = [];
    this.anim_data_column = [];
    this.anim_data_length = [];
    // console.log('dasjdb');
  }
  //width and height not need
  // create(image, xpos, ypos){
  //   const buffer = document.createElement('canvas');
  //
  // }

  create(name, xpos, ypos){
    // console.log('dasudiab')
    const buffer = document.createElement('canvas');
     buffer.width = '400px';
     buffer.height = '400px';
    //buffer.getContext('2d').drawImage(this.sprite, 0, 0, 64, 64,0, 0, 64, 64);
    this.collection.set(name, buffer);
  }

  draw(name, context, x, y){

    const buffer = this.collection.get(name);
    // context.drawImage(buffer, x, y);
    // console.log(buffer);
    if (this.height == 0)
    context.drawImage(buffer, this.xpos, this.ypos);
    else{
    context.drawImage(buffer,0,0,400,400, x, y,400,400);
    console.log('hua ye');
    }
    // this.collection[this.collection.length + 1] = this.GameObject;
    // this.id = this.collection.l/ength;
    // console.log(this.collection.length)
  }


  drawAnim(name, context, x, y ,xs,ys){

    const buffera = this.collection.get(name);
    context.drawImage(buffera,xs,ys,400,400, x, y,400,400);
    console.log('hua ye');
  }


  AddAnimation(name,row_index,coloumn_index){ // pass the name of the animation , the location of row and coloumn , and total number of frams anim ke lia
    this.anims[this.anims.length] = name;
    this.anim_data_row[this.anim_data_row.length] = row_index;
    this.anim_data_column[this.anim_data_column.length] = coloumn_index;
  }

  PlayAnimation(aname, name,contex){
  //  for ( this.i = 0 ; this.i < this.anims.length ; this.i++)
    // if (this.anims[this.i] == aname)
    //   this.current_anim = this.i;
       this.current_anim = 3;

       this.srcX =  this.currentframe * this.width;
       this.srcY = this.height * 64;// this.anim_data_row[this.current_anim];
      // this.currentframe = ++this.currentframe % this.anim_data_column[  this.current_anim];
       this.currentframe++;
    if (this.currentframe >= 9)//this.anim_data_column[this.current_anim])
         this.currentframe = 0;
          console.log(this.currentframe);
      // context.clearRect(this.xpos,this.ypos,this.width,this.height); //!!!!!DOING THIS MAKES A WHITE BACKGROUND WHICH MESSES EVERYTHING , PURA BACKGROUND DRAW KARNA PADEGA VAAPAS !!!!!!!!! ISSUE TO BE FIXED
       // contex.drawImage(this.collection.get(name),this.srcX, this.srcY, 400, 400, this.xpos, this.ypos, 400, 400);
        contex.drawImage(this.sprite, this.srcX, this.srcY, this.width, this.height, this.xpos, this.ypos, this.width, this.height);
       //this.drawAnim('charac', contex, 0, 0,this.srcX,this.srcY  );
  }
}



// const(image, width, height)
// define(name, x, y) -> buffer
// store each buffer in a map
// draw buffer on canvas
