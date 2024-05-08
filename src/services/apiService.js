// apiService.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:2000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const ApiService = {
  async getStudents() {
    try {
      const response = await apiClient.get("/students");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getClasses() {
    try {
      const response = await apiClient.get("/classes");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getCources() {
    try {
      const response = await apiClient.get("/cources");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
