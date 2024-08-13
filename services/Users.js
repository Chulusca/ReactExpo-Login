import axios from 'axios';

const API_URL = 'https://4de5-200-73-176-50.ngrok-free.app';

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
      throw error;
    }
  };

export const registerUser = async (userData) => {
  
};

export const validateToken = async (token) => {
    try {
        const response = await axios.get(`${API_URL}/api/user/validartoken`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
     
        if (!response.data.success) {
        console.log('error');
          return {
            message: response.data.message,
          };
        }   
        console.log(response.data);
        return response.data.user;
    } catch (error) {
        console.error('Error en loginUser:', error.message || error);
        throw error;
    }
};
