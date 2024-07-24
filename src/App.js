import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Calculator from './components/Calculator'
import './App.css'

function App() {
	return (
		<div className="fluid-container">
			<Router basename={'/'}>
				<Route path='/' component={Calculator} />
			</Router>
		</div>
	)
}

export default App
