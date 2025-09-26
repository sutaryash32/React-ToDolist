'use client';

import React, { useState } from 'react';

function Page() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle('');
    setDesc('');
  };

  const deleteHandler = (index) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(index, 1);
    setMainTask(updatedTasks);
  };

  const listElements =
  mainTask.length > 0 ? (
    mainTask.map((task, index) => (
      <li key={index} className='mb-4'>
        <div className='w-full flex items-center bg-white p-4 rounded shadow'>
          
          <div className='w-1/3'>
            <h2 className='font-semibold'>{task.title}</h2>
          </div>

          
          <div className='w-1/3 text-center'>
            <h2 className='text-gray-600'>{task.desc}</h2>
          </div>

        
          <div className='w-1/3 flex justify-end'>
            <button
              onClick={() => deleteHandler(index)}
              className='bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-red-600'
            >
              Delete
            </button>
          </div>
        </div>
      </li>
    ))
  ) : (
    <h2 className='text-white'>Not available at the moment</h2>
  );

  return (
    <>
      <div className='flex justify-center'>
        <h1 className='font-bold text-9xl'>Yash's ToDo List</h1>
      </div>

      <div className='bg-cyan-400 mt-20 p-4 flex justify-between'>
        <form onSubmit={submitHandler} className='flex space-x-4'>
          <input
            placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='px-2 py-1 rounded'
          />
          <input
            placeholder='Enter Description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='px-2 py-1 rounded'
          />
          <button className='bg-emerald-500 rounded-3xl px-4 py-2'>
            Add Task
          </button>
        </form>
      </div>

      <div className='bg-cyan-900 text-4xl text-black mt-4 p-4'>
        <ul>{listElements}</ul>
      </div>
    </>
  );
}

export default Page;