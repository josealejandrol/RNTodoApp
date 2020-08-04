import React, {useState} from 'react';
import {TodoContext} from './context/TodoContext';

import AppNavigator from './navigator';

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

const App = () => {
  const [todos, setTodos] = useState(initialState);

  return (
    <TodoContext.Provider value={{todos, setTodos}}>
      <AppNavigator />
    </TodoContext.Provider>
  );
};

export default App;
