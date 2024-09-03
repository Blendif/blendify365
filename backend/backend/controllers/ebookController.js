const Ebook = require('../models/Ebook');

exports.getEbooks = async (req, res) => {
  try {
    const ebooks = await Ebook.find();
    res.json(ebooks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getEbookById = async (req, res) => {
  try {
    const ebook = await Ebook.findById(req.params.id);
    if (!ebook) return res.status(404).json({ error: 'Ebook not found' });
    res.json(ebook);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
