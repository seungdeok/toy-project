const todo = {
  ADD_TODO: "ADD_TODO",
  addTodo: function(text){
    return {
      type: this.ADD_TODO,
      text
    }
  }
}

module.exports = todo;