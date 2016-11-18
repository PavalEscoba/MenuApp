var app = angular.module('menuApp');

app.directive("intro",function(){ 
    return{
    	restrict: 'E',
    	templateUrl: 'templates/intro.html'
    }
        
});