export class Company {
  companyId: number;
    companyName: string;
    contact: string;
    phone: string;
    email: string;
    zipCode: string;

  constructor(companyId = 0, companyName = '', contact = '', phone = '', email = '', zipCode = '') {
    this.companyId = companyId;
    this.companyName = companyName;
    this.contact = contact;
    this.phone = phone;
    this.email = email;
    this.zipCode = zipCode;
  }
}
