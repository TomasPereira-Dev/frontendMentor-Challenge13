import { useRef, useState } from 'react'
import './App.css'

function App() {
  const storage = JSON.parse(localStorage.getItem("tasks"));

  const inputRef = useRef(null);
  const [taskName, setTaskName] = useState(null);
  const [taskList, setTaskList] = useState ([]);

  const updateStorage = () => {
    console.log(taskName)
    const newJson = JSON.stringify(taskList);
    localStorage.setItem("tasks", newJson)
  }
  
  const taskHandler = (e) => {
    if(e.key === "Enter" && taskName !== null){
      const taskObject = {
                            name: taskName,
                            isActive: true,                      
      }
      setTaskList([...taskList, taskObject])
      setTaskName(null);
      inputRef.current.value = " ";
      updateStorage();
    }
  }

  return (
    <>
    <div className='flex flex-col items-center py-12 bg-darkmode1 bg-no-repeat'>
      <div className='flex flex-col'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl text-white tracking-letterSpacing1 font-bold'>TODO</h1>
          <img className='relative -top-0.5' src="./src/assets/icon-sun.svg" alt=" "/>
        </div>
        <div className='flex gap-6 px-6 py-2 mt-6 bg-gray-500 rounded'>
          <div className='p-3 border rounded-full'>
           {/* <img src="./src/assets/icon-check.svg" alt=" "/>*/}
          </div>
          <input className='text-lg bg-transparent' type="text" placeholder='Create a new todo...' ref={inputRef} onChange={(e)=>{setTaskName(e.target.value)}} onKeyDown={(e)=>{taskHandler(e)}}/>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
