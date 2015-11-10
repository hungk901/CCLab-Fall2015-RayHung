#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    ofSetCircleResolution(100);
    
    ball1 = false;
    ball2 = false;
    ball3 = false;
    ball4 = false;
    ball5 = false;
    ball6 = false;
    ball7 = false;
    ball8 = false;
    ball9 = false;
    
    xPos_1 = 1*ofGetWidth()/4;
    xPos_2 = 2*ofGetWidth()/4;
    xPos_3 = 3*ofGetWidth()/4;
    
    yPos_1 = 1*ofGetHeight()/4;;
    yPos_2 = 2*ofGetHeight()/4;
    yPos_3 = 3*ofGetHeight()/4;

    radius = 50;
}

//--------------------------------------------------------------
void ofApp::update(){
    
    //Ball1
    if( mouseX>=xPos_1-radius && mouseX<=xPos_1+radius && mouseY>=yPos_1-radius && mouseY<=yPos_1+radius ){
        ball1 = true;
        
        ball2 = false;
        ball3 = false;
        ball4 = false;
        ball5 = false;
        ball6 = false;
        ball7 = false;
        ball8 = false;
        ball9 = false;
    }
    
    //Ball2
    else if(mouseX>=xPos_2-radius && mouseX<=xPos_2+radius && mouseY>=yPos_1-radius && mouseY<=yPos_1+radius ){
        ball2 = true;
        
        ball1 = false;
        ball3 = false;
        ball4 = false;
        ball5 = false;
        ball6 = false;
        ball7 = false;
        ball8 = false;
        ball9 = false;
    }
    
    //Ball3
    else if(mouseX>=xPos_3-radius && mouseX<=xPos_3+radius && mouseY>=yPos_1-radius && mouseY<=yPos_1+radius ){
        ball3 = true;
        
        ball1 = false;
        ball2 = false;
        ball4 = false;
        ball5 = false;
        ball6 = false;
        ball7 = false;
        ball8 = false;
        ball9 = false;
    }
    
    //Ball4
    else if(mouseX>=xPos_1-radius && mouseX<=xPos_1+radius && mouseY>=yPos_2-radius && mouseY<=yPos_2+radius ){
        ball4 = true;
        
        ball1 = false;
        ball2 = false;
        ball3 = false;
        ball5 = false;
        ball6 = false;
        ball7 = false;
        ball8 = false;
        ball9 = false;
    }
    
    //Ball5
    else if(mouseX>=xPos_2-radius && mouseX<=xPos_2+radius && mouseY>=yPos_2-radius && mouseY<=yPos_2+radius ){
        ball5 = true;
        
        ball1 = false;
        ball2 = false;
        ball3 = false;
        ball4 = false;
        ball6 = false;
        ball7 = false;
        ball8 = false;
        ball9 = false;
    }
    
    //Ball6
    else if(mouseX>=xPos_3-radius && mouseX<=xPos_3+radius && mouseY>=yPos_2-radius && mouseY<=yPos_2+radius ){
        ball6 = true;
        
        ball1 = false;
        ball2 = false;
        ball3 = false;
        ball4 = false;
        ball5 = false;
        ball7 = false;
        ball8 = false;
        ball9 = false;
    }
    
    //Ball7
    else if(mouseX>=xPos_1-radius && mouseX<=xPos_1+radius && mouseY>=yPos_3-radius && mouseY<=yPos_3+radius ){
        ball7 = true;
        
        ball1 = false;
        ball2 = false;
        ball3 = false;
        ball4 = false;
        ball5 = false;
        ball6 = false;
        ball8 = false;
        ball9 = false;
    }
    
    //Ball8
    else if(mouseX>=xPos_2-radius && mouseX<=xPos_2+radius && mouseY>=yPos_3-radius && mouseY<=yPos_3+radius ){
        ball8 = true;
        
        ball1 = false;
        ball2 = false;
        ball3 = false;
        ball4 = false;
        ball5 = false;
        ball6 = false;
        ball7 = false;
        ball9 = false;
    }
    
    //Ball9
    else if(mouseX>=xPos_3-radius && mouseX<=xPos_3+radius && mouseY>=yPos_3-radius && mouseY<=yPos_3+radius ){
        ball9 = true;
        
        ball1 = false;
        ball2 = false;
        ball3 = false;
        ball4 = false;
        ball5 = false;
        ball6 = false;
        ball7 = false;
        ball8 = false;
    }
    
    if (ball1 == true) {
        allBallColor = ofColor(200,210,255);
    }
    if (ball2 == true) {
        allBallColor = ofColor(255,200,210);
    }
    if (ball3 == true) {
        allBallColor = ofColor(210,255,180);
    }
    if (ball4 == true) {
        allBallColor = ofColor(150,255,180);
    }
    if (ball5 == true) {
        allBallColor = ofColor(200,150,255);
    }
    if (ball6 == true) {
        allBallColor = ofColor(255,200,150);
    }
    if (ball7 == true) {
        allBallColor = ofColor(255,200,90);
    }
    if (ball8 == true) {
        allBallColor = ofColor(210,255,180);
    }
    if (ball9 == true) {
        allBallColor = ofColor(90,255,180);
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    ofBackground(0);
    
    ofCircle(xPos_1, yPos_1, radius);
    ofCircle(xPos_2, yPos_1, radius);
    ofCircle(xPos_3, yPos_1, radius);
    ofCircle(xPos_1, yPos_2, radius);
    ofCircle(xPos_2, yPos_2, radius);
    ofCircle(xPos_3, yPos_2, radius);
    ofCircle(xPos_1, yPos_3, radius);
    ofCircle(xPos_2, yPos_3, radius);
    ofCircle(xPos_3, yPos_3, radius);
    
    ofSetColor(allBallColor);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
