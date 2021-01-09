import App from '../components/App';
import UserInfo from '../components/UserInfo';

const page_routing = [
	{ url: '/', component_name: App },
	{ url: '/user/:id?', component_name: UserInfo },
];

export default page_routing;