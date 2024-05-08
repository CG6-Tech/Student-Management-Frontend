import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../services/apiService';

function CreateClassPage({ createClass }) {
    const [formData, setFormData] = useState({
        classid: '',
        dept_code: '',
        courseNumber: '',
        sectionNumber: '',
        year: '',
        semester: '',
        limit: '',
        classSize: '',
        room: ''
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
            await ApiService.createClasses(formData);
            setSuccessMessage('Class created successfully!');
            setErrorMessage('');
            setTimeout(() => {
                navigate('/classes');
            }, 500);
        } catch (error) {
            setSuccessMessage('');
            setErrorMessage('Failed to create Class. Please try again.');
        }
    };

    return (
        <div>
            {successMessage && <div className="text-green-600">{successMessage}</div>}
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="classid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class ID</label>
                    <input type="text" id="classid" name="classid" value={formData.classid} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., CS101" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="dept_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department Code</label>
                    <input type="text" id="dept_code" name="dept_code" value={formData.dept_code} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., COMP" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="courseNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Number</label>
                    <input type="text" id="courseNumber" name="courseNumber" value={formData.courseNumber} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., 101" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="sectionNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Section Number</label>
                    <input type="text" id="sectionNumber" name="sectionNumber" value={formData.sectionNumber} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., 01" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
                    <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., 2024" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="semester" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Semester</label>
                    <input type="text" id="semester" name="semester" value={formData.semester} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., Fall" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="limit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Limit</label>
                    <input type="number" id="limit" name="limit" value={formData.limit} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., 30" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="classSize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class Size</label>
                    <input type="number" id="classSize" name="classSize" value={formData.classSize} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., 25" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room</label>
                    <input type="text" id="room" name="room" value={formData.room} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., Room 101" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Class</button>
            </form>
        </div>
    );
}

export default CreateClassPage;
