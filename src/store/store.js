import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// const middlewares = [thunk];
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configure = (modules) => {
  // const store = createStore(modules);
//   const devTools =
//     window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__();
  const store = createStore(modules, applyMiddleware(thunk));

  return store;
};
const store = configure(persistedReducer);
const persistor = persistStore(store);
export { store, persistor };