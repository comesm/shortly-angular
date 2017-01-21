angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here
  $scope.links = {};
  // $scope.links.links = [];

  $scope.addLink = function() {
    var linkObject = {url: $scope.link.url};
    Links.addOne(linkObject).then(function(link) {
      $scope.links[link.url] = link;
      // $scope.links.links.push(link);
      $location.path('/shorten');
    });
  };

  Links.getAll().then(function(data) {
    $scope.links = data; 
    console.log('$scope.links', data);
  });

  $scope.signout = function() {
    Auth.signout();
  };
});
