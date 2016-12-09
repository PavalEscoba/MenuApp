/**
 * Created by Pablo on 18.11.2016.
 */
var app = angular.module('menuApp');
app.directive("headerTop",function(){ 
    return{
    	restrict: 'E',
    	templateUrl: 'templates/headerTop.html'
    }

});