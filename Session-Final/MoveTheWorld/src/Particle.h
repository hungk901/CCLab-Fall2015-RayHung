#include "ofMain.h"

class Particle : public ofBaseApp{
    
    public:

        void setup();
        void update();
        void draw();
    
        void attraction(ofPoint _centerPt, float _attractionRadius, float _attractionFrc);
        void repulsion(ofPoint _centerPt, float _repulsionRadius, float _repulsionFrc);
        void friction(float _frictionFrc);
        void trailing(ofPoint _previousPt);
        void resetForce();
    
        ofPoint pos;
        ofPoint vel;
        ofPoint frc;
        ofPoint centerPt;   // The center point for attraction or repulsion.
        ofPoint previousPt; // Previous Particle pos for the next one to trail.
    
        float attractionRadius; // The radius that attraction works.
        float repulsionRadius;  // The radius that repulsion works.
        float attractionFrc, repulsionFrc, frictionFrc;
    
        float particleSize;
    
        ofColor color;
        int colorR, colorG, colorB;
};
