const nodemailer = require('nodemailer');
const MyConstants = require('./MyConstants');
const trasporter = nodemailer.createTransport({
    service:'gmail',
    auth: {user:MyConstants.EMAIL_USER, pass:MyConstants.EMAIL_PASS}
});
const EmailUtil = {
    send(email, id, token){
        const text = 'Thanks for signing up, please input these informations to activate your account:\n\t . id: ' + id + '\n\t .token: ' +token;
        return new Promise(function (resolve, reject){
            const mailOptions = {
                form: MyConstants.EMAIL_USER,
                to:email,
                subject:'Sign up || Verification',
                text:text
            };
            trasporter.sendMail(mailOptions, function(err,result){
                if (err) reject(err);
                resolve(true);
    
            });
        });
    }
};
module.exports = EmailUtil;