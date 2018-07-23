var express = require('express');

var map = {};	

var maxRent;
var minRent;

map.SendParam = function setValues(maxRentParam, minRentParam){
	maxRent = maxRentParam;
	minRent = minRentParam;
	console.log("map.js received the params:" + maxRent + " and " + minRent);
}

map.ReturnMax = function returnMax(){
	console.log("" + maxRent);
	return maxRent;
}

map.ReturnMin = function returnMin(){
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

module.exports = map;
