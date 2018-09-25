var express = require('express');
var ZillowFile = require('./zillowCall');
var Zillow = require("node-zillow");

const apiKey = require("../apiKey");

var zillow = new Zillow(apiKey.ZillowAPIKey);

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("Made it to the map event listener");
  res.render('map', { title: 'Express' });
});

router.post('/', function(req, res){

	console.log("Received %s and %s in the form", req.body.Max, req.body.Min);

	var parameters = {
		state: "TN",
		county: "Davidson",
		childtype: "neighborhood"
	};

	zillow.get("GetRegionChildren", parameters)
		.then(function(results){
			console.log(ZillowFile.ZillowData(results));
			res.render('map', {title: ZillowFile.ZillowData(results)});
		})
})

module.exports = router;
