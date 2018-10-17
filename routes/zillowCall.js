var Zillow = {}

Zillow.ZillowData = function zillowData(response, minRent, maxRent){

  var regionArray = response.response.list.region;

  return regionArray.reduce(function(data, neighborhood) {
    if (neighborhood.zindex != null && neighborhood.zindex[0]._ * .008 > minRent && neighborhood.zindex[0]._ * .011 < maxRent){

      var newNeighborhood =           
        {
          ZIndex: neighborhood.zindex[0]._,
          Name: neighborhood.name[0],
          Lat: Number(neighborhood.latitude[0]),
          Long: Number(neighborhood.longitude[0])
        };

      data.push(newNeighborhood);
    }
      return data;
  }, []);
}

module.exports = Zillow;

/*
The average value of homes in Lennox Village is 182600
The average value of homes in Heron Walk is 117600
The average value of homes in West Meade is 402600
The average value of homes in Brick Church Bellshire is 120700
The average value of homes in Glencliff is 132200
The average value of homes in Inglewood (Riverwood) is 200700
The average value of homes in McMurray - Huntingdon is 175200
The average value of homes in Bellmont Hillsboro is 433800
The average value of homes in Charlotte Park is 163600
The average value of homes in Marrowbone is 133600
The average value of homes in Crieve Hall is 301600
The average value of homes in Nashboro Village is 108400
The average value of homes in Sylvan Park is 322200
The average value of homes in CCSI (South Inglewood) is 134500
The average value of homes in Whites Bend is 222500
The average value of homes in Your Neighborhood Group is 179100
The average value of homes in Woodbine is 121700
The average value of homes in Woodland Point is 145000
The average value of homes in Belle Meade is 1349300
The average value of homes in Lockeland Springs is 325300
The average value of homes in Hillwood Estates is 410100
The average value of homes in Historic Old Hickory Village is 121000
The average value of homes in Eastwood is 261000
The average value of homes in Four Corners is 149400
The average value of homes in Hermitage Hills is 129900
The average value of homes in Green Hills Neighborhood Association is 657700
The average value of homes in Haynes Area is 89300
The average value of homes in Boon Trace is 209300
The average value of homes in Bordeaux is 75700
The average value of homes in White Bridge is 208900
The average value of homes in Melrose is 327900
The average value of homes in Tulip Grove is 153000
The average value of homes in Cleveland Park is 111800
The average value of homes in Rayon City Beautification Association is 107700
The average value of homes in Whispering Hills is 180200
The average value of homes in Hadley - Washngton is 76500
The average value of homes in Villages of Larchwood is 147300
The average value of homes in Neelys Bend is 158200
The average value of homes in Southeast is 256000
The average value of homes in Osage-North Fisk is 70300
The average value of homes in Forest View Park is 131800
The average value of homes in Sylvan Heights is 224800
The average value of homes in Lakewood is 139200
The average value of homes in Cloverhill is 123400
The average value of homes in Shelby Hills is 145500
The average value of homes in Priest Lake Meadows Homeowners is 137600
The average value of homes in Elizabeth Park is 73500
The average value of homes in Buena Vista Heights is 72100
The average value of homes in Villages of Brentwood is 182200
The average value of homes in Donelson Hills is 148500
The average value of homes in Barclay Drive is 216100
The average value of homes in Bowling Woodlawn is 610800
The average value of homes in Haynes Manor is 109200
The average value of homes in Rosebank is 197900
The average value of homes in Greenwood is 147700
The average value of homes in Riverside is 264500
The average value of homes in Priest Lake Park is 163000
The average value of homes in Hickory Woods is 154800
The average value of homes in Towne Village is 122200
The average value of homes in Burchwood Gardens is 191200
The average value of homes in Cherokee Park is 432000
The average value of homes in Heritage Square - View is 106100
The average value of homes in West End Park is 259800
The average value of homes in Harpeth Valley Park is 194300
The average value of homes in Country is 144900
The average value of homes in Germantown is 292500
The average value of homes in Cumberland Gardens is 75300
The average value of homes in Riverwalk is 262600
*/