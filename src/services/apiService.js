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

  async createStudent(student) {
    try {
      const response = await apiClient.post("/students", student);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getStudents(bid) {
    try {
      const response = await apiClient.get(`/students/${bid}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async deleteStudent() {
    try {
      const response = await apiClient.delete("/students");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async createClasses(uclass) {
    try {
      const response = await apiClient.post("/classes",uclass);
      return response;
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

  async deleteClasses(classid) {
    try {
      const response = await apiClient.delete(`/classes/${classid}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async createCourses(course) {
    try {
      const response = await apiClient.post("/courses", course);
      return response;
    } catch (error) {
      throw error;
    }
  },

  async getCourses() {
    try {
      const response = await apiClient.get("/courses");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async deleteCourses(courseid) {
    try {
      const response = await apiClient.delete(`/courses/${courseid}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default ApiService;
