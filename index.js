'use strict';

// Imports dependencies and set up http server
const
  express = require('express'),
  request = require('request'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening on port 1337'));

/************************************************************/
/* POST from Google Assistant                               */
/************************************************************/
app.post('/', (req, res) => { 
  ts("index:post","POST from Google Asssistant"); 
  res.setHeader('Content-Type', 'application/json');
  res.append('Google-Assistant-API-Version', 'v2');
  res.json(getResponse());
});  

/************************************************************/
/* Healthcheck endpoint                                     */
/************************************************************/
app.get('/health', (req, res) => {
  ts("index:post","Health is good"); 
  res.status(200).send("Health is good");
});

/************************************************************/
/* getResponse                                              */
/************************************************************/
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

/************************************************************/
/* ts - logging function                                    */
/************************************************************/
function ts(location, message)
{
   console.log("[" + new Date().toISOString() + "]" + " " + location + " ==> " + message);
}





