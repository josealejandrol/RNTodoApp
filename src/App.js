import React from 'react';
import {TodoContextProvider} from './context/TodoContext';

import AppNavigator from './navigator';

const App = () => {
  return (
    <TodoContextProvider>
      <AppNavigator />
    </TodoContextProvider>
  );
};

export default App;
