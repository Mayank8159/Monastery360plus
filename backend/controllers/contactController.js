const ContactMessage = require('../models/ContactMessage');

const saveContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newContactMessage = new ContactMessage({ name, email, message });
    await newContactMessage.save(); 

    res.status(200).json({ success: 'Message saved successfully!' });

  } catch (error) {
    console.error('Error saving message:', error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    res.status(500).json({ error: 'Failed to save message.' });
  }
};

module.exports = { saveContactForm };