var express = require('express');
var ZillowFile = require('./zillowCall');
var Zillow = require("node-zillow");

const apiKey = require("../apiKey");

var zillow = new Zillow(apiKey.ZillowAPIKey);

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {


	// We will have to add a zillow call here in the case of a page refresh

	console.log("Made it to the map event listener");
  res.render('map', { title: 'Express' });
});

router.post('/', function(req, res){

	var parameters = {
		state: "TN",
		county: "Davidson",
		childtype: "neighborhood"
	};

	zillow.get("GetRegionChildren", parameters)
		.then(function(results){
			res.render('map', {data: ZillowFile.ZillowData(results, req.body.Min, req.body.Max)});
		})
})

module.exports = router;
