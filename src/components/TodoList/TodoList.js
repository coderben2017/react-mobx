import React from 'react';
import { observer, inject } from 'mobx-react';
import Todo from '../Todo/Todo';

@inject('TodoListStore')
@observer
class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	handleTitleChange = e => {
		let title = e.target.value;
		this.setState({ title });
	};

  handleAdd = () => {
		this.props.TodoListStore.addTodo(this.state.title);
	};

	render() {
	  const { TodoListStore } = this.props;
		return (
			<div>
        <h3>TodoList</h3>
				<input type="text" value={this.state.title} onChange={this.handleTitleChange} />&nbsp;
				<button onClick={this.handleAdd}>添加</button>
				<ul>
					{
						TodoListStore.todos.map(todo => (
							<Todo todo={todo} key={todo.id} />
						))
					}
				</ul>
				已完成任务数: {TodoListStore.completedTodosCount}
			</div>
		);
  }
}

export default TodoList
