const multer = require('multer');
const path = require('path');

// Define storage options
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'C:/xampp/htdocs/img/ecommerce'); // Adjust this path as needed
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Define file filter
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type, only JPEG, PNG and JPG are allowed!'), false);
    }
};

// Configure multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024 // 1 MB limit
    },
    fileFilter: fileFilter
});

module.exports = {
    upload
};
