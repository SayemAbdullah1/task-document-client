import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const MyTask = () => {
    const url = `http://localhost:5000/allTask`;

    const { data: allTask = [], refetch, isLoading } = useQuery({
        queryKey: ['allTask'],
        queryFn: async () => {
            const res = await fetch(url, {

            });
            const data = await res.json();
            return data;
        }
    })
    const handleDeleteProduct = task => {
        fetch(`http://localhost:5000/deleteTask${task._id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`deleted successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6">
                            File image
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Task details
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Action
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Action
                        </th>
                        <th scope="col" class="py-3 px-6">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allTask &&
                        allTask?.map((task) => <tr key={task._id}  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div><img className='w-12 h-12' src={task.picture} alt="Task manager" /></div>
                        </th>
                        <td class="py-4 px-6">
                            {task.name}
                        </td>
                        <td class="py-4 px-6">
                                <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Update</button>
                        </td>
                        <td class="py-4 px-6">
                                <Link to='/complete' class="font-bold text-gary-600 dark:text-blue-500 hover:underline"><button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Completed</button></Link>
                        </td>
                        <td class="py-4 px-6">
                                <button onClick={() => handleDeleteProduct(task)} class="font-bold text-red-600 dark:text-blue-500 hover:underline">Delete</button>
                        </td>
                    </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
                
    );
};

export default MyTask;