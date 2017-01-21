angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.link.links = [];
  $scope.addLink = function(link) {
    Links.addOne(link).then(function(link) {
        $scope.link.links.push(link);
    });
  };
});
