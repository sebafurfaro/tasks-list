import React, {useState, useEffect} from "react";
import { NotFound } from './components/NotFound';
import { BackAnimated } from "./components/BackAnimated";

const App = () => {

  const [ tasks, setTasks ] = useState([]);
  const [ newTask, setNewTask ] = useState('');

  useEffect(() => {
    const storedTask = JSON.parse(localStorage.getItem('tasks'));
    if(storedTask) {setTasks(storedTask)}
  },[]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault();
    if(newTask) {
      setTasks([...tasks, {text: newTask, resolved: false}])
      setNewTask('')
    }
  };

  const deleteTask = index => {
    const newTask = [...tasks];
    newTask.splice(index, 1)
    setTasks(newTask)
  };

  const markIsDone = index => {
    const newTask = [...tasks];
    newTask[index].resolved = !newTask[index].resolved
    setTasks(newTask)
  };

  return (
    <div className="App bg-indigo-900 p-3 min-h-screen flex flex-col items-center justify-start text-white relative overflow-hidden">
      <BackAnimated />
      <h1 className="font-bold uppercase text-3xl mb-10">Task List</h1>
      <form onSubmit={addTask} className="mx-auto mb-5 w-2/3 p-4 bg-slate-800/75 shadow-lg grid grid-cols-9 items-center backdrop-blur-sm">
        <input
          className="col-span-8 p-3 text-slate-900"
          placeholder="Add New Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} />
        <button className="p-3 bg-green-400 uppercase">Add</button>
      </form>
      <div className="mx-auto w-2/3 min-h-[50vh] px-4 py-4 bg-slate-800/75 shadow-lg backdrop-blur-sm">
        {tasks.length ? (
          <ul className="">
            {tasks.map((task, index) => (
              <li key={index} className="bg-slate-700 p-2 pl-4 grid grid-cols-12 gap-x-4 items-center mb-5 last:mb-0">
                <div className="col-span-10">
                  {task.resolved ? (
                    <p className="line-through opacity-50">{task.text}</p>
                  ) : (
                    <span>{task.text}</span>
                  )}
                </div>
                <button onClick={() => deleteTask(index)} className="flex items-center justify-center p-2 bg-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                  </svg>
                </button>
                <button onClick={() => markIsDone(index)} className={`flex items-center justify-center p-2 ${task.resolved ? 'bg-yellow-500' : 'bg-green-500'}`}>
                  {task.resolved ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        ) : <NotFound />}
      </div>
    </div>
  );
}

export default App;
