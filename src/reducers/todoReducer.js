export default function todoReducer(state, action) {
    switch(action.type) {
        case "ADD_TODO": {
            return {
                ...state,
                todoList: [
                    ...state.todoList, {
                        id: crypto.randomUUID(),
                        content: action.content,
                        edit: false,
                        done: false
                    }
                ]
            }
        }

        case "DELETE_TODO": {
            return {
                ...state, 
                todoList: state.todoList.filter((todo) => todo.id !== action.id)
            }
        }

        case "TOGGLE_TODO": {
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                todo.id === action.id
                    ? {
                        ...todo,
                        done: !todo.done,
                        }
                    : todo
                )
            }
        }

        case "EDIT_TODO": {
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                todo.id === action.id
                    ? {
                        ...todo,
                        edit: !todo.edit,
                        }
                    : todo
                )
            }
        }

        case "CHANGE_TODO": {
            return {
                ...state,
                todoList: state.todoList.map((todo) =>
                todo.id === action.id
                    ? {
                        ...todo,
                        content: action.value,
                        edit: false
                        }
                    : todo
                )
            }
        }

        default: {
            throw new Error("Unknow action")
        }
    }
}


// function addTodo(value) {
  //   const todo = {
  //     id: crypto.randomUUID(),
  //     content: value,
  //     done: false,
  //     edit: false,
  //   };
  //   setTodoList([...todoList, todo]);
  // }

  // function deleteTodo(id) {
  //   setTodoList(todoList.filter((todo) => todo.id !== id));
  // }

  // function editTodo(id) {
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo.id === id
  //         ? {
  //             ...todo,
  //             edit: !todo.edit,
  //           }
  //         : todo
  //     )
  //   );
  // }

  // function toggleTodo(id) {
  //   console.log(id);
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo.id === id
  //         ? {
  //             ...todo,
  //             done: !todo.done,
  //           }
  //         : todo
  //     )
  //   );
  // }

  // function changeTodo(id, value) {
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo.id === id
  //         ? {
  //             ...todo,
  //             content: value,
  //             edit: false,
  //           }
  //         : todo
  //     )
  //   );
  // }