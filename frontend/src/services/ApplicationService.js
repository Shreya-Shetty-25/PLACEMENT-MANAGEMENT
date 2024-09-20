import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/applications/apply_company/';
const getCSRFToken = () => {
  const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('csrftoken='))
    ?.split('=')[1];
  return cookieValue || null;
};

// Now call the function to get the csrftoken
const csrftoken = getCSRFToken();

export const applyToCompany = async (studentId, companyId,  cvFile) => {
  const formData = new FormData();
    formData.append('cv', cvFile); // Append the CV file
    console.log(formData[0],"ji")
    console.log("po")
  try {
    const response = await axios.post(`${API_URL}${studentId}/${companyId}/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'X-CSRFToken': csrftoken,  // Include CSRF token if needed
      }
    });
    console.log('Applied successfully:', response.data);
    return response.data; // Return the response if needed
  } catch (error) {
    console.error('Error applying to company:', error);
    throw error; // Re-throw the error to be caught in the calling function
  }
};
export const getStudentIdByEmail = async (email) => {
  try {
    const response = await axios.post('http://127.0.0.1:8000/applications/getStudentIdByEmail/', { email });
    console.log("fetched"+response.data.studentId)
    return response.data.studentId;
  } catch (error) {
    console.error('Error fetching student ID:', error);
    return null;
  }
};