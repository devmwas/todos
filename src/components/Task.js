import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function Task({index, tasks, setTasks, taskText, setShowCongrats }) {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    const handleDelete = () => {
        const newTasks = tasks.filter((task, taskIndex) => taskIndex !==index)
        if(newTasks.length == 0) setShowCongrats(true) 
        setTasks(newTasks)
    }

  return (
    <div className='px-8 py-4 text-white bg-sky-700 space-y-4 border-b-2 border-black'>
        <div className='flex justify-between'>
            <div className='flex text-3xl'>
                <div className='mr-2'>{index+1}.</div>
                <div>{taskText}</div>
            </div>
            <div className=''>
                <DeleteIcon fontSize='large' sx={{cursor: 'pointer'}} onClick={handleDelete} />
            </div>
        </div>
        <div className='flex justify-end space-x-4 text-xl'>
            <div className='mr-2'>{hour}:
                {minute.toString().length < 2 ? '0'+minute : minute}</div> {hour >=12 ? 'pm': 'am'}
            <div>{year}/{month+1}/{day}</div>
        </div>
    </div>
  )
}

export default Task