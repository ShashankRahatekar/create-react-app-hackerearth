import React from 'react';
import ReactDOM from 'react-dom';
import DynamicPage from './components/DynamicPage';
import { BrowserRouter as Router } from 'react-router-dom';
// const App = () => {
// 	return (
// 		<div className='ui container comments'>
// 			<ApprovalCard>
// 				<CommentDetail 
// 					author='Shashank' 
// 					timeAgo='Today at 3:00PM' 
// 					commentMsg='Hi There!' 
// 					avatar={faker.image.avatar()} 
// 				/>
// 			</ApprovalCard>
// 			<ApprovalCard>
// 				<CommentDetail 
// 					author='Mintu' 
// 					timeAgo='Today at 2:30PM' 
// 					commentMsg='Hi Ashish!' 
// 					avatar={faker.image.avatar()} 
// 				/>
// 			</ApprovalCard>
// 			<ApprovalCard>
// 				<CommentDetail 
// 					author='Anshul' 
// 					timeAgo='Yesterday at 12:00PM' 
// 					commentMsg='Hi Everyone!' 
// 					avatar={faker.image.avatar()} 
// 				/>
// 			</ApprovalCard>
// 		</div>
// 	);
// }

ReactDOM.render(<Router compo>
	<DynamicPage />
</Router>, document.querySelector('#root'));