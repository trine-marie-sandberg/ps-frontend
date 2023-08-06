import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Theme from './styles/theme.jsx';
import GlobalStyle from './styles/global.jsx';

//Redux logic
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import tasksReducer from './features/tasksSlice.js';
import { tasksFetch } from './features/tasksSlice.js';
import { tasksApi } from './features/tasksapi.js';
 
const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(tasksApi.middleware);
  }
});
store.dispatch(tasksFetch());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </Theme>
  </React.StrictMode>
)
