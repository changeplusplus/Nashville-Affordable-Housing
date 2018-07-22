// Call with ZWSID=<ZWSID> node examples.js GetZestimate
var Zillow   = require('../lib/node-zillow')
var _        = require('lodash')
var params   = require('./parameters')
var apiNames = _.keys(require('../lib/api-list'))
var inspect  = require('eyes').inspector({maxLength: 50000})

// Make sure we have specified the correct API name in the arguments
var apiName = process.argv[2]
if (!_.contains(apiNames, apiName)) throw new Error('requires apiName: \n' + apiNames.join(', '))


// Instantiate a zillow object by passing in our own custom Zillow id (zswid):
var zwsid = process.env.X1-ZWz18hammwkyrv_af1tq
var zillow = new Zillow(zwsid)


// Call parameters based on which API we are calling
var parameters = (function() {
  switch (apiName) {
    case 'GetDeepSearchResults':      return params.addressWithupdates;
    case 'GetUpdatedPropertyDetails': return params.zpidWithUpdates;
    case 'GetDeepComps':              return _.extend(params.zpidWithComps, {count: 5});
    case 'GetRateSummary':            return {state: 'TN'};
    case 'GetMonthlyPayments':        return {price: 200000}; //
    case 'GetDemographics':           return params.zip;
    case 'GetRegionChildren':         return {state: 'TN'};
    case 'GetRegionChart':            return params.chart;
    case 'GetSearchResults':          return params.addressWithupdates;
    case 'GetZestimate':              return params.zpidWithZestimate;
    case 'GetChart':                  return _.extend(params.chart, params.zpidWithZestimate);
    case 'GetComps':                  return _.extend(params.zpidWithComps, {count: 5});
    default:
      throw new Error();
  }
})()


params = {
    var address = prompt("Please enter a street address");
    var city = "Nashville";
    var state = "TN";

    while (address == null) {
        var address = prompt("Please enter a valid street address"); 
    }
};


// Call the primary API function based on the arguments passed in

var results = await zillow.get('GetSearchResults', params); // store the search results
results.then(function(data)) {         
         var homeDetails = results.response.results.result[0].links[0].homedetails[0];
         return homeDetails; //returns link to zillow search results
             })
             


