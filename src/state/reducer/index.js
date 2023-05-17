import {combineReducers} from 'redux';
import textReducer from './textReducer';

const reducers = combineReducers({
    textTranfer: textReducer
})

export default reducers;