int ledGreen = 13;
int ledYellow = 12;
int ledRed = 11;

int buttonPin01 = 2;
int buttonPin02 = 4;

int buttonState01 = 0;
int buttonState02 = 0;

void setup() {
  Serial.begin(9600);
  
  pinMode(ledGreen, OUTPUT);  // Green LED to pin 13 as output.
  pinMode(ledYellow, OUTPUT); // Red LED to pin 12 as output.
  pinMode(ledRed, OUTPUT);    // Red LED to pin 11 as output.
  
  pinMode(buttonPin01, INPUT); // Button01 to pin 2 as input.
  pinMode(buttonPin02, INPUT); // Button02 to pin 4 as input.
}


void loop() {
  buttonState01 = digitalRead(buttonPin01);
  buttonState02 = digitalRead(buttonPin02);

  // Press Button02, turn on Green LED.
  if(buttonState01 == HIGH && buttonState02 == LOW){
    digitalWrite(13, HIGH);
    delay(250);
  }

  // Press Button02, turn on Red LED.
  if(buttonState02 == HIGH && buttonState01 == LOW){
    digitalWrite(11, HIGH);
    delay(250);
  }

  // Press both Button, LEDs do Neon Effect.
  if(buttonState01 == HIGH && buttonState02 == HIGH){
    digitalWrite(11, HIGH);
    digitalWrite(12, LOW);
    digitalWrite(13, LOW);
    delay(250);
    
    digitalWrite(11, LOW);
    digitalWrite(12, HIGH);
    digitalWrite(13, LOW);    
    delay(250);
    
    digitalWrite(11, LOW);
    digitalWrite(12, LOW);
    digitalWrite(13, HIGH);
    delay(250);
  }

  // No Buttons be pressed, turn off all LEDs.
  else{
    digitalWrite(11, LOW);
    digitalWrite(12, LOW);
    digitalWrite(13, LOW);
    delay(250);
  }
}
