import axios from 'axios';

export function getStudents() {
  return axios.get('http://127.0.0.1:8000/students/')
    .then(response => response.data)
}

export function deleteStudent(studentId) {
  return axios.delete('http://127.0.0.1:8000/students/' + studentId + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addStudent(student){
  return axios.post('http://127.0.0.1:8000/students/', {
    studentId:null,
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    enrollment:student.RegistrationNo.value,
    Email:student.Email.value,
    branch:student.Course.value,
    avg_spi:student.avg_spi.value

  })
    .then(response=>response.data)
}

export function updateStudent(stuid, student) {
  return axios.put('http://127.0.0.1:8000/students/' + stuid + '/', {
    FirstName:student.FirstName.value,
    LastName:student.LastName.value,
    enrollment:student.RegistrationNo.value,
    Email:student.Email.value,
    branch:student.Course.value,
    avg_spi:student.avg_spi.value
  })
   .then(response => response.data)
}