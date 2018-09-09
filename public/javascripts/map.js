var maxRent = -1;
var minRent = -1;

var Map = {};

var neighborhoodsWithZIndex = {};

Map.SendParam = function setValues(maxRentParam, minRentParam){
	maxRent = maxRentParam;
	minRent = minRentParam;
	console.log("map.js received the params:" + maxRent + " and " + minRent);
}

Map.ZillowData = function zillowData(response){
	var j = 0;

	var regionArray = response.response.list.region;

	console.log("Stuff below");

	for (var i = 0; i < numberOfLocations; ++i){
		var region = regionArray[i];

		if (region.zindex != null){

			console.log(region.zindex[0]._);
			console.log(region.latitude[0]);
			console.log(region.longitude[0]);

			Object.assign(neighborhoodsWithZIndex[j], {zindex: region.zindex[0]._});
			Object.assign(neighborhoodsWithZIndex[j], {latitude: region.latitude[0]})
			Object.assign(neighborhoodsWithZIndex[j], {longitude: region.longitude[0]});
			++j;
		}
	}

	console.log(neighborhoodsWithZIndex);

	console.log("Done");
}

Map.isFilled = function isFilled(){	
	return maxRent != -1;
}

Map.ReturnMax = function returnMax(){
	console.log("" + maxRent);
	return maxRent;
}

Map.ReturnMin = function returnMin(){
	console.log("" + minRent);
	return minRent;
}

/*
map.RenderMap = function initMap() {
	var map;
    map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 36.1627, lng: -86.7816},
        zoom: 8
    });
    return map;
}
*/

module.exports = Map;
