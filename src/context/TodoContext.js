import React, {createContext, useEffect, useState, useContext} from 'react';

const initialState = [
  {
    id: new Date().getTime(),
    desc: 'Aprender React Native',
    done: false,
  },
  {
    id: new Date().getTime() + 1,
    desc: 'Aprender FlexBox',
    done: false,
  },
  {
    id: new Date().getTime() + 2,
    desc: 'Aprender Javascript',
    done: false,
  },
];

const TodoContext = createContext({});

export const TodoContextProvider = ({children}) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initialState);
  }, []);

  const value = {
    todos,
    setTodos,
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodos = () => useContext(TodoContext);
