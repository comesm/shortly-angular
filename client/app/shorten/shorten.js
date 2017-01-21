angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};
  $scope.link.links = [];

  $scope.addLink = function() {
    var linkObject = {url: $scope.link.url};
    console.log('link=============== ', $scope.link.url);
    Links.addOne(linkObject).then(function(link) {
      $scope.link.links.push(link);
      $location.path('/shorten');
    });
  };
});
