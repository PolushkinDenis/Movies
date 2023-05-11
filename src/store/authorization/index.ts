import axios from 'axios';

export const API_URL = 'http://localhost:8000/api';

interface AccessToken {
  token: string
}

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
  const userData = localStorage.getItem('userData');

  if(userData) {
    config.headers.Authorization = `Bearer ${JSON.parse(userData).accessToken}`;
  }

  return config;
});

$api.interceptors.response.use((config) => {
  return config;
}, async (error) => {
   const originalRequest = error.config;

   if(error.response.status === 401 && error.config && !error.config._isRetry) {
     originalRequest._isRetry = true;
     try {
       const response = await axios.post<AccessToken>(`${API_URL}/auth/refresh`, null, {withCredentials: true});
       const userData = localStorage.getItem('userData');

       if(userData) {
         localStorage.setItem('userData', JSON.stringify({
           accessToken: response.data.token,
           email: JSON.parse(userData).email,
         }));

         return $api.request(originalRequest);
       }
     } catch (e) {
       console.log('Пользователь не авторизован!');
     }
   }

   throw error;
});


export default $api;