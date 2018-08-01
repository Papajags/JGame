export function loadImage(path){
  return new Promise(resolve => {
    const image = new Image();
    image.src = path;
    image.addEventListener('load', ()=>{
      resolve(image);
    });
  });
}
