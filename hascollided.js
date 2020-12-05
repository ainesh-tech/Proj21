function hasCollided(lbullet,lwall){
  bulletrightEdge=lbullet.x+lbullet.width;
  wallleftEdge=lwall.x;
  bullet.shapecolor="white"; 
  if(bulletrightEdge>=wallleftEdge){
      return true;
  }
  return false;
}