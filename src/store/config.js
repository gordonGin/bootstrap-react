import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

export default function configureStore(preloadedState) {
	const middlewareEnhancer = applyMiddleware(thunk);

	const store = createStore(
		rootReducer,
		preloadedState,
		composeWithDevTools(middlewareEnhancer)
	);

	return store;
}
