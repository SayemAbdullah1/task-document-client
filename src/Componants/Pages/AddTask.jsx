import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddTask = () => {

    const navigate = useNavigate()

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const picture = form.picture.value;
        

        const task = {
            name,
            picture,
        }

        fetch('http://localhost:5000/allTask', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('New task is stored');
                navigate('/mytask')
               
            })
    }
    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center text-secondary font-bold mb-6'>Add Products</h2>
                <form onSubmit={handleAddProduct} className='grid grid-cols-1 gap-3 mt-10'>



                    <textarea name="name" type="text" placeholder="Product Name" className="input w-full input-bordered" required />

                    <input name="picture" type="text" placeholder="Image URL" className="input w-full input-bordered" required />
                  
                    <br />
                    <button type="submit" class=" w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><input className='btn btn-accent w-full' type="submit" value="submit" /></button>
                    
                </form>

            </div>
        </div>
    );
};

export default AddTask;