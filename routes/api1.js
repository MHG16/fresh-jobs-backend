let express = require('express');
let router = express.Router();
let bookshelfApi = require('bookshelf-api');
let path = require('path');
let configuredApi = bookshelfApi({
	path: path.join(__dirname, '..', 'models')
});

router.use('/', configuredApi);


module.exports = router;
