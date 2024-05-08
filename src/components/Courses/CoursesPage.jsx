import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../../services/apiService';

function CoursesPage() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const coursesData = await ApiService.getCourses();
                console.log("Courses => ", coursesData);
                setCourses(coursesData);
            } catch (error) {
                console.error('Error fetching students:', error);
            }
        };

        fetchCourses();
    }, []);


    return (
        <div>
            <Link to="/courses/create" >
                <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create Course</button>
            </Link>
            <hr class="w-98 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
            <h2 class="px-3 font-medium text-gray-900 bg-white dark:text-white dark:bg-gray-900">Course Data</h2>
            <br />
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Department Code
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course) => (
                            <tr key={course["DEPT_CODE"]} className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td className="px-6 py-4 whitespace-nowrap">{course["DEPT_CODE"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{course["COURSE#"]}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{course["TITLE"]}</td>
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

export default CoursesPage;
