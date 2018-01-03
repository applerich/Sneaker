var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var router = express.Router();

router.use(bodyParser.urlencoded({
  	extended: true
}));

/* GET home page. */
router.get('/', function(req, res, next) {
  	res.render('index', { title: 'Sneaker' });
});

/* POST monitor page */
router.post('/monitor', function(req, res, next) {
	
	// POST variables
	var itemURL = req.body.url;
	var website = req.body.website;
	var size = req.body.size;

	request.post({url:'https://www.holypopstore.com/index.php', form: {
		controller: 'orders',
		action: 'addStockItemToBasket',
		stockItemId: '24843',
		quantity: '1',
		site: 'site',
		skin: 'holypop',
		language: 'EN'
	}}, function(err, httpResponse, body) {
		console.log("httpResponse: ", httpResponse)
	});

});

module.exports = router;
