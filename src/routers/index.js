import Home from '../pages/Home';
import Music from '../pages/Music';
import Market from '../pages/Market';
import Sport from '../pages/Sport';

const publicRoutes = [
	{ path: '/', component: Home },
	{ path: '/music', component: Music },
	{ path: '/sport', component: Sport },
	{ path: '/market', component: Market },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
