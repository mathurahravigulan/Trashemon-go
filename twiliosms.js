const accountSid = 'ACCOUNTSID_environment';
const authToken = 'AUTHTOKEN_environment';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Thank you for signing on today. Did you know that nearly 80% of water bottles are not recycled? Do your part and do away with your waste.',
     from: 'number1',
     to: 'number2'
   })
  .then(message => console.log(message.sid));
