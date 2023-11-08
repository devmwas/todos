import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

function AddTask({setTasks, setShowCongrats}) {
    const [taskText, setTaskText] = useState('')
    const [error, setError] = useState(false)

    const handleChange = e => {
        setTaskText(e.target.value)
        setError(false)
    }

    const addTask = e => {
        e.preventDefault()
        if(taskText != '') {
            setShowCongrats(false)
            setTasks(prevTasks => {
                return [
                    ...prevTasks,
                    taskText
                ]
            })
            setTaskText('')
        } else {
            setError(true)
        }
    }

  return (
    <div className='flex flex-col bg-white my-4 space-y-2 px-8'>
        { error ?
            <form onSubmit={addTask}>
                <TextField 
                    variant='outlined' 
                    error
                    helperText="Enter a valid todo item"
                    label='Task' 
                    onChange={handleChange} 
                    sx={{width: '100%'}}
                    value={taskText} />
                {/* <Button type="submit" variant='contained' onClick={addTask}>
                    ADD TASK
                </Button> */}
            </form> :
            <form onSubmit={addTask} className='w-full'>
                <TextField
                    variant='outlined' 
                    label='Task' 
                    onChange={handleChange} 
                    sx={{width: '100%'}}
                    value={taskText} />
            </form>
            }
            <Button type="" variant='contained' onClick={addTask}>
                ADD TASK
            </Button>
    </div>
  )
}

export default AddTask