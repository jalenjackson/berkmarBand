import { combineReducers } from "redux";
import MediaRootReducer from './Media/reducers/index';

export default combineReducers({
  media: MediaRootReducer
})
