import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Ball from './components/Ball';
import  store  from './store';
import Todo from './components/AddTodo';
import List from './components/List'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Todo></Todo>
      <List></List>
      </div>
     </Provider>
  );
}

export default App;
