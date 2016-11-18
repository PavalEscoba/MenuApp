var app = angular.module('menuApp');

app.directive("userCard",function(){ 
    return{
    	restrict: 'E',
    	templateUrl: 'templates/userCard.html'
    }
        
});