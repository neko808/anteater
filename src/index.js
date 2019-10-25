import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import { postFormulario } from './formulario-inicio/formulario-inicio.controller';
import * as firebase from 'firebase';
import sgMail from '@sendgrid/mail';

const firebaseConfig = {
    apiKey: "AIzaSyAXpaLgSOdhjuLDxhJCa-VI9m5qcVirE_0",
    authDomain: "amarello-anteater-devqa.firebaseapp.com",
    databaseURL: "https://amarello-anteater-devqa.firebaseio.com",
    projectId: "amarello-anteater-devqa",
    storageBucket: "amarello-anteater-devqa.appspot.com",
    messagingSenderId: "573476821214",
    appId: "1:573476821214:web:5895597e2c1a2a16360a4f"
};

// Initialize Sendgrid
// As seen at https://sendgrid.com/docs/for-developers/sending-email/v3-nodejs-code-example/
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if(process.env.NODE_ENV === 'dev') {
    app.use('/template', express.static(__dirname+ '/../email_templates'))
    app.use('/foo', express.static(__dirname + '/../index.html'));
    app.use('/js', express.static(__dirname + '/../js'));
    app.use('/css', express.static(__dirname + '/../css'));
    app.use('/fotos', express.static(__dirname + '/../fotos'));
    app.use('/img', express.static(__dirname + '/../img'));
    app.use('/xjs', express.static(__dirname + '/../xjs'));
}

app.post('/contact', postFormulario(firebase, sgMail))

app.listen(process.env.PORT || 8080, () => {
    console.log({SENDGRID_API_KEY: process.env.SENDGRID_API_KEY})
    console.log(`Running at PORT ${process.env.PORT || 8080}`);
});
