import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../services/apiService';

function StudentsPage() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const studentData = await ApiService.getStudents();
                setStudents(studentData);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchStudents();
    }, []);

    const handleDelete = (id) => {
        // deleteStudent(id);
    };

    return (
        <div>
            <Link to="/students/create" >
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Student</button>
            </Link>
            <hr class="w-98 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 class="px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">Student Data</h2>
            <br />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Student ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Level
                            </th>
                            <th scope="col" className="px-6 py-3">
                                GPA
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Birthdate
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id} className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap">{student["B#"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student["FIRST_NAME"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student["LAST_NAME"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student["ST_LEVEL"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student["GPA"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student["EMAIL"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student["BDATE"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right">
                                    <Link to={`/students/edit/${student.id}`} >
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </Link>
                                    <button onClick={() => handleDelete(student.id)} className="ml-2 text-red-600 dark:text-red-500 hover:text-red-700 dark:hover:text-red-700" aria-label="Delete">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>

                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentsPage;
