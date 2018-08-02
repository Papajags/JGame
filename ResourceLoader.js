import {loadImage} from './loaders.js';

export function loadBackGround(){
  return loadImage('bg.png').then(image => {
    console.log('BAkcground loaded');
    return image;
  });
}

export function loadTrees(){
  return loadImage('tree_A.png').then(image => {
    console.log('tree loaded');
   return image;
  });
}

export function loadPlayer(){
  return loadImage('player_sheet.png').then(image => {
    console.log('player loaded');
    return image;
  });
}
