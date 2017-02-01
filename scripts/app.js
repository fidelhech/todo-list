'use strict';

var app = angular.module("todoListApp", [ ]);
app.controller("mainCtrl", function( $scope, $http ) {

    $http.get("mock/todos.json")
    .then(function(response) {
        $scope.todos = response.data;
    });

});
