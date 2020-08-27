/* automationg emails with node.js :p
first you have to install the api by using the terminal  in the folder you want to use
1st use  "npm init", 2nd "npm install nodemailer" and start coding.
*/
var nodemailer = require('nodemailer'); // imporing the api

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "youremail@mail.com", // email account
        pass: "email password" // password from email account 
    }
});
/*configureing your message to and from the sender, the subject matter text and html using 
header tag and a paragraph tag.
*/
var mailOptions = {
    from: 'jaysmit102@gmail.com', // your email
    to: 'someone@example.com', //sender one address
    to: "someone@example.com", // senders two address
    subject: 'sending email with node',
    text: 'Hello this is my first email sending it with node instead python',
    html: '<h1>Ezra!?</h1> <p>Hello anin, we are reaching out to you because you are past due on your sleep.work in that! </p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log('error');
    } else {
        console.log('email sent!');
    }
});