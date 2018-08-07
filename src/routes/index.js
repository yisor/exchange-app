import HomePage from '../pages/Home';
import MainPage from '../pages/Main';
import AboutPage from '../pages/About';

import Home from './Home';
import Main from './Main';
import About from './About';

// const routeConfig = [
//     {
//         path: '/',
//         component: MainPage,
//         indexRoute: { component: HomePage },
//         childRoutes: [
//             { path: 'about', component: AboutPage },
//         ]
//     }
// ]

const routeConfig = [
    Home,
    Main,
    About
]

export default routeConfig;
