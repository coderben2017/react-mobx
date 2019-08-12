import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import TodoListStore from './store/TodoListStore';
import TodoList from './components/TodoList/TodoList';
import Other from './components/Other/Other';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider TodoListStore={TodoListStore}>
        <div className={'flex'}>
          <h1>App</h1>
          <TodoList className={'flex-item'} />
          <Other className={'flex-item'} />
        </div>
      </Provider>
    )
  }
}
