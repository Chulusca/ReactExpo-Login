import axios from 'axios';
import React, { useContext } from 'react';

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
        
        //console.log('Datos completos recibidos:', JSON.stringify(response.data[0].events, getCircularReplacer(), 2));

        return response.data[0].events; 

    } catch (error) {
        console.error('Error en getEvents:', error.message || error);
        return error.response ? error.response.data : null; 
    }
};

export const getCategorias = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/event-category`);
        return response.data
    }
    catch (error){
        console.error('Error en getCategorias:', error.message || error);
        return error.response ? error.response.data : null;
    }
}

export const getLocations = async (token) => {
    try{       
        const response = await axios.get(`${API_URL}/api/event-location`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    }
    catch (error){
        console.error('Error en getLocations:', error.message || error);
        return error.response ? error.response.data : null;
    }
}

export const createEvent = async (eventDetails, token) => {
    try {
        const response = await axios.post(`${API_URL}/api/event`, {
            name: eventDetails.name,
            description: eventDetails.description,
            id_event_category: eventDetails.id_event_category,
            id_event_location: eventDetails.id_event_location,
            start_date: eventDetails.start_date,
            duration_in_minutes: eventDetails.duration_in_minutes,
            price: eventDetails.price,
            enabled_for_enrollment: eventDetails.enabled_for_enrollment ? 1 : 0,
            max_assistance: eventDetails.max_assistance
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json' 
            }
        });
        return {
            status: response.status,
            message: response.data,
        };
    } catch (error) {
        console.error('Error en createEvent:', error.message || error);
        return error.response 
            ? {
                status: error.response.status,
                message: error.response.data.message || 'Ocurrió un error.'
              }
            : { status: 500, message: 'Error de conexión.' };
    }
}

export const getParticipants = async (id_event) => {
    try{       
        const response = await axios.get(`${API_URL}/api/event/enrollment/${id_event}`, {
            headers: {
                
            },
        });
        return response.data;
    }
    catch (error){
        console.error('Error en getParticipants:', error.message || error);
        return error.response ? error.response.data : null;
    }
}

export const enrollUser = async (id_event, token) => {
    try {       
        const response = await axios.post(`${API_URL}/api/event/enrollment/${id_event}`,{}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response;
    } catch (error) {
        console.error('Error en enrollUser:', error.message || error);
        return error.response ? error.response.data : null;
    }
}

