import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Company } from './company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  company :Company[]= [
    {
      "id": 1,
      "email": "GatewayCorp@email.com",
      "name": "GateWay",
      "totalEmployee": 12000,
      "address": "Ahmadabad",
      "isCompanyActive": false,
      "companyBranch": [
        {
          "id": 1,
          "name": "GateWay Gandhinagar",
          "address": "Mumbai"
        },
        {
          "id": 2,
          "name": "GateWay Ahmedabad",
          "address": "Ahmedabad"
        },
        {
          "id": 3,
          "name": "GateWay  Mumbai",
          "address": " Mumbai"
        },
        {
          "id": 4,
          "name": "GateWay Pune",
          "address": "Pune"
        }
      ],
      "totalBranch": 4
    },
    {
      "id": 2,
      "email": "Infosys@gmail.com",
      "name": "Infosys",
      "totalEmployee": 12000,
      "address": "Pune",
      "isCompanyActive": false,
      "companyBranch": [
        {
          "id": 1,
          "name": "Infosys Mumbai",
          "address": "Mumbai"
        },
        {
          "id": 2,
          "name": "Infosys Pune ",
          "address": "Pune"
        }
      ],
      "totalBranch": 2
    },
    {
      "id": 3,
      "email": "Tatvasoft@gmail.com",
      "name": "Tatvasoft",
      "totalEmployee": 500,
      "address": "Ahmedabad",
      "isCompanyActive": true,
      "companyBranch": [
        {
          "id": 1,
          "name": "Tatvasoft Ahmedabad",
          "address": "Ahmedabad"
        },
        {
          "id": 2,
          "name": "Tatvasoft Mumbai",
          "address": "Mumbai"
        },
        {
          "id": 3,
          "name": "Tatvasoft Pune",
          "address": "Pune"
        },
        {
          "id": 4,
          "name": "Tatvasoft Anand",
          "address": "Anand"
        }
      ],
      "totalBranch": 4
    },

    {
      "id": 4,
      "email": "Apple@gmail.com",
      "name": "Apple",
      "totalEmployee": 500,
      "address": "Ahmedabad",
      "isCompanyActive": true,
      "companyBranch": [
        {
          "id": 1,
          "name": "Tatvasoft Ahmedabad",
          "address": "Ahmedabad"
        }
       
      ],
      "totalBranch":1
    }
  ];
  constructor() { }


  getCompanies = async()=>{
    return this.company;
  }

  getCompanyById = async(id)=>{
    for(let i=0;i<this.company.length;i++)
    {
      if(this.company[i].id == id)
      {
        return this.company[i];
      }
    }
  }
}
