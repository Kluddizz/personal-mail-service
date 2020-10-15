const db = require("../db");
const ash = require("../wrap-async");
const log = require("@kluddizz/log");
const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

const mailConfig = require("../nodemailer.json");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: mailConfig,
});

router.post(
  "/",
  ash(async (req, res) => {
    const { email, message } = req.body;

    if (email !== "test@florian-hansen.com") {
      await db.query(
        `
        INSERT
        INTO mail (email, message)
        VALUES ($1, $2);
        `,
        [email, message]
      );

      const mailOptions = {
        from: mailConfig.user,
        to: mailConfig.user,
        subject: "New message from personal website",
        text: `There is a new message from ${email}:\n\n${message}`,
      };

      await transporter.sendMail(mailOptions);
      log(`received new mail from ${email}`);
    }

    res.status(200).json({
      status: 200,
      message: "The mail has been sent successfully",
    });
  })
);

module.exports = router;
