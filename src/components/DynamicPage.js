import React , { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import page_routing from '../routing/routing';

class DynamicPage extends Component {

	render() {        
		const routes = page_routing.map( (objRoute, i) => {
			if( '/' === objRoute.url ) {
				return <Route exact path={objRoute.url} key={i} component={withRouter(objRoute.component_name)} />;
			}else {
				return <Route path={objRoute.url + '/'} key={i} component={withRouter(objRoute.component_name)} />;
			}
		});

		return (
			<div id='dynamic_page' className="container-fluid">
				{routes}
			</div>  
		);  
	}
}

export default DynamicPage;