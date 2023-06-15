const sendgMail = require('@sendgrid/mail');

const sendGridAPIKey = '' // use your API KEY
// create api key
// verify sender

sendgMail.setApiKey(sendGridAPIKey);


sendgMail.send({
    to: ['pkmrdemousage@gmail.com','pawandemousage@gmail.com'],
    from: 'pawandemousage@gmail.com',
    subject: 'Email from node.js app',
    text:'Welcome to sendgrid training',
    html:`<h1>Hello</h1>`
},true)
.then(()=>{
    console.log('email was sent')
})
.catch((err)=>{
    console.log(err);
})
