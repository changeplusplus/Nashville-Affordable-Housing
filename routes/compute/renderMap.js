var express = require('express');
var Zillow = require("node-zillow");

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAVREr3MauahqvrH4a6SvvG5oZIYuaprFo'
});

var renderMap = {}

/* GET home page. */
renderMap.callApi = function(){
      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 36.1627, lng: -86.7816},
          zoom: 8
        });
      }
}

module.exports = router;
