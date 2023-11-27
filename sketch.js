function setup() {
  createCanvas(500, 600);
}

function draw() {
  //teal background
    background (66, 231, 192)

  // Face
  
    fill(245, 225, 199); //skin
    circle(250, 130, 100); 

  // Eyes
    fill(49, 43, 5) //brown
    circle(232, 115, 8) //left
    circle(268, 115, 8) //right

  // Nose
    fill(254,213,213) //skin
    triangle(245,135,250,130,255,135)
   

  // Mouth
    fill(172, 3, 3)
    triangle(240,155,250,165,260,155) //bottom lip
    triangle(240,155,250,155,245,148) //left top lip
    triangle(250,155,255,148,260,155) //right top lip

  //Neck
    fill(245, 225, 199); //skin
    square(244,180,13) 

  //Torso
    fill(12, 101, 244) //blue
    rect(210,190,80,150) 

  //Legs
    fill(21, 2, 2)
    rect(210,340,30,180) //left leg
    rect(260,340,30,180) //right leg

  //Arms
    fill(12, 101, 244) //blue
    rect(190,190,25,140) //left arm
    rect(285,190,25,140) //right arm

  // Hair
    fill(82, 37, 2)
    rect(205,75,90,30) //hair-bangs
    rect(193,75,25,155) //left side
    rect(282,75,25,155) //right side
    

  // Text
    fill(0); // Black text
    textSize(16);
    text("Self Portrait", 210, 50)
    text("Lauren Ciampa", 195, 560);
}