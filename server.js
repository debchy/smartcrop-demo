const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3004;

const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.post('/upload', upload.single('image'), (req, res) => {
  res.redirect(`/crop.html?img=${req.file.filename}`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});