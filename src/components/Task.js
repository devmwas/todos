import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Task({ index, tasks, setTasks, taskText, setShowCongrats }) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();

  const handleDelete = () => {
    const newTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
    if (newTasks.length == 0) setShowCongrats(true);
    setTasks(newTasks);
  };

  return (
    <div className="px-2 md:px-4 py-2 text-white bg-sky-700 space-y-2 md:space-y-4 border-b border-black">
      <div className="flex justify-between">
        <div className="flex text-sm md:text-2xl">
          <div className="mr-2">{index + 1}.</div>
          <div>{taskText}</div>
        </div>
        {/* The -1 margin is for alignment purposes */}
        {/* This will only show on mobile phones */}
        <div className="-mt-1 md:hidden">
          <DeleteIcon
            fontSize="small"
            sx={{ cursor: "pointer" }}
            onClick={handleDelete}
          />
        </div>
        {/* This will show on medium devices and larger */}
        <div className="mt-1 hidden md:block">
          <DeleteIcon
            fontSize="medium"
            sx={{ cursor: "pointer" }}
            onClick={handleDelete}
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4 text-xs md:text-md">
        <div className="mr-1">
          {hour}:{minute.toString().length < 2 ? "0" + minute : minute}
        </div>{" "}
        {hour >= 12 ? "PM" : "AM"}
        <div>
          {year}/{month + 1}/{day}
        </div>
      </div>
    </div>
  );
}

export default Task;
