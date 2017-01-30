var myapp=angular.module('myapp', []);

  myapp.controller('myfirstController', function($scope) {
   $scope.nombre=""; //scope es lo que enlaza la vista con e controlador, 
                        //si tengo mas controladores, requiero definir mas scopes
  });