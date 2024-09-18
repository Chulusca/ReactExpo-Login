import axios from 'axios';

const API_URL = 'https://pheasant-primary-sincerely.ngrok-free.app';

function getCircularReplacer() {
    const ancestors = [];
    return function (key, value) {
        if (typeof value !== "object" || value === null) {
            return value;
        }
        while (ancestors.length > 0 && ancestors.at(-1) !== this) {
            ancestors.pop();
        }
        if (ancestors.includes(value)) {
            return "[Circular]";
        }
        ancestors.push(value);
        return value;
    };
}

export const getEvents = async (page = 1) => {
    try {
        const response = await axios.get(`${API_URL}/api/event`, { params: { page: page } });
        
        console.log('Datos completos recibidos:', JSON.stringify(response.data[0].events, getCircularReplacer(), 2));

        return response.data[0].events; 

    } catch (error) {
        console.error('Error en getEvents:', error.message || error);
        return error.response ? error.response.data : null; 
    }
};
