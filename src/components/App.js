import React from 'react';
import Search from './Search';
// import Users from './Users';
import Card from './Card';

import user from '../apis/user';
import { withRouter } from "react-router";

class App extends React.Component {
	state = { users: [], allUsers: [] };

	componentDidMount() {
		user.get().then(data => {
			console.log(data.data);
			this.setState({ allUsers: data.data, users: data.data })
		}).catch(err => {
			console.log('Error : ', err);
		})
	}

	filterResult(keyword) {
		const results = this.state.allUsers.filter((value) => {
			return (value.name).toLowerCase().includes(keyword.toLowerCase());
		})

		console.log(keyword, 'Result : ', results);
		this.setState({ users: results });
	}
	
	userAction(userId, action) {
		console.log(userId, action);

		let users = this.state.users;
		let allUsers = this.state.allUsers;

		users = users.map(user => {
			if( user.id === userId ) {
				return({ ...user, action: action })
			}
			return user;
		})

		allUsers = allUsers.map(user => {
			if( user.id === userId ) {
				return({ ...user, action: action })
			}
			return user;
		})

		this.setState({ users, allUsers });
	}

	componentDidUpdate(oldProps, oldState) {
		console.log( oldProps, '!==', this.props )
		// this.userAction( this.props.location.state.userId, this.props.location.state.action );

		if( oldProps.location.state !== this.props.location.state ) {
			console.log(this.props);
		}
	}

	onClickNavigation(userId, userName, Image) {
		console.log(this.props);
		console.log(userId);
		this.props.history.push({
			pathname: '/user/' + userId,
			state: {
				userName: userName,
				image: Image
			},
		});
	}

	render() {
		console.log('users', this.state.users);
		return (
			<div className='ui container' style={{ marginTop: '25px' }}>
				{/* <div className='right'>
					<button 
						onClick={() => this.navigate('approve')} 
						className="ui two wide column positive basic button"
					> 
						Shortlisted Users
					</button>
					<button 
						onClick={() => this.navigate('reject')} 
						className="ui two wide column negative basic button"
					> 
						Rejected Users
					</button>
				</div> */}
				<div className='ui segment'>
					<Search onChange={(keyword) => this.filterResult(keyword)} />
					
				</div>
				
				<div className='ui grid segment'>
					{
						this.state.users.length > 0 ?
							this.state.users.map(user => {
								return (
									<Card
										key={user.id}
										image={user.Image}
										id={user.id}
										name={user.name}
										onClick={() => this.onClickNavigation(user.id, user.name, user.Image)}
									/>
								)
							})
							: <span> No User Found </span>
					}
				</div>
			</div>
		);
	}
};

export default withRouter(App);

// const App = () => {
// 	return (
// 		<div className='ui container' style={{ marginTop: '25px' }}>

// 			<Users />			
// 		</div>
// 	);
// }

// export default App;