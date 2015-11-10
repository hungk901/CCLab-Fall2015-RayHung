#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp{

	public:
		void setup();
		void update();
		void draw();

		void keyPressed(int key);
		void keyReleased(int key);
		void mouseMoved(int x, int y );
		void mouseDragged(int x, int y, int button);
		void mousePressed(int x, int y, int button);
		void mouseReleased(int x, int y, int button);
		void windowResized(int w, int h);
		void dragEvent(ofDragInfo dragInfo);
		void gotMessage(ofMessage msg);
    
        bool ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9;
    
        int xPos_1, xPos_2, xPos_3;
        int yPos_1, yPos_2, yPos_3;
    
        ofColor allBallColor;

        int radius;
};
