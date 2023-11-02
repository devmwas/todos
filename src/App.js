import { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Motivation from "./components/Motivation";
import Task from "./components/Task";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [tasks, setTasks] = useState([])
  const [showCongrats ,setShowCongrats] = useState(false)

  return (
    <div className="flex flex-col md:w-1/2 mx-auto">
      <Header tasks={tasks} />
      <Motivation />
      <AddTask tasks={tasks} setTasks={setTasks} setShowCongrats={setShowCongrats}/>
      {/* Tasks To Do */}
      <div className="space-y-0">
        { tasks.map((task, index) => {
          return <Task key={index} 
                    index={index} 
                    tasks={tasks}
                    setTasks={setTasks}
                    taskText={task}
                    setShowCongrats={setShowCongrats}
                    />
        })}
      </div>
      {/* Show Congrats Message if User has Completed all their todos */}
      { showCongrats && 
          <div className="text-2xl p-8 bg-sky-700 text-white text-center">
            <div className="font-bold text-green-400">CONGRATULATIONS!</div> 
            <div className="text-xl pt-2">You have completed all your Todos.</div>
          </div>
      }
    </div>
  );
}

export default App;
