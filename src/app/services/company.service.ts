import { Company } from './../models/company';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  baseUrl = environment.baseUrl;
  companies!:Company[];

  menuChoice: string = 'Add';
    // companies: Company[]=[];
    // popup edit
public formGroup: FormGroup = new FormGroup({
  companyId: new FormControl(null),
  companyName: new FormControl(''),
  contact: new FormControl(''),
  phone: new FormControl(''),
  email: new FormControl(''),
  zipCode: new FormControl(''),
});

// initialise les valeurs du formulaire
initializeFormGroup() {
  this.formGroup.setValue({
    companyId: null,
    companyName: '',
    contact: '',
    phone: '',
    email: '',
    zipCode: ''
  });
}
  constructor(private httpClient: HttpClient) { }

  // affiche la liste des entreprises
  getAllData(): Observable<Company[]> {
      return this.httpClient.get<Company[]>(`${this.baseUrl}/api/companies`);
  }
}
