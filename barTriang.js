function barTriang(p1, p2, p3){
  let xO = (p1[0] + p2[0] + p3[0]) / 3;
  let yO = (p1[1] + p2[1] + p3[1]) / 3;
  xO = Math. round (xO * 10000)/ 10000;
  yO = Math. round (yO * 10000)/ 10000;
  return [xO, yO];
}