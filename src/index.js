import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Routes from 'routes';

const App = (props) => {
	return (
			<div>
				<Router>
					<Routes />
				</Router>
			</div>
	);
}


ReactDOM.render(<App />, document.getElementById('root'));