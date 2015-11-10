boolean ball1;
boolean ball2;
boolean ball3;

boolean ball4;
boolean ball5;
boolean ball6;

boolean ball7;
boolean ball8;
boolean ball9;

int xPos_1=200;
int xPos_2=400;
int xPos_3=600;

int yPos_1=150;
int yPos_2=300;
int yPos_3=450;


void setup(){
  size(800, 600);
  noStroke();
}

void draw(){
  background(0,0,0);
  
  //Ball1
  if(mouseX>=xPos_1-50 && mouseX<=xPos_1+50 && mouseY>=yPos_1-50 && mouseY<=yPos_1+50 ){
    ball1=true;
    
    ball2=false;
    ball3=false;
    ball4=false;
    ball5=false;
    ball6=false;
    ball7=false;
    ball8=false;
    ball9=false;
  }
  
  //Ball2
  else if(mouseX>=xPos_2-50 && mouseX<=xPos_2+50 && mouseY>=yPos_1-50 && mouseY<=yPos_1+50 ){
    ball2=true;
    
    ball1=false;
    ball3=false;
    ball4=false;
    ball5=false;
    ball6=false;
    ball7=false;
    ball8=false;
    ball9=false;
  }
  
  //Ball3
  else if(mouseX>=xPos_3-50 && mouseX<=xPos_3+50 && mouseY>=yPos_1-50 && mouseY<=yPos_1+50 ){
    ball3=true;
    
    ball1=false;
    ball2=false;
    ball4=false;
    ball5=false;
    ball6=false;
    ball7=false;
    ball8=false;
    ball9=false;
  }
  
  //Ball4
  else if(mouseX>=xPos_1-50 && mouseX<=xPos_1+50 && mouseY>=yPos_2-50 && mouseY<=yPos_2+50 ){
    ball4=true;
    
    ball1=false;
    ball2=false;
    ball3=false;
    ball5=false;
    ball6=false;
    ball7=false;
    ball8=false;
    ball9=false;
  }
  
  //Ball5
  else if(mouseX>=xPos_2-50 && mouseX<=xPos_2+50 && mouseY>=yPos_2-50 && mouseY<=yPos_2+50 ){
    ball5=true;
    
    ball1=false;
    ball2=false;
    ball3=false;
    ball4=false;
    ball6=false;
    ball7=false;
    ball8=false;
    ball9=false;
  }
  
  //Ball6
  else if(mouseX>=xPos_3-50 && mouseX<=xPos_3+50 && mouseY>=yPos_2-50 && mouseY<=yPos_2+50 ){
    ball6=true;
    
    ball1=false;
    ball2=false;
    ball3=false;
    ball4=false;
    ball5=false;
    ball7=false;
    ball8=false;
    ball9=false;
  }
  
  //Ball7
  else if(mouseX>=xPos_1-50 && mouseX<=xPos_1+50 && mouseY>=yPos_3-50 && mouseY<=yPos_3+50 ){
    ball7=true;
    
    ball1=false;
    ball2=false;
    ball3=false;
    ball4=false;
    ball5=false;
    ball6=false;
    ball8=false;
    ball9=false;
  }
  
  //Ball8
  else if(mouseX>=xPos_2-50 && mouseX<=xPos_2+50 && mouseY>=yPos_3-50 && mouseY<=yPos_3+50 ){
    ball8=true;
    
    ball1=false;
    ball2=false;
    ball3=false;
    ball4=false;
    ball5=false;
    ball6=false;
    ball7=false;
    ball9=false;
  }
  
  //Ball9
  else if(mouseX>=xPos_3-50 && mouseX<=xPos_3+50 && mouseY>=yPos_3-50 && mouseY<=yPos_3+50 ){
    ball9=true;
    
    ball1=false;
    ball2=false;
    ball3=false;
    ball4=false;
    ball5=false;
    ball6=false;
    ball7=false;
    ball8=false;
  }
  
  
  if(ball1==true){
    fill(200,210,255);
  }
  if(ball2==true){
    fill(255,200,210);
  }
  if(ball3==true){
    fill(210,255,180);
  }
   if(ball4==true){
    fill(150,255,180);
  }
  if(ball5==true){
    fill(200,150,255);
  }
  if(ball6==true){
    fill(255,200,150);
  }
  if(ball7==true){
    fill(255,200,90);
  }
  if(ball8==true){
    fill(210,255,180);
  }
  if(ball9==true){
    fill(90,255,180);
  }
  
  ellipse(200, 150, 100, 100); //Ball1
  ellipse(400, 150, 100, 100); //Ball2
  ellipse(600, 150, 100, 100); //Ball3
  
  ellipse(200, 300, 100, 100); //Ball4
  ellipse(400, 300, 100, 100); //Ball5
  ellipse(600, 300, 100, 100); //Ball6
  
  ellipse(200, 450, 100, 100); //Ball7
  ellipse(400, 450, 100, 100); //Ball8
  ellipse(600, 450, 100, 100); //Ball9
}

