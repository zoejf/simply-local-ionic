.controller('BusinessCtrl', ['$scope', '$stateParams', '$timeout', 'businesses', function($scope, $stateParams, $timeout, businesses) {
  console.log("controller23!");
  businesses.then(function (gps) {
    var bizCoord = [];
     for (i = 0; i < 50; i++) {
      bizCoord.push({ 
        lat: gps.data.deals[i]['options'][0]["redemptionLocations"][0]["lat"],
        lng: gps.data.deals[i]['options'][0]["redemptionLocations"][0]["lng"],
        www: gps.data.deals[i]['dealUrl']
      })}
      $scope.coord = bizCoord
      $scope.image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple',
        size: [20, 32],
        origin: [0,0],
        anchor: [0, 32]
      };
      $scope.clickTest = function() {
              console.log("clicking")
            };
  })

  //=======================================//

  google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        })

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);