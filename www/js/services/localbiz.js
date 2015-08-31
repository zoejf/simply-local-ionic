app.factory('businesses', ['$http', function($http) { 
 return $http.get('assets/localbiz.json')
 // console.log('hello!');
 .success(function(data) { 
   console.log('json data received')
   console.log(data[0]);
   // $scope.teams = data;
    return data;
  }) 
  .error(function(err) { 
    return err; 
  });
 
}])