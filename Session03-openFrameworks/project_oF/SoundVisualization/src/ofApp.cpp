#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    //--- Synchronizes the Redraw to the Vertical Refresh of Screen ---//
    
    ofSetVerticalSync(true);
    
    
    //----- Audio Setup -----//
    
    music.setup();
    
    
    //----- Setup Particle Numbers -----//
    
    numOfParticles = music.numBands;
    p.assign(numOfParticles, Particles());
    
    lineWidth = 1.25f;
    
    modeString = "[   STOP   ]";
    musicPlay  = false;
    musicPause = false;
    
    resetParticles();
}

//--------------------------------------------------------------
void ofApp::resetParticles(){
    
    //----- Initial CenterPoints -----//
    
    ctrPoint.x = ofGetWidth()/2;
    ctrPoint.y = ofGetHeight()/2;
    
    
    //----- Random Color -----//
    
    colorR = ofRandom(100, 255);
    colorG = ofRandom(100, 255);
    colorB = ofRandom(100, 255);
    addColorR = addColorG = addColorB = 2;
    
    
    //----- !!SETUP each Particle!! -----//
    
    for(unsigned int i = 0; i < p.size(); i++){
        p[i].setup();
    }
}

//--------------------------------------------------------------
void ofApp::update(){
    
    ctrPoint.x = ofGetWidth()/2;
    ctrPoint.y = ofGetHeight()/2;
    
    //----- Audio Update -----//
    music.update();
    
    //----- Change Color per Frame -----//
    colorR += addColorR;
    colorG += addColorG;
    colorB += addColorB;
    
    if (colorR > 255 || colorR < 100) {
        addColorR *= -1;
    }
    if (colorG > 255 || colorG < 100) {
        addColorG *= -1;
    }
    if (colorB > 255 || colorB < 100) {
        addColorB *= -1;
    }
    
    //----- !!UPDATE each Particle!! -----//
    for (int i = 0; i < p.size(); i++)  {
        p[i].update(music.fftSmooth[i], ctrPoint);
        cout << i << "/" << p[i].scaledVolume << endl;
    }
}

//--------------------------------------------------------------
void ofApp::draw(){
    
    //----- Draw Gradient Background -----//
    ofBackgroundGradient(ofColor(0), ofColor(50));
    
    //----- Draw Particles and Draw Lines -----//
    ofSetColor(colorR, colorG, colorB);
    
    for(int i = 0; i < p.size(); i++){
        p[i].draw();
        
        ofSetLineWidth(lineWidth);
        if (i+1 < p.size()) {
            ofLine(p[i].pos.x, p[i].pos.y, p[i+1].pos.x, p[i+1].pos.y);
        }
        
        // Last Point connects to the First Point
        if (i+1 == p.size()) {
            ofLine(p[0].pos.x, p[0].pos.y, p[i].pos.x, p[i].pos.y);
        }
    }
    
    ofSetColor(250);
    ofDrawBitmapString("SOUND_VISUALIZATION\n\n" + modeString + "\n\nPLAY  | Key Z \nPAUSE | Key X \nSTOP  | Key C ", 10, 25);
}

//--------------------------------------------------------------
void ofApp::keyPressed  (int key){
    
    if( key == 'z' || key == 'Z'){
        if (musicPlay == false) {
            modeString = "[   PLAY   ]";
            music.musicSrc.play();
            musicPlay = true;
        }
    }
    
    if( key == 'x' || key == 'X'){
        if (musicPlay == true) {
            
            if (musicPause == false) {
                modeString = "[   PAUSE  ]";
                musicPause = true;
            }
            else {
                modeString = "[   PLAY   ]";
                musicPause = false;
            }
            music.musicSrc.setPaused(musicPause);
        }
    }
    
    if( key == 'c' || key == 'C' ){
        modeString = "[   STOP   ]";
        music.musicSrc.stop();
        musicPlay = false;
    }
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

