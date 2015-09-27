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
    .controller('MapCtrl',['$scope', '$stateParams','$timeout', '$compile','businesses', function($scope, $stateParams, $timeout, $compile, businesses) {
      businesses.then(function (gps) {
          var myLatlng = new google.maps.LatLng(37.7695929,-122.4501323);
          $scope.biz = gps.data.deals[0]

          var bizCoord = [];
           for (i = 0; i < 50; i++) {
            bizCoord.push({ 
              lat: gps.data.deals[i]['options'][0]["redemptionLocations"][0]["lat"],
              lng: gps.data.deals[i]['options'][0]["redemptionLocations"][0]["lng"],
              www: gps.data.deals[i]['dealUrl']
            })}
            $scope.coord = bizCoord
          console.log(bizCoord)
          console.log($scope.biz)
          var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };
          var map = new google.maps.Map(document.getElementById("map"), mapOptions);
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
          google.maps.event.addDomListener(window, 'load');
          $scope.centerOnMe = function() {
            if(!$scope.map) {
              return;
            }
          }
      })
    }])
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

  })

  //on-click Functyionality Here!

}]);
