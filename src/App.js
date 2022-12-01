import { createContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './routes/Routes';

export const RegContext = createContext({});

function App() {
  const user = {
    name: 'niloy'
  }

  return (
    <RegContext.Provider value={{
      user
    }}>
      <RouterProvider router={routes} />
    </RegContext.Provider>
  );
}

export default App;
