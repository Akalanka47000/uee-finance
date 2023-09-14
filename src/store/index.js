import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { default as createDebugger } from 'redux-flipper-colorized';
import { persistStore } from 'redux-persist';
import { expenseApi } from './api';
import { default as rootReducer } from './reducers';

export function makeStore() {
  return configureStore({
    devTools: __DEV__,
    reducer: combineReducers({
      ...rootReducer,
      [expenseApi.reducerPath]: expenseApi.reducer
    }),
    middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware({ serializableCheck: false }).concat(expenseApi.middleware);
      if (__DEV__) {
        middleware.push(createDebugger());
      }
      return middleware;
    }
  });
}

export const store = makeStore();

export const persistor = persistStore(store);

export default store;
