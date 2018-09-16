var Zillow = {}

Zillow.ZillowData = function zillowData(response){
  var j = 0;

  var numberOfLocations = parseInt(response.response.list.count);
  var regionArray = response.response.list.region;

  var neighborhoodsWithZIndex = [];

  for (var i = 0; i < numberOfLocations; ++i){
    var region = regionArray[i];

    if (region.zindex != null){

      var neighborhood = {};

      console.log(region);

      neighborhood.Name = region.name[0];
      neighborhood.ZIndex = region.zindex[0]._;
      neighborhood.Lat = region.latitude[0];
      neighborhood.Long = region.longitude[0];

      neighborhoodsWithZIndex.push(neighborhood);

      ++j;
    }
  }

  return neighborhoodsWithZIndex;
}

module.exports = Zillow;