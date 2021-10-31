import { combineReducers } from 'redux';
import { galleryReducer } from './duck/gallery';

const rootReducer = combineReducers({
	gallery: galleryReducer,
});

export default rootReducer;
