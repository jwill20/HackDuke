app.post('/', (req, res) => { 
  ts("index:post","POST from Google Asssistant"); 
  res.setHeader('Content-Type', 'application/json');
  res.append('Google-Assistant-API-Version', 'v2');
  res.json(getResponse());
}); 




function getResponse() {
  var returnValue = {
    "expectUserResponse": true,
    "expectedInputs": [
      {
        "possibleIntents": [
          {
            "intent": "actions.intent.TEXT"
          }
        ],
        "inputPrompt": {
          "richInitialPrompt": {
            "items": [
              {
                "simpleResponse": {
                  "textToSpeech": "Hi, welcome to the Hackathon app."
                }
              }
            ]
          }
        }
      }
    ]
  }
  return returnValue;
}






