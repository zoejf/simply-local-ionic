angular.module('starter.controllers', [])

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
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

.controller('PlaylistCtrl', function($scope, $stateParams) {

})
.controller('BusinessCtrl', ['$scope', '$stateParams', '$timeout', 'businesses', function($scope, $stateParams, $timeout, businesses) {
  console.log("controller!");
  businesses.then(function (data) {
    $scope.businesses = data.data;
    // console.log('data: ', data);
    // $scope.businesses.data.data; 
    $scope.image = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        size: [20, 32],
        origin: [0,0],
        anchor: [0, 32]
      };
  })


  //   var castro = new google.maps.LatLng(37.765909, -122.430985);
  //   $scope.clickCastro = function() {
  //     $scope.map.setCenter(castro);
  //     $scope.map.setZoom(16);
  //   };

  //   var soma = new google.maps.LatLng(37.773625, -122.411774);
  //   $scope.clickSoMa = function() {
  //     $scope.map.setCenter(soma);
  //     $scope.map.setZoom(16);
  //   };


}]);
