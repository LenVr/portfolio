const nodemailer = require('nodemailer');


function sendEmail(name, email, phone) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'villalobosrojas22@gmail.com',
            pass: 'citasonline',
        }
    });

    const mailOptions = {
        from: 'villalobosrojas22@gmail.com',
        to: 'saulvr2908@gmail.com',
        subject: 'Nuevo formulario enviado',
        html: `<p>Nombre: ${name}</p>
               <p>Correo electrónico: ${email}</p>
               <p>Número telefónico: ${phone}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Correo Electrónico enviado: ' + info.response);
        }
    });
}

module.exports = sendEmail;