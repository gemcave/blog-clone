import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from 'routes';
import TopBar from 'components/TopBar.js';
import {CurrentUserProvider} from 'contexts/currentUser';
import CurrenUserChecker from 'components/currentUserChecker';

const App = (props) => {
	return (
			<CurrentUserProvider>
				<CurrenUserChecker>
					<Router>
						<TopBar />
						<Routes />
					</Router>
				</CurrenUserChecker>
			</CurrentUserProvider>
	);
}


ReactDOM.render(<App />, document.getElementById('root'));