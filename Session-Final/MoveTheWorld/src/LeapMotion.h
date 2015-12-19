#pragma once

#include "ofMain.h"
#include "ofxLeapMotion.h"

class LeapMotion : public ofBaseApp{

  public:
    void setup();
    void update();
    void draw();

    void exit();
		
	ofxLeapMotion leap;
	vector <ofxLeapMotionSimpleHand> simpleHands;
    
	vector <int> fingersFound; 
	ofEasyCam cam;
	ofLight l1;
	ofLight l2;
	ofMaterial m1;
	
	map <int, ofPolyline> fingerTrails;
};
