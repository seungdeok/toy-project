const counter = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
  increse: function(){
    return {
      type: this.INCREMENT,
    }
  },
  addTodo: function(text){
    return {
      type: this.DECREMENT,
    }
  }
}

module.exports = counter;