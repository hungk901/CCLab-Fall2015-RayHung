#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    ofSetCircleResolution(100);
    
    numBallsOfColumn = 3;
    numBallsOfRaw = 3;
    
    widthPerUnit = ofGetWidth()/(numBallsOfColumn+1);
    heightPerUnit = ofGetHeight()/(numBallsOfRaw+1);

    radius = 50;
}

//--------------------------------------------------------------
void ofApp::update(){
    
    isTheBall.clear();
    isTheBallBox.clear();
    
    for (int i = 0; i < numBallsOfColumn; i++) {
        for (int j = 0; j < numBallsOfRaw; j++) {
            bool isTheBallTemp;
            isTheBallTemp = false;
            isTheBall.push_back(isTheBallTemp);
        }
        isTheBallBox.push_back(isTheBall);
    }
//    cout << "isTheBall: " << isTheBall.size() << endl;
//    cout << "isTheBallBox: " << isTheBallBox.size() << endl;

    for(int i = 0; i < numBallsOfColumn; i++){
        for (int j = 0; j < numBallsOfRaw; j++) {
            
            isTheBallBox[i][j] = false;
            
            int minX = widthPerUnit*(i+1) - radius;
            int maxX = widthPerUnit*(i+1) + radius;
            int minY = heightPerUnit*(j+1) - radius;
            int maxY = heightPerUnit*(j+1) + radius;
        
            if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {
                isTheBallBox[i][j] = true;
//                cout << i << "/" << j << ":" << isTheBallBox[i][j] << endl;
                colorR = 250 - 75*(i);
                colorG = 100 + 25*(j);
                colorB = 250 - 10*((i+1)*(j+1));
                cout << colorR << "/" << colorG << "/" << colorB << endl;
            }
        }
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    ofBackground(0);

    for (int i = 0; i < numBallsOfColumn; i++) {
        for (int j = 0; j < numBallsOfRaw; j++) {
            
            ofCircle(widthPerUnit*(i+1), heightPerUnit*(j+1), radius);
            
            if (isTheBallBox[i][j] == true) {
                ofSetColor(colorR, colorG, colorB);
            }
        }
    }

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
