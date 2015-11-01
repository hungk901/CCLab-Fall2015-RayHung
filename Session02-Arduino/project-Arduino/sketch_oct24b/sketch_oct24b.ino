const int numLED = 11;
const int sampleWindow = 30;
int dbValue[sampleWindow] = { };
int sample = 0;
int dbAverage = 0;

int dbMax = 1023;
int dbMin = 0;

void setup(){

  // Setup all LEDs pin02~pin12.
  for(int i = 0; i < numLED; i++){
    pinMode(2+i, OUTPUT);
  }
  Serial.begin(9600);
}

void loop(){
  
  float sensorValue = analogRead(A0);

  // Input was LOUD=0 / QUIET=1023, so Transform to QUIET=0 / LOUD=1023.
  sensorValue = map(sensorValue, 1023, 0, 0, 1023); 

  dbValue[sample%sampleWindow] = sensorValue;

  // Get Sound Sample.
  if(sample%sampleWindow == 0){
    
    // Turn off all LEDs.
    for(int i = 0; i < numLED; i++){
      digitalWrite(2+i, LOW);
    }

    // Get Average Loudness.
    for(int i = 0; i < sampleWindow; i++){
      dbAverage += dbValue[i];
    }
    dbAverage /= sampleWindow;  // db Average.

    // Calibration
    if (dbAverage < 1024){
      if (dbAverage > dbMax){
        dbMax = dbAverage;
      }
      else if (dbAverage < dbMin){
        dbMin = dbAverage;
      }
    }
    // Serial.println(dbAverage);
    dbAverage = map(dbAverage, dbMin, dbMax, 0, 12);  // Remapping Value.
    
    Serial.println(dbAverage);
    
    for(int i = 0; i <= numLED; i++){
      if(i < dbAverage){
        digitalWrite(2+i, HIGH);
        digitalWrite(3+i, HIGH);
      }
    }

    // Reset Sample.
    if(sample > sampleWindow){
      sample = 0;
    }
  }
  
  sample++;
}
