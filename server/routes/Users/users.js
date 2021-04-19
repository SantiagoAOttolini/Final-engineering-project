const express = require("express");
const router = express.Router();
const { User } = require("../../models/User");
const { auth } = require("../../middleware/auth");
const nodemailer = require("nodemailer");
const generator = require("generate-password");
//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    accountType: req.user.accountType,
    role: req.user.role,
    image: req.user.image,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

router.post("/login", (req, res) => {
  //Busca que el email coincida con el de la BD
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });
      //Luego compara la contraseña encriptada
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });

      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
        res.cookie("w_authExp", user.tokenExp);
        res.cookie("w_auth", user.token).status(200).json({
          loginSuccess: true,
          userId: user._id,
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id },
    { token: "", tokenExp: "" },
    (err, doc) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).send({
        success: true,
      });
    }
  );
});
//Send mail
router.post("/sendMail", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.status(500).send({
        loginSuccess: false,
        message: "Auth failed, email not found",
      });
    else {
      var newPassword = generator.generate({
        length: 10,
        numbers: true,
      });
      const thisUser = req.body.email;

      User.update((err) => {
        user.password = newPassword;

        user.save((err, doc) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({
            success: true,
            msg: "Mongo Modificado",
          });
        });
      });

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        post: 587,
        secure: false,
        auth: {
          user: "soporte.arteculinario@gmail.com",
          pass: "sANTI123",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      const mailOptions = {
        from: "Remitente",
        to: thisUser,
        subject: "Recuperacion de contraseña |Arte Culinario|",
        text: `Tu nueva contraseña es ${newPassword} es recomendable que la cambies en tu proximo inicio de sesion. Gracias.`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          emailMessage =
            "there was an error :-(, and it was this: " + error.message;
        } else {
          emailMessage = "Message sent: " + info.response;
        }
        console.log(emailMessage);
      });
    }
  });
});

// RESET2
router.post("/reset", (req, res) => {
  const thisPass = req.body.password;
  const thisUser = req.body.user.userData;
  User.findOne({ _id: thisUser._id }, (err, user) => {
    console.log(thisPass, thisUser);
    if (!user)
      return res.status(500).send({
        loginSuccess: false,
        message: err.message,
      });
    else {
      User.update((err) => {
        user.password = thisPass;
        console.log(thisUser.password);
        user.save((err, doc) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).json({
            success: true,
            msg: "Mongo Modificado",
            data: user,
          });
        });
      });
    }
  });
});

module.exports = router;
