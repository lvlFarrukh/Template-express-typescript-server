import nodemailer from 'nodemailer';

const TRANSPORTER = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODE_MAILER_EMAIL,
        pass: process.env.NODE_MAILER_PASSWORD
    }
});

const sendEmail = (TEMPLATE: any) => {
    TRANSPORTER.sendMail(TEMPLATE, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const USER_VERFICATION_EMAIL = (from: string, to: string, url: string) => {

    let template = {
        from,  // sender address
        to,   // list of receivers
        subject: 'User Verfication',
        text: 'Wellcome to Overseas Pakistan.',
        html: `<b>Please Click the below link for verification! </b>
        < br > ${url} < br /> `
    }
    sendEmail(USER_VERFICATION)
}

export {
    USER_VERFICATION_EMAIL
}
