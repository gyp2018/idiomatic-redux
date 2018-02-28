import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoApp from './components/TodoApp';
import todoApp from './reducers/todoApp';

const persistedStore = {
  todos: [],
  visibilityFilter: undefined
};
const store = createStore(todoApp, persistedStore);

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);
