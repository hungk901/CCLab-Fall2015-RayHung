#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    ofSetFrameRate(60);
    ofSetVerticalSync(true);
    
    myLeapMotion.setup();
    
    particleNum = 10000;
    
    for (int i = 0; i < particleNum; i++) {
        Particle tempParticle;
        tempParticle.setup();
        myParticles.push_back(tempParticle);
    }
    
    isAttracted = false;
}

//--------------------------------------------------------------
void ofApp::update(){
    
    myLeapMotion.update();
    
    //----- PASS THE HAND POSITION FROM LEAP MOTION TO HERE -----//
    for(int i = 0; i < myLeapMotion.simpleHands.size(); i++){
        
        // Send Leap's Center Pos to handCenter's Pos:
        handCenter.x = ofMap(myLeapMotion.simpleHands[i].sphereCenter.x, -(ofGetWidth()/2), (ofGetWidth()/2), 0, ofGetWidth());
        handCenter.y = ofMap(myLeapMotion.simpleHands[i].sphereCenter.y, (ofGetHeight()/2), -(ofGetHeight()/2), 0, ofGetHeight());
        
        // Detect if the Hand is Holding or Releasing:
        if (myLeapMotion.simpleHands[i].sphereRadius < 40) {
            isAttracted = true;
        }
        else {
            isAttracted = false;
        }
    }

    /*
     Uncommented Mouse Control Mode and commented Leap Motion Mode
     to activate Mouse Control Mode
     */
    
    // Mouse Control Mode //
    centerPoint.x = mouseX;
    centerPoint.y = mouseY;
    
    
    // Leap Motion Mode //
    //    centerPoint = handCenter;
    
    /*------------------------------------------------------------*/
    
    float frictionFrc;
    float repulsionFrc;
    
    //----- GIVE THE PARTICLE DIFFERENT MOVEMENT -----//
    for (int i = 0; i < myParticles.size(); i++) {
        
        // When particles are asked to come together:
        if (isAttracted == true) {
            frictionFrc = 0.09;
            myParticles[i].attraction(centerPoint, 10000, 0.55);
        }
        else {
            
            // When particles are nearby to the center but not being call to come close:
            if ((myParticles[i].pos-centerPoint).length() < 200){
                frictionFrc = 0.0001;
            }
            
            // When particles are leaving from the center:
            else {
                frictionFrc = 0.02;
            }
        }
        
        // Basic Movement for each particle:
        myParticles[i].friction(frictionFrc);
        myParticles[i].repulsion(centerPoint, 50, 35);
        myParticles[i].update();
        myParticles[i].resetForce();
        
        
        //----- MAKE THE PARTICLE FOLLOWING THE ONE IN FRONT OF IT, BASED ON INDEX -----//
        if(i == 0){
            myParticles[i].trailing(centerPoint);
        }
        else{
            myParticles[i].trailing(myParticles[i-1].pos);
        }
    }
//    cout << "X: " << handCenter.x << " / Y:" << handCenter.y <<endl;
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    ofBackgroundGradient(ofColor(0), ofColor(50));
    
    for(int i = 0; i<myParticles.size(); i++){
        myParticles[i].draw();
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
    isAttracted = true;

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){
    isAttracted = false;
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
