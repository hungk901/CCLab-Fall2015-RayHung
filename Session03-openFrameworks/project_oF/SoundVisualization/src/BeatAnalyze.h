#ifndef __SoundVisualization__BeatAnalyze__
#define __SoundVisualization__BeatAnalyze__

#include "ofMain.h"

class BeatAnalyze{
    
public:
    void setup();
    void update();
				
    ofSoundPlayer musicSrc;
    
    float * fftSmooth;
    int numBands;
    float sampling;
};

#endif /* defined(__SoundVisualization__BeatAnalyze__) */
