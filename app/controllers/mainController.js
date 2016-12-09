/**
 * Created by Pablo on 18.11.2016.
 */
var app = angular.module("menuApp");

app.controller("mainController", function($scope, $http){
    $scope.showResult = false;
    $scope.firstMeal;
    $scope.drinks;
    $scope.breakfastMeal;
    $scope.breakfastDrink;

    $scope.apiCall = function(){
        $scope.showResult = true;
        if($scope.meat){
            $http.get('recipes/breakfast.json')
                .then(function(resp){
                    var data = resp.data;

                    $scope.firstMeal = data.first;

                    $scope.drinks = data.drink;
                })
        }
        else if($scope.vegetarian){
            $http.get('recipes/breakfast-veg.json')
                .then(function(resp){
                    var data = resp.data;
                    $scope.firstMeal = data.first;
                    $scope.drinks = data.drink;
                })
        }
        else{
            alert("Выберыце тып меню: усяяднае ці вегетэрыянскае")
        }

    };
    $scope.showA = function () {
        console.log("A A A")
    }
});