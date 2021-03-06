import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//reducers
import reducerAuth from 'reducers/reducer-auth';
import reducerUser from 'reducers/reducer-user';
import reducerSearch from 'reducers/reducer-search';
import reducerVideo from 'reducers/reducer-video';

const reducer = combineReducers({
	auth: reducerAuth,
	userInfo: reducerUser,
	search: reducerSearch,
	video: reducerVideo
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
