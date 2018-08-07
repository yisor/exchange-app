import About from '../About';
import Home from '../../pages/Home';
import Main from '../../pages/Main';

export default {
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      callback(null, Home)
    }
  },
  getComponent(location, callback) {
    callback(null, Main)
  },
  childRoutes: [
    About,
  ]
}
