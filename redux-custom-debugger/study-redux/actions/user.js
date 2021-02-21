const user = {
  SET_NAME: "SET_NAME",
  addTodo: function(name){
    return {
      type: this.SET_NAME,
      name
    }
  }
}

module.exports = user;