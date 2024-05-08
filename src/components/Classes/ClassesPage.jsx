import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../services/apiService';

function ClassesPage() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const classesData = await ApiService.getClasses();
                console.log("Classes => ", classesData);
                setClasses(classesData);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchClasses();
    }, []);

    return (
        <div>
            <Link to="/classes/create" >
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Class</button>
            </Link>
            <hr class="w-98 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 class="px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">Classes Data</h2>
            <br />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Class ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Department Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Section Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Year
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Semester
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Limit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Class Size
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Room
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {classes.map((clas) => (

                            <tr key={clas.id} className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap">{clas.classid}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.dept_code}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.course}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.sect}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.year}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.semester}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.limit}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.class_size}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{clas.room}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ClassesPage;