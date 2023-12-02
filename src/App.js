import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Motivation from "./components/Motivation";
import Task from "./components/Task";
import ClearAll from "./components/ClearAll";
import Congratulations from "./components/Congratulations";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showCongrats, setShowCongrats] = useState(false);

  return (
    <div className="flex flex-col md:w-2/3 lg:w-1/2 mx-auto">
      <div className="space-y-0">
        {/* Header */}
        <Header tasks={tasks} />
        {/* Upper Body */}
        <div className="pt-6 ">
          <Motivation />
          {/* Tasks To Do */}
          <AddTask
            tasks={tasks}
            setTasks={setTasks}
            setShowCongrats={setShowCongrats}
          />
          {tasks.length > 1 && (
            <ClearAll setTasks={setTasks} setShowCongrats={setShowCongrats} />
          )}
        </div>
        {/* Lower Body */}
        {tasks.map((task, index) => {
          return (
            <Task
              key={index}
              index={index}
              tasks={tasks}
              setTasks={setTasks}
              taskText={task}
              setShowCongrats={setShowCongrats}
            />
          );
        })}
      </div>
      {/* Show Congrats Message if User has Completed all their todos */}
      {/* Footer */}
      {showCongrats && <Congratulations />}
    </div>
  );
}

export default App;
