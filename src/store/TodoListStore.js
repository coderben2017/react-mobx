import { observable, action, computed } from 'mobx'

class Todo {
	id = +new Date(); // <==> new Date().getTime()  // 获取时间戳作为唯一id
	@observable title;
	@observable finished = false;

	constructor(title) {
		this.title = title
	}
}

class TodoList {
	@observable todos = [];

	@computed get completedTodosCount() {
		return this.todos.filter(todo => todo.finished).length;
	}

	@action addTodo(title) {
		if (!title) {
		  window.alert('请输入待办任务');
		  return;
    }
		this.todos.push(new Todo(title));
	}

  @action deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}

const store = new TodoList();

export default store;
