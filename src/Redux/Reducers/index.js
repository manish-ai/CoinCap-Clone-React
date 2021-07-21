import { combineReducers } from 'redux';
import cryproReducer from './cryproReducer';

export default combineReducers({
    crypto: cryproReducer
})