export default class GameObject{
  constructor(name, sprite, xpos, ypos){
    this.name = name;
    this.sprite = sprite;
    this.xpos = xpos;
    this.ypos = ypos;
    this.collection = [];
    this.id = 0;
  }

  make(context){
    context.drawImage(this.sprite, this.xpos, this.ypos);
    this.collection[this.collection.length + 1] = this.GameObject;
    this.id = this.collection.length;
    // console.log(this.GameObject)
    console.log('Its working');
  }
}
