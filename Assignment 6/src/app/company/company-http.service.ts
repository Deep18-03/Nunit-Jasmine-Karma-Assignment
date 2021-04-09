import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './company';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyHttpService {

  companyCount=0;
  showCompany:Company=new Company();
  editCompany:Company=new Company();
  company : Company;

  constructor(private http:HttpClient) { }

  //Get Method
  getAllCompanies():Observable<Company[]>
  {
   return this.http.get<Company[]>("http://localhost:3000/companies");

  }

  //Get By Id
  getCompanyById(id:number):Observable<Company>
  {
    return this.http.get<Company>("http://localhost:3000/companies/"+id.toString());
  }

  //Create method
  postCompany(body : Company):Observable<Company>
  {
    return this.http.post<Company>("http://localhost:3000/companies",body,{headers:{"content-Type":"application/json"}});
  }

  //Update method
  putCompany(body:Company):Observable<Company>
  {
    return this.http.put<Company>("http://localhost:3000/companies/"+body.id.toString(),body,{headers:{"content-Type":"application/json"}});
  }

  //Delete Method
  deleteCompany(id:number):Observable<Company>
  {
   return this.http.delete<Company>("http://localhost:3000/companies/"+id.toString());
  }
}
