import { createStore } from 'redux';
import hackerNewsReducer from './ducks/hackerNewsReducer'

export default createStore(hackerNewsReducer);