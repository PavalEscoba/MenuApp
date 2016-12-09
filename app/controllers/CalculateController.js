var app = angular.module('menuApp');

app.controller('CalculateController', function($scope) {

    $scope.showTable = false;
    function findObj(array,value){
         for(var i = 0; i < array.length; i++){
             if(array[i].name === value){
                 return array[i];
                 }
             else{
                 console.log("Nothing is found!");
                 }
         }
    }
    $scope.calculate = function(){
        if ($scope.breakfastMeal && $scope.breakfastDrink) {
            $scope.displayedMeal = findObj($scope.firstMeal, $scope.breakfastMeal);
            $scope.displayedDrink = findObj($scope.drinks, $scope.breakfastDrink);

            $scope.breakfastMealCalories = $scope.displayedMeal.calories;
            $scope.breakfastMealPortion =  $scope.displayedMeal.portion;

            $scope.breakfastDrinkCalories = $scope.displayedDrink.calories;
            $scope.breakfastDrinkPortion =  $scope.displayedDrink.portion;
            $scope.showTable = true;


        }

    };
    $scope.multi = function () {
        $scope.result = $scope.inputNumMeal + $scope.inputNumDrink

    };
    $scope.total= $scope.inputNumMeal + $scope.inputNumDrink;


});

