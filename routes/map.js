var express = require('express');
var ZillowFile = require('../views/zillowCall');
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
	console.log("You sent %s and %s in the form", req.body.Max, req.body.Min);

	var parameters = {
		state: "TN",
		county: "Davidson",
		childtype: "neighborhood"
	};

	zillow.get("GetRegionChildren", parameters)
		.then(function(results){
			console.log("The results are: ");
			console.log(results);
			console.log(ZillowFile.ZillowData(results));
			//res.render('map', {title: ZillowFile.ZillowData(results)});
		})
	/*
	map.QuandlData(quandl.dataset("ZILLOW", "ZIP_RMP_37011", function(err, resp){
		if (err){
			throw err;
		}

		console.log(resp);
		return resp;
	}))
	*/
})


/*
var ZillowData = function zillowData(response){
	var j = 0;

	var numberOfLocations = parseInt(response.response.list.count);
	var regionArray = response.response.list.region;

	var neighborhoodsWithZIndex = [];

	for (var i = 0; i < numberOfLocations; ++i){
		var region = regionArray[i];

		if (region.zindex != null){

			var neighborhood = {};

			neighborhood.ZIndex = region.zindex[0]._;
			neighborhood.Lat = region.latitude[0];
			neighborhood.Long = region.longitude[0];

			neighborhoodsWithZIndex.push(neighborhood);

			++j;
		}
	}

	return neighborhoodsWithZIndex;
}
*/

module.exports = router;
