var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var novedadesModel = require('../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* GET home page. */
router.get('/', async function (req, res, next) {

  var novedades = await novedadesModel.getNovedades();
  novedades = novedades.splice(0,5);
  novedades = novedades.map(novedad => {
    if (novedad.img_id) {
        const imagen = cloudinary.url(novedad.img_id, {
            width: 120,
            height: 50,
            crop: 'fill'
        });
        const imagenfull = cloudinary.url(novedad.img_id, {});
        return {
            ...novedad,
            imagen,
            imagenfull
        }
    } else {
        return {
            ...novedad,
            imagen: '',
            imagenfull: ''
        }
    }
});

  res.render('index', {
    novedades
  });
});

router.post('/', async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var telefono = req.body.telefono;
  var cursos = req.body.cursos;
  var nivel = req.body.nivel;
  var edad = req.body.edad;
  var mensaje = req.body.mensaje;
  /*console.log(req.body) */

  var obj = {
    to: 'ingles.aldana@gmail.com',
    subject: 'Contacto desde el sitio',
    html: nombre + "" + apellido + " se contactó a través del sitio y quiere mas info a este correo: " + email + ". <br> Además, hizo el siguiente comentario: " + mensaje + ". <br> Su tel es " + telefono
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });


  var info = await transport.sendMail(obj);

  res.render('index', {
    message: 'Mensaje enviado correctamente',
  });

})

module.exports = router;
