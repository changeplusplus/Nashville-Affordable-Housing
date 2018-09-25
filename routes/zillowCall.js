var Zillow = {}

Zillow.ZillowData = function zillowData(response){

  var regionArray = response.response.list.region;

  return regionArray.reduce(function(data, neighborhood) {
    if (neighborhood.zindex != null){
        
      var newNeighborhood =           
        {
          ZIndex: neighborhood.zindex[0]._,
          Name: neighborhood.name[0],
          Lat: neighborhood.latitude[0],
          Long: neighborhood.longitude[0]
        };

      data.push(newNeighborhood);
    }
      return data;
  }, []);
}

module.exports = Zillow;