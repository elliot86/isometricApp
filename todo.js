angular.module('isometricApp', [])
  .controller('IsometricListController', function() {
    var isometricList = this;
    isometricList.todos = [
      {text:'Todo #1', done:true},
      {text:'Todo #2', done:false},
      {text:'Todo #3', done:false},
      {text:'Todo #4', done:false}];
 
    isometricList.addTodo = function() {
      isometricList.todos.push({text:isometricList.todoText, done:false});
      isometricList.todoText = '';
    };
 
    isometricList.remaining = function() {
      var count = 0;
      angular.forEach(isometricList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };
 
    isometricList.archive = function() {
      var oldTodos = isometricList.todos;
      isometricList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) isometricList.todos.push(todo);
      });
    };
  });