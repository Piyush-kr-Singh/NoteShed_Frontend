// src/api.js
import axios from 'axios';

// const API_BASE_URL = 'http://localhost:4000';
// https://note-shed-backend.vercel.app/

const API_BASE_URL = 'https://note-shed-backend.vercel.app';

export const getUsers = () => axios.get(`${API_BASE_URL}/getusers`);
export const createUser = (user) => axios.post(`${API_BASE_URL}/create`, user);
export const deleteUser = (id) => axios.delete(`${API_BASE_URL}/deleteuser/${id}`);
export const getUser = (id) => axios.get(`${API_BASE_URL}/getuser/${id}`);
export const updateUser = (id, user) => axios.patch(`${API_BASE_URL}/updateuser/${id}`, user);
