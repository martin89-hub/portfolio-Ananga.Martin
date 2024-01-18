const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour traiter les données JSON dans les requêtes
app.use(bodyParser.json());

// Endpoint pour recevoir les données du formulaire
app.post('/send-email', (req, res) => {
    const { firstName, lastName, subject, message } = req.body;

    // Configurez votre service de messagerie (exemple utilisant nodemailer avec un compte Gmail)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'martinananga@gmail.com',
            pass: 'barcelone',
        },
    });

    // Options du message e-mail
    const mailOptions = {
        from: 'martinananga@gmail.com',
        to: 'destinataire@example.com',
        subject: `Nouveau message de ${firstName} ${lastName}: ${subject}`,
        text: message,
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            return res.status(500).json({ success: false, error: 'Erreur lors de l\'envoi de l\'e-mail.' });
        }

        console.log('E-mail envoyé:', info.response);
        res.status(200).json({ success: true, message: 'E-mail envoyé avec succès!' });
    });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
