function setup() {
  canvasSize = min(windowWidth * 0.65, windowHeight * 0.65);
  createCanvas(canvasSize, canvasSize);
  noFill();
  stroke("#083f37");
  strokeWeight(2);
}

function tile01() {
  arc(x * gap, y * gap, gap, gap, 0, HALF_PI);
  arc(gap + x * gap, gap + y * gap, gap, gap, PI, PI + HALF_PI);
}

function tile02() {
  arc(gap + x * gap, y * gap, gap, gap, HALF_PI, PI);
  arc(x * gap, gap + y * gap, gap, gap, PI + HALF_PI, TWO_PI);
}

function tile03() {
  line(x * gap + gap / 2, y * gap, x * gap + gap / 2, y * gap + gap);
  line(x * gap, y * gap + gap / 2, x * gap + gap, y * gap + gap / 2);
}

function draw() {
  // the number below is responsible for the density ( higher = denser )
  gap = canvasSize / 12;
  for (x = 0; x < canvasSize; x++) {
    for (y = 0; y < canvasSize; y++) {
      // change the below random range to [0, 1, 2] to also include the cross tile
      chooseTile = random([0, 1]);
      if (chooseTile === 0) {
        tile01();
      } else if (chooseTile === 1) {
        tile02();
      } else tile03();
    }
  }
  noLoop();
}
