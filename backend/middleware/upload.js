const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Define target directory path (backend/uploads)
const uploadDir = path.join(__dirname, '../uploads');

// Automatically create the uploads folder if it doesn't exist on Render
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

module.exports = upload;
