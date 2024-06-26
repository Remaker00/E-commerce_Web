const Sib = require('sib-api-v3-sdk');

const client = Sib.ApiClient.instance;
console.log("Hurray");

const apiKey = client.authentications['api-key'];
apiKey.apiKey = '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';

const tranEmailApi = new Sib.TransactionalEmailsApi();

exports.sendTransactionalEmail = async (req, res) => {
    const sender = { email: 'nishant.sharma8507966@gmail.com' };

    const receivers = [{ email: req.body.email }];
    
    try {
        await tranEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: 'Request for reset your password',
            textContent: `Learning SendinBlue functions and how they work`,
            htmlContent: `<a href="http://localhost:3000/resetpassword.html">Reset password</a>`,
        });
        console.log('Email sent successfully');
        res.status(201).send("Working fine by me");
    } catch (error) {
        console.error('Error sending email:', error);
    }
};