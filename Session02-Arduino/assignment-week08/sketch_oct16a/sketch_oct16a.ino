
int ledRed = 11;
int ledYellow = 10;
int ledGreen = 9;

int threshold = 500;
int brightness = 0;

void setup() {
  Serial.begin(9600);
  pinMode(ledRed, OUTPUT);
  pinMode(ledYellow, OUTPUT);
  pinMode(ledGreen, OUTPUT);
}

void loop() {

  int sensorValue = analogRead(A0);
  brightness = map(sensorValue, 1023, 0, 0, 255);
  
  if(sensorValue < threshold){
    digitalWrite(ledRed, HIGH);
    digitalWrite(ledYellow, HIGH);
    digitalWrite(ledGreen, HIGH);
  }
  else{
    analogWrite(ledRed, brightness);
    analogWrite(ledYellow, brightness);
    analogWrite(ledGreen, brightness);
  }

  Serial.println(sensorValue);
  delay(1);
}
