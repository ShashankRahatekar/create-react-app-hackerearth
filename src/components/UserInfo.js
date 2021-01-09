import React from 'react';
import Card from './Card';

class UserInfo extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = { 
			userId : this.props.match.params.id,
			userName: this.props.location.state.userName, 
			image: this.props.location.state.image
		};

	}


	componentDidMount() {
	}

	componentDidUpdate( oldProps, oldState ) {

		if( oldProps.match.params.id !== this.props.match.params.id ) {
			console.log( 'Data ', this.props );
			this.setState({ userId: this.props.match.params.id, userName: this.props.location.state.userName, image: this.props.location.state.image })
		}
	}

	navigateBack(action) {
		this.props.history.push({
			pathname: '/',
			state: {
				action: action,
				userId: this.state.userId
			},
		});
	}

	render() {
		return (
			<div className='ui container' style={{ marginTop: '25px' }}>
				<button 
					onClick={() => this.navigateBack('')} 
					className="ui two wide column basic button"
				> 
					Back
				</button>
				<div className='ui segment'>
					<Card 
						name = { this.state.userName }
						image = { this.state.image }
						id = { this.state.userId }
					/>

					{/* <div className='ui segment'>
						<button 
							onClick={() => this.navigateBack('approve')} 
							className="ui two wide column positive basic button"
						> 
							Shortlist
						</button>
						<button 
							onClick={() => this.navigateBack('reject')} 
							className="ui two wide column negative basic button"
						> 
							Reject
						</button>
					</div> */}
				</div>
			</div>
		);
	}
};

export default UserInfo;

