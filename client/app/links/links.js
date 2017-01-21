angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {

  $scope.data = {};

  Links.getAll().then(function(data) {
    $scope.data.links = data; 
    console.log('data', data);
  });

  $scope.signout = function() {
    Auth.signout();
  };

  // Your code here
});
