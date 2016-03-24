var controlersModule = angular.module("exampleApp.controllers",[]);

controlersModule.controller("dayController",function($scope,days){
    $scope.day = days.today;
});

controlersModule.controller("tomorrowController",function($scope,days){
    $scope.day = days.tomorrow;
});
