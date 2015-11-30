
#include "BeatAnalyze.h"

//--------------------------------------------------------------
void BeatAnalyze::setup(){
    
    ofSetVerticalSync(true);
    
    musicSrc.loadSound("sounds/Cinema.mp3");
    
    fftSmooth = new float [8192];
    for (int i = 0; i < 8192; i++) {
        fftSmooth[i] = 0;
    }
    
    numBands = 128;
    musicSrc.setLoop(true);
    musicSrc.setVolume(0.2);
}

//--------------------------------------------------------------
void BeatAnalyze::update(){
    
    ofSoundUpdate();
    
    float * value = ofSoundGetSpectrum(numBands);
    for (int i = 0; i < numBands; i++) {
        fftSmooth[i] *= 0.5f;
        
        if (fftSmooth[i] < value[i]) {
            fftSmooth[i] = value[i];
        }
        sampling += fftSmooth[i];
    }
    sampling /= numBands;
}

