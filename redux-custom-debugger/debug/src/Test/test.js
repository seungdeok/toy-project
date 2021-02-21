const reducer = require('../../../study-redux/reducers');
const counterReducer = require('../../../study-redux/reducers/counter');
const todosReducer = require('../../../study-redux/reducers/todos');
const userReducer = require('../../../study-redux/reducers/user');

describe('reducer unit test',() => {
  describe('reducer1 test', () => {
    it('return INIT', () => {
      const initialState = 0;
      const action = {
        type: "INIT",
      };
      const newState = counterReducer(initialState, action);
      expect(newState).toEqual(0)
    });

    it('return INCREMENT', () => {
      const initialState = 0;
      const action = {
        type: "INCREMENT",
      };
      const newState = counterReducer(initialState, action);
      expect(newState).toEqual(1)
    });

    it('return DECREMENT', () => {
      const initialState = 1;
      const action = {
        type: "DECREMENT",
      };
      const newState = counterReducer(initialState, action);
      expect(newState).toEqual(0)
    });
  });

  describe('reducer2 test', () => {
    it('return INIT', () => {
      const initialState = {};
      const action = {
        type: "INIT",
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual({});
    });
    it('return SET_NAME', () => {
      const initialState = {};
      const action = {
        type: "SET_NAME",
        name: 'GUY'
      };
      const newState = userReducer(initialState, action);
      expect(newState).toEqual({
        name: "GUY"
      });
    });
  })

  describe('reducer3 test', () => {
    it('return INIT', () => {
      const initialState = [];
      const action = {
        type: "INIT",
      };
      const newState = todosReducer(initialState, action);
      expect(newState).toEqual([]);
    });
    it('return ADD_TODO', () => {
      const initialState = [];
      const action = {
        type: "ADD_TODO",
        text: "REDUX"
      };
      const newState = todosReducer(initialState, action);
      expect(newState).toEqual({
        text: "REDUX"
      });
    });
  });
});