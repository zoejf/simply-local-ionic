app.factory('businesses', ['$http', function($http) { 
 return $http.jsonp('https://partner-api.groupon.com/deals.json?tsToken=US_AFF_0_201236_212556_0&offset=0&limit=50&callback=JSON_CALLBACK')
 .success(function(taco) { 
   console.log('json data received')
   var groupLat = [];
   var groupLng = [];
   // console.log(groupon)
     for (i = 0; i < 50; i++) {    
      groupLat.push(taco.deals[i]['options'][0]["redemptionLocations"][0]["lat"])
     	groupLng.push(taco.deals[i]['options'][0]["redemptionLocations"][0]["lng"])
      };    
	    console.log('For loop running')
    	t = [{
    		Lat: groupLat,
    		Lng: groupLng
    	}];
    return taco;
  }) 
  .error(function(err) { 
    return err; 
  });
 
}])