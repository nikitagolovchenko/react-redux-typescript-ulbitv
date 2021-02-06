import React, { useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchTodos } from './../store/actions/todoActions';

const TodoList: React.FC = () => {
  const { todos, page, limit, loading, error } = useTypedSelector(
    state => state.todo
  );
  const { fetchTodos, setTodoPage } = useActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.id} - {todo.title}
        </div>
      ))}

      <div style={{ display: 'flex' }}>
        {pages.map(p => (
          <button
            style={{
              border: p === page ? '2px solid green' : '1px solid gray',
              padding: '10px',
              cursor: 'pointer',
              outline: 'none',
            }}
            onClick={() => setTodoPage(p)}
          >
            {p}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
