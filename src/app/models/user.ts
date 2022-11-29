export class User {
  id: number;
  email: string;
  password: string;
  message : string;
  token: string;

  constructor(id = 0, email = '', password = '',message='',token='',) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.message = message;
    this.token = token; 
  }
}
