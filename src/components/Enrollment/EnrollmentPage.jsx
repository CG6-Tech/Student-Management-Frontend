import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EnrollmentPage({ createClass }) {
    const [formData, setFormData] = useState({
        bid: '',
        calssid: '',
        score: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
        setFormData({
            bid: '',
            calssid: '',
            score: ''
        });
    };

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="bid" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">B Number</label>
                    <input type="text" id="bid" name="bid" value={formData.bid} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., CS101" required />
                </div>
                <div className="mb-5">
                    <label htmlFor="dept_code" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class id</label>
                    <input type="text" id="dept_code" name="dept_code" value={formData.dept_code} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., COMP" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enroll Student</button>
            </form>
        </div>
    );
}

export default EnrollmentPage;