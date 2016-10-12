

var app = angular.module("TodoApp", []);

app.controller("TodoController", function ($window,$http) {
  var self = this;
//  self.todos = [
//    {text: "Learn Angular", done : false},
//    {text: "Learn The Basics", done : false},
//    {text: "Make a 'Is it Friday today thing, for this Friday'", done : false}
//  ];
  self.todos = [];


  $http({
    method: 'GET',
    url: 'api/todo'
  }).then(function successCallback(response) {
    self.todos = response.data;
  }, function errorCallback(response) {
    $window.alert("UPPPPs: "+response.toString());
    console.log(response.statusText);
  });

  self.totalTodos = function () {
    return self.todos.length;
  };
  self.formTodoText = "";
  self.addTodo = function () {
    self.todos.push({text: self.formTodoText, done: false});
    self.formTodoText = "";
  };

  self.deleteCompleted = function () {
    self.todos = self.todos.filter(function (todo) {
      return todo.done === false;
    });
  };

});



