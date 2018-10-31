'use strict';

var express = require('express');
var ZillowFile = require('./zillowCall');
var Zillow = require("node-zillow");

const apiKey = require("../apiKey");
// const yelp = require('yelp-fusion');

// const client = yelp.client('KRx1-BYf9i8VbOnb0zb55WmzssYGbVwZFriVwmBzbSgBDM7erv3RPjHBlp2D77A3SElKSUERp-pNEcyRFMOJsPa2GQdMUCmOkIbbqnusqwt47zTrFGAJR6TqGMDPW3Yx');
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
    
    /**yelp data**/
    
    
//    const searchRequest = {
//        term: 'school'
//    };
        

    
//    client.search(searchRequest).then(response => {
//        const latitude = response.jsonBody.businesses[0].coordinates.latitude;
//        const longitude = response.jsonBody.businesses[0].coordinates.longitude;
//        console.log(longitude);
//        
//    }).catch(e => {
//        console.log(e);
//    });
    
    //let params = [{latitude: '36.1627', longitude: '-86.7816', radius: '1000'}];
//    
    //yelp.query('businesses/search', params).then(data => {});

    
    /**end of yelp**/

	zillow.get("GetRegionChildren", parameters)
		.then(function(results){
			res.render('map', {data: ZillowFile.ZillowData(results, req.body.Min, req.body.Max)});
		})
})

module.exports = router;
