import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

function AddTask({ setTasks, setShowCongrats, tasks }) {
  const [taskText, setTaskText] = useState("");
  const [error, setError] = useState(false);
  const [addTaskBottomMargin, setAddTaskBottomMargin] = useState("");

  const handleChange = (e) => {
    setTaskText(e.target.value);
    setError(false);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (taskText != "") {
      setShowCongrats(false);
      setTasks((prevTasks) => {
        return [...prevTasks, taskText];
      });
      setTaskText("");
    } else {
      setError(true);
    }
  };

  //   We want to add a bottom margin whenever we have only one task
  useEffect(() => {
    tasks.length == 1
      ? setAddTaskBottomMargin("mb-6")
      : setAddTaskBottomMargin("");
  });

  return (
    <div
      className={`flex flex-col bg-white space-y-1 mt-4 ${addTaskBottomMargin} px-8`}
    >
      {error ? (
        <form onSubmit={addTask}>
          <TextField
            variant="outlined"
            error
            helperText="Enter a valid todo item"
            label="Task"
            onChange={handleChange}
            sx={{ width: "100%" }}
            value={taskText}
          />
        </form>
      ) : (
        <form onSubmit={addTask}>
          <TextField
            variant="outlined"
            label="Task"
            onChange={handleChange}
            sx={{ width: "100%" }}
            value={taskText}
          />
        </form>
      )}
      <Button variant="contained" onClick={addTask}>
        ADD TASK
      </Button>
    </div>
  );
}

export default AddTask;
