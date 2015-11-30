#ifndef __SoundVisualization__Particles__
#define __SoundVisualization__Particles__

#include "ofMain.h"
#include "BeatAnalyze.h"

class Particles{
    
public:
    void setup();
    void update(float _scaledVolume, ofPoint _centerPoint);
    void draw();
    
    ofPoint pos;            // Position X, Y
    ofPoint vel;            // Velocity X, Y
    ofPoint frc;            // Force X, Y
    float particleScale;    // Particle Scale
    float drag;             // Drag
    
    ofPoint centerPoint;                // Center of Window
    ofPoint distance;                   // Distance from Center to Particle
    float boundaryRadius;               // Radius of Boundary
    
    float scaledVolume;                 // Volume after Scaled
    float mapping;
};

#endif /* defined(__SoundVisualization__Particles__) */
