import React from 'react';

function LogsPage({ createLog }) {

    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Log #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Operation Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Table Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Operation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tuple KeyValue
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td className="px-6 py-4 whitespace-nowrap">1</td>
                            <td className="px-6 py-4 whitespace-nowrap">JohnDoe</td>
                            <td className="px-6 py-4 whitespace-nowrap">2024-05-10 10:30:15</td>
                            <td className="px-6 py-4 whitespace-nowrap">Students</td>
                            <td className="px-6 py-4 whitespace-nowrap">Insert</td>
                            <td className="px-6 py-4 whitespace-nowrap">Student ID: 123456, First Name: John, Last Name: Doe</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Details</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LogsPage;
