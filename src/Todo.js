

import React, { useState } from 'react';

const Todo = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);


  const handleAddTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className='bg-blue-200 text-center py-20'>
      <div>
        <h1>Todo App</h1>
        <div className='bg-transparent gap-5'>
          <input
            type='text'
            placeholder='Enter the task'
            className='p-3'
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button
            className='bg-pink-400 rounded-sm p-3 cursor-pointer'
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>
        <div>
          <ul>
            {tasks.map((task, index) => (
              <div key={index} >
                <li>{task}</li>
                <div>
                  <button
                    className='bg-pink-400 rounded-sm p-3 cursor-pointer'
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
