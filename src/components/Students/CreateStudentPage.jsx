import React, { useState } from 'react';

function CreateStudentPage({ dropStudent }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        studentLevel: '',
        gpa: '',
        email: '',
        birthdate: ''
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
    };

    return (
        <div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="John" required />
                </div>
                <div className="mb-5">
                    <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Doe" required />
                </div>
                <div className="mb-5">
                    <label for="st_level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student Level</label>
                    <input type="text" id="studentLevel" name="studentLevel" value={formData.studentLevel} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Freshman, Sophomore, etc." required />
                </div>
                <div className="mb-5">
                    <label for="gpa_id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GPA</label>
                    <input type="number" id="gpa_id" name="gpa" value={formData.gpa} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="e.g., 3.5" />
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="bdate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthdate</label>
                    <input type="date" id="birthdate" name="birthdate" value={formData.birthdate} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
            </form>
        </div>
    );
}

export default CreateStudentPage;
