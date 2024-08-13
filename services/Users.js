import axios from 'axios';

const API_URL = 'https://638d-186-19-157-106.ngrok-free.app';

export const loginUser = async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/api/user/login`, {
        username: username,
        password: password
      });
  
      if (!response.data.success) {
        return {
            success: response.data.success,
            message: response.data.message,
            token: response.data.token,
        };
      }
      return {
        success: response.data.success,
        token: response.data.token,
      };
    } catch (error) {
      console.error('Error en loginUser:', error.message || error);
    }
  };

export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/user/register`, {
      first_name: userData.first_name,
      last_name: userData.last_name,
      username: userData.username,
      password: userData.password
    });
    
    console.log(response);
    
    if(response.status == 201){
      const login = loginUser(userData.username, userData.password)
      const payload = validateToken(login.token)
      return {
        payload: payload,
        token: login.token
      }
    }
    else{
      return false;
    }
};

export const validateToken = async (token) => {
    try 
    {
        const response = await axios.get(`${API_URL}/api/user/validartoken`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.user;
    } catch (error) {
      console.error('Error en loginUser:', error.message || error);
    }
};
