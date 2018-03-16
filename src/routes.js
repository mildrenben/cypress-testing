import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeScreen from './components/HomeScreen'

// Example of global css
import './styles/global'

const Routes = () => (
	<div>
		<Switch>
			<Route exact path='/' component={HomeScreen} />
		</Switch>
	</div>
)

const Router = () => (
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
)

export default Router
