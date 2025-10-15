const express = require("express");
const router = express.Router();
const sendMail = require("../utils/sendMail"); // use your existing mail utility

router.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    await sendMail({
      email: process.env.SMPT_MAIL, // your inbox (so you receive the message)
      subject: "New Newsletter Subscriber",
      message: `A new user has subscribed to your newsletter:\n\nEmail: ${email}`,
    });

    res.status(200).json({ message: "Subscription sent successfully!" });
  } catch (error) {
    console.error("Error sending subscription email:", error);
    res.status(500).json({ message: "Failed to send subscription" });
  }
});

module.exports = router;
