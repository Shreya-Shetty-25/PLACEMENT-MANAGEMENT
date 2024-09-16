import axios from 'axios';

export function getCompany() {
  return axios.get('http://127.0.0.1:8000/company/companies/')
    .then(response => response.data)
}

export function deleteCompany(companyId) {
  return axios.delete('http://127.0.0.1:8000/company/companies/' + companyId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addCompany(company){
  return axios.post('http://127.0.0.1:8000/company/companies/', {
    companyId:null,
    companyName:company.companyName.value,
    decription:company.description.value,
    salary:company.salary.value,
    jobrole:company.jobrole.value,
    location:company.location.value,
    criteria:company.criteria.value,
    lastdate:company.lastdate.value

  })
    .then(response=>response.data)
}

export function updateCompany(companyid, company) {
  return axios.put('http://127.0.0.1:8000/company/companies/' + companyid + '/', {
    companyName:company.companyName.value,
    decription:company.description.value,
    salary:company.salary.value,
    jobrole:company.jobrole.value,
    location:company.location.value,
    criteria:company.criteria.value,
    lastdate:company.lastdate.value

  })
   .then(response => response.data)
}