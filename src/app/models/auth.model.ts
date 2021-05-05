export interface IUserLogin {
  email: string,
  password: string
}

export class UserLogin implements IUserLogin {
  email = "";
  password = "";
}


export interface IUserSignup {
  fullName: string,
  businessName: string,
  email : string,
  password : string,
}

export class userSignup implements IUserSignup {
  fullName = '';
  businessName = '';
  email = '';
  password = '';
}
