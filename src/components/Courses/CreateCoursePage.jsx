import React, { useState } from 'react';
import ApiService from '../../services/apiService';
import { useNavigate } from 'react-router-dom';

function CreateCoursePage({ createCourse }) {
    const [formData, setFormData] = useState({
        dept_code: '',
        courseNumber: '',
        title: ''
    });
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ApiService.createCourses(formData);
            setSuccessMessage('Course created successfully!');
            setErrorMessage('');
            setTimeout(() => {
                navigate('/courses');
            }, 500);
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Failed to create Course. Please try again.');
        }
    };

    return (
        <div>
            {successMessage && <div className="text-green-600">{successMessage}</div>}
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="dept_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department Code</label>
                    <input type="text" id="dept_code" name="dept_code" value={formData.dept_code} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., COMP" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="courseNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Number</label>
                    <input type="number" id="courseNumber" name="courseNumber" value={formData.courseNumber} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., 101" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Course Title" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Course</button>
            </form>
        </div>
    );
}

export default CreateCoursePage;
