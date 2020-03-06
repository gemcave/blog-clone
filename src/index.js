import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from 'routes';
import TopBar from 'components/TopBar.js'

const App = (props) => {
	return (
			<div>
				<Router>
					<TopBar />
					<Routes />
				</Router>
			</div>
	);
}


ReactDOM.render(<App />, document.getElementById('root'));