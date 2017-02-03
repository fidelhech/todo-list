'use strict';

var app = angular.module("todoListApp", [ ]);
app.controller("mainCtrl", function( $scope, $http ) {

    $http.get("mock/todos.json")
    .then(function(response) {
        $scope.todos = response.data;
    });

    $scope.newTodo = {};

    $scope.addTodo = function(title) {
        $scope.newTodo = {
            "title" : title,
            "completed" : false
        }

        $scope.todos.push($scope.newTodo);
        $scope.newTodo = {};
    };

    $scope.saveTodo = function(todo) {
        console.log("The \"" + todo.title + "\" has been saved.");
    };

    $scope.deleteTodo = function(todo, index) {
        console.log("The \"" + todo.title + "\" has been deleted.");
        $scope.todos.splice(index, 1);
    };

});
