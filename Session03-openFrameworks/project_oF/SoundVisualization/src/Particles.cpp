
#include "Particles.h"

//------------------------------------------------------------------
void Particles::setup(){
    
    pos.x = ofGetWidth()/2;
    pos.y = ofGetHeight()/2;
    
    vel.x = cos(ofRandom(0, 2*PI));
    vel.y = sin(ofRandom(0, 2*PI));
    
    frc   = ofPoint(0,0,0);
    drag  = ofRandom(0.95, 0.998);
    particleScale = 0.1;
    
    boundaryRadius = 400.0;
}

//------------------------------------------------------------------
void Particles::update(float _scaledVolume ,ofPoint _centerPoint){
    
    //---------- 01. Pass Parameters --------------------//
    
    scaledVolume  = _scaledVolume;
    centerPoint.x = _centerPoint.x;
    centerPoint.y = _centerPoint.y;
    
    
    //---------- 02. SOUND MOTION --------------------//
    
    scaledVolume *= 175;
    
    pos.x += scaledVolume * cos(ofRandom(0, 2*PI));
    pos.y += scaledVolume * sin(ofRandom(0, 2*PI));
    
    frc = centerPoint-pos;
    frc.normalize();
    
    mapping = ofMap(scaledVolume, 0, 100, 1, 0.95);
    
    vel *= drag * mapping;
    vel += frc;
    
    
    //---------- 03. UPDATE POSITION ----------//
    
    pos += vel;
    
    
    //---------- 04. BOUNDARY ----------//
    //    distance = pos - centerPoint;
    //    if ( sqrtf( powf(fabs(distance.x), 2.0) + powf(fabs(distance.y), 2.0) ) > boundaryRadius){
    //        distance.normalize();
    //        pos.x = centerPoint.x + (boundaryRadius * distance.x);
    //        pos.y = centerPoint.y + (boundaryRadius * distance.y);
    //        vel *= -1.0;
    //    }
}

//------------------------------------------------------------------
void Particles::draw(){
    ofCircle(pos.x, pos.y, particleScale);
}

