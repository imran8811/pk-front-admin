export class Routes {
  static baseAddress = window.location.origin === 'http://localhost:4200' || 'http://localhost:4201' ? 'http://localhost:3000/api' : 'https://www.pkapparel.com/api';
  // static baseAddress = 'https://pkapparel.heroku.com/api';

  static USER_LOGIN = Routes.baseAddress + '/login';
  static USER_REGISTER = Routes.baseAddress + '/signup';
  static FORGOT_PASSWORD = Routes.baseAddress + '/forgot-password';

  //Products
  static ADD_PRODUCT = Routes.baseAddress + '/product/add';
  static GET_ALL_PRODUCTS = Routes.baseAddress + '/product/get/all';

  static IMAGE_UPLOAD = Routes.baseAddress + '/image/upload'

}
