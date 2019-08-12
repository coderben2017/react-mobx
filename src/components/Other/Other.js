import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('TodoListStore')
@observer
class Other extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Other</h3>
        <ol>
          {
            this.props.TodoListStore.todos.map(todo =>
              <li key={todo.id}>{todo.title}</li>
            )
          }
        </ol>
      </div>
    )
  }
}

export default Other;
