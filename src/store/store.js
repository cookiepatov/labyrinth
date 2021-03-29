import { createStore } from 'redux';
import setPositionDataReducer from './reducers/setPositionData';
const store = createStore(setPositionDataReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
