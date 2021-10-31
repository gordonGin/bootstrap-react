import './dist/main.css';
import { Portfolio, Header, Resources, NewsItem } from './components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/config';

const store = configureStore({});

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div className="container">
					<Header />
					<Switch>
						<Route path="/portfolio" exact component={Portfolio} />
					</Switch>
					<Switch>
						<Route path="/resources" exact component={Resources} />
					</Switch>
					<Switch>
						<Route path="/portfolio/:id" exact component={NewsItem} />
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
