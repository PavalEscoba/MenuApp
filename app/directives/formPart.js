var app = angular.module('menuApp');
app.directive("formPart",function(){ 
    return{
    	restrict: 'E',
    	templateUrl: 'templates/formPart.html'
    }
        
});