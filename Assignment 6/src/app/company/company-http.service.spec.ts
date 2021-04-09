import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Company } from './company';

import { CompanyHttpService } from './company-http.service';

describe('CompanyHttpService', () => {
  let service: CompanyHttpService;


  beforeEach(() => {

    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(CompanyHttpService);
  });



  it('should return list of all companies',(done)=>{
    service.getAllCompanies().subscribe(data=>{
      expect(data.length).toBe(4);
      done();
    })
  });

  
  it('should delete a company',async()=>{
    const company = service.deleteCompany(4);
    expect(company).toBeTruthy();
  });
  
  it('should post a company',async()=>{
    let company= {
      "id": 5,
      "email": "Hp@gmail.com",
      "name": "Hp",
      "totalEmployee": 1200,
      "address": "Ahmedabad",
      "isCompanyActive": false,
      "companyBranch": [
        {
          "id": 1,
          "name": "Hp Ahmedabad",
          "address": "Ahmedabad"
        },
        {
          "id": 2,
          "name": "Hp Nadiad ",
          "address": "Nadiad"
        }
      ],
      "totalBranch": 2
    };

    const result = service.postCompany(company);
    expect(result).toBeTruthy();
  });

  it('should update a company',async()=>{
    let company= {
      "id": 5,
      "email": "Hp@gmail.com",
      "name": "Hp",
      "totalEmployee": 12200,
      "address": "Ahmedabad",
      "isCompanyActive": false,
      "companyBranch": [
        {
          "id": 1,
          "name": "Hp Ahmedabad",
          "address": "Ahmedabad"
        },
        {
          "id": 2,
          "name": "Hp Nadiad ",
          "address": "Nadiad"
        }
      ],
      "totalBranch": 2
    };

    const updatedCompany = service.putCompany(company);
    expect(updatedCompany).toBeTruthy();
  });



  it('should get company by Id',(done)=>{
    const result = service.getCompanyById(2);
    expect(result).toBeTruthy();
    done();
  });

});
