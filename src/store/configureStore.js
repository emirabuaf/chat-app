import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers'
import createHistory  from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux'
import * as Actions from '../actions';


export const history= createHistory();


export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(reduxThunk,routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
    )
  );
  if (module.hot) {
    //enable webpack hot module replacement for combineReducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    })
  }
    store.dispatch(Actions.verifyAuth());

  return store;
}
