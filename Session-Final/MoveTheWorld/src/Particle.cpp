#include "Particle.h"

//--------------------------------------------------------------
void Particle::setup(){
    
    pos.x = ofRandomWidth();
    pos.y = ofRandomHeight();
    
    vel.x = 0;
    vel.y = 0;
    
    particleSize = 1;
    
    colorR = ofRandom(100,180);
    colorG = ofRandom(50,120);
    colorB = ofRandom(100,200);
}

//--------------------------------------------------------------
void Particle::update(){
    
    vel += frc;
    pos += vel;
    
    //----- MAKE ALL PARTICLES STAY INSIDE THE WINDOW -----//
    if (pos.x > ofGetWidth()) {
        pos.x = ofGetWidth();
        vel.x *= -1.0;
    }else if (pos.x < 0) {
        pos.x = 0;
        vel.x *= -1.0;
    }
    if (pos.y > ofGetHeight()) {
        pos.y = ofGetHeight();
        vel.y *= -1.0;
    }
    else if (pos.y < 0) {
        pos.y = 0;
        vel.y *= -1.0;
    }
}

//--------------------------------------------------------------
void Particle::draw(){
    
    ofSetColor(colorR, colorG, colorB);
    ofCircle(pos.x, pos.y, particleSize);
}

//--------------------------------------------------------------
void Particle::attraction(ofPoint _centerPt, float _attractionRadius, float _attractionFrc){
    
    centerPt         = _centerPt;
    attractionRadius = _attractionRadius;
    attractionFrc    = _attractionFrc;
    
    ofPoint dist = pos - centerPt;
    
    if (dist.length() < attractionRadius) {
        float percentage = 1 - (dist.length()/attractionRadius);
        dist.normalize();
        frc -= dist * attractionFrc * percentage;
    }
}

//--------------------------------------------------------------
void Particle::repulsion(ofPoint _centerPt, float _repulsionRadius, float _repulsionFrc){
    
    centerPt        = _centerPt;
    repulsionRadius = _repulsionRadius;
    repulsionFrc    = _repulsionRadius;
    
    ofPoint dist = pos - centerPt;
    
    if (dist.length() < repulsionRadius) {
        float percentage = 1 - (dist.length()/repulsionRadius);
        dist.normalize();
        frc += dist * repulsionFrc * percentage;
    }
}

//--------------------------------------------------------------
void Particle::friction(float _frictionFrc){
    frictionFrc = _frictionFrc;
    frc -= vel * frictionFrc;
}

//--------------------------------------------------------------
void Particle::trailing(ofPoint _previousPt){

    previousPt = _previousPt;
    float trailingSpeed = 0.1;
    
    pos += (previousPt-pos)*trailingSpeed;
}

//--------------------------------------------------------------
void Particle::resetForce(){
    frc *= 0;
}