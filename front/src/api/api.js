import axios from 'axios';

const URLLOCAL ="http://localhost:4000/api";
const URLVERCEL = "";


const api = axios.create({
  baseURL: URLLOCAL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    console.log("Datos enviados:", {email ,password})
    const response = await api.post('/usuarios/login', { email, password });
    return response.data;
  } catch (error) {
    console.error("Error en la solicitud", error.response ? error.response.data : error.message);
    throw error;
  }
}