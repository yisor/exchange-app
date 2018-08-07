import Home from '../../pages/Home';

export default {
  path: '/home',
  getComponent(location, callback) {
    callback(null, Home)
  }
}
