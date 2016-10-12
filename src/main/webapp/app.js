

var app = angular.module("TodoApp",[]);

app.controller("TodoController",function(){
  var self = this;
  self.todos = [
    {text: "Learn Angular", done : false},
    {text: "Learn The Basics", done : false},
    {text: "Make a 'Is it Friday today thing, for this Friday'", done : false}
  ];
  
  self.totalTodos = function(){
    return self.todos.length;
  };
  self.formTodoText = "";
  self.addTodo = function(){
    self.todos.push({text: self.formTodoText ,done: false});
    self.formTodoText = "";
  };
  
  self.deleteCompleted = function(){
    self.todos = self.todos.filter(function(todo){
      return todo.done === false;
    });
  };
  
});
                


