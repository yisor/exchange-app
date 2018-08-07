import About from '../../pages/About';

export default {
  path: '/about',
  getComponent(location, callback) {
    callback(null, About)
  }
}
