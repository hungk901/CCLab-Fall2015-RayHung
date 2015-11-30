#pragma once

#include "ofMain.h"
#include "BeatAnalyze.h"
#include "Particles.h"

class ofApp : public ofBaseApp{
    
public:
    
    void setup();
    void update();
    void draw();
    
    void resetParticles();
    
    void keyPressed(int key);
    void keyReleased(int key);
    void mouseMoved(int x, int y );
    void mouseDragged(int x, int y, int button);
    void mousePressed(int x, int y, int button);
    void mouseReleased(int x, int y, int button);
    void windowResized(int w, int h);
    void dragEvent(ofDragInfo dragInfo);
    void gotMessage(ofMessage msg);
    
    BeatAnalyze music; // Music Start
    
    vector <Particles> p;           // Particles Array
    ofPoint ctrPoint;               // Center Point
    
    int colorR, colorG,colorB;              // R, G, B Color
    int addColorR, addColorG, addColorB;    // R, G, B add Value
    
    int numOfParticles;
    float lineWidth;
    
    string modeString;      // Mode String
    bool musicPlay;
    bool musicPause;
};

