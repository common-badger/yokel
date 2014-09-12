'use strict';

angular.module('yokelApp')

.controller('BusinessController', function($scope, $location){
  $scope.state = "business";

  $scope.tapToReview = function(){
    $location.path('/review');
  }
});
