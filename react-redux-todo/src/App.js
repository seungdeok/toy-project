import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "./store/actions";

import Footer from './components/Todo/Footer';
import AddTodo from './containers/Todo/AddTodo';
import VisibleTodoList from './containers/Todo/VisibleTodoList';

const App = () => {
  const counter = useSelector(state => state.Counter);
  const currentUser = useSelector(state => state.currentUser);

  const dispatch = useDispatch();

  const user = { name: "Test" };

  // useEffect(() => {
  //   dispatch(actionTypes.User.setUser(user));
  // }, []);

  return (
    <div className="App">
      {currentUser.loggedIn ? (
        <>
          <h1>HELLO, {currentUser.user.name}</h1>
          <button onClick={() => dispatch(actionTypes.User.logout())}>
            LOGOUT
          </button>
        </>
      ) : (
        <>
          <h1>LOGIN</h1>
          <button onClick={() => dispatch(actionTypes.User.setUser(user))}>
            LOGIN
          </button>
        </>
      )}
      <h1>NUM :{counter}</h1>
      <button onClick={() => dispatch(actionTypes.Counter.increment())}>
        +1
      </button>
      <button onClick={() => dispatch(actionTypes.Counter.decrement())}>
        -1
      </button>
      <h1>TO DO</h1>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
