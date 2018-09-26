'use strict';

const yelp = require('yelp-fusion');

const apiKey = require("./apiKey");

const client = yelp.client(apiKey.YelpAPIKey);

var testTerm = 'food';
// 'Four Barrel Coffee'
var testLoc = 'nashville';

const searchRequest = {
    term: testTerm,
    location: testLoc
};

client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses[0];
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
}).catch(e => {
    console.log(e);
});

/*client.search(searchRequest).then(response => {
    console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
    console.log(e);
});*/

/*

client.search({
    term: testTerm,
    location: 'san fancisco, ca'
}).then(function(data){
    console.log(data);
}).catch(e => {
    console.log(e);
})
*/
