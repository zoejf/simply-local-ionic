angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


  //inject $compile into the controller
    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><button class='button button-clear button-positive' ng-click='clickTest()'>Click Me</button></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        })

        $scope.map = map;
      }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      // $scope.centerOnMe = function() {
      //   if(!$scope.map) {
      //     return;
      //   }

      //   $scope.loading = $ionicLoading.show({
      //     content: 'Getting current location...',
      //     showBackdrop: false
      //   });
      // }
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    })
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
      // $scope.click = function(event){
      //   var dealUrl = 
      // }
      $scope.clickTest = function() {
              console.log("clicking")
            };
      // $scope.click = function(event) {
      //   map.setZoom(8);
      //   map.setCenter(marker.getPosition());
      // }


  })

  //on-click Functyionality Here!

}]);
