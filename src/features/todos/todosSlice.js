const initialState = {
  todos: [],
  filters: {
    status: "All",
    colors: [],
  },
};

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todoAdded": {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: nextTodoId(state.todos),
            text: action.payload,
            completed: false,
          },
        ],
      };
    }
    case "todos/todoToggled": {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };
    }
    case "todos/colorSelected": {
      const { color, todoId } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== todoId) {
            return todo;
          }
          return {
            ...todo,
            color,
          };
        }),
      };
    }
    case "todos/todoDeleted": {
      const { todoId } = action.payload;
      return {
        ...state,
        // todos: state.todos.map((todo) => {
        //   if (todo.id === todoId) {
        //     todo.pop();
        //   }
        // }),
        todos: state.todos.filter((todo) => todo.id === action.payload),
      };
    }
    default:
      return state;
  }
}
