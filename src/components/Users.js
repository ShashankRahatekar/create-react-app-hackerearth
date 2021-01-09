import React from 'react';
import Card from './Card';
import user from '../apis/user';



class Users extends React.Component {
	state = { users: [] };

	componentDidMount() {
		user.get().then(data => {
			console.log(data.data);
			this.setState({ users: data.data })
		}).catch(err => {
			console.log('Error : ', err);
		})
	}

	render() {
		return (
			<div className='ui grid segment'>
				<Router>
					{/* <Switch> */}
						{
							this.state.users.length > 0 ?
							this.state.users.map( user => {
								return (
									<Link to={'/user/' + user.id}>
										<Card 
											key = { user.id }
											image = { user.Image }
											id = { user.id }
											name = { user.name }
										/>
									</Link>
								)
							})
							: <span> No User Found </span>
						}
					{/* </Switch> */}
				</Router>
			</div>
		);
	}
};

export default Users