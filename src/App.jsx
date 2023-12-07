import { useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid';
import './App.css'

function App() {
  const initialFunction = () => {
    const initialTaskList = localStorage.getItem("tasks");
    if(initialTaskList === null){
      const initialItem = JSON.stringify([])
      localStorage.setItem("tasks", initialItem)
      return []
    }
    return JSON.parse(initialTaskList)
  }

  const inputRef = useRef(null);
  const [taskName, setTaskName] = useState(null);
  const [taskList, setTaskList] = useState(initialFunction);
  const mappedTaskList = taskList.map(item => <li className='flex justify-between px-6 py-3' key={item.id}>
                                                <div className='flex gap-4 items-center'>
                                                  <button className='p-2 border border-darkGrayishBlue2 rounded-full'>
                                                    <img className='invisible' src="./src/assets/icon-check.svg" alt=" "/>
                                                  </button>
                                                  <p className='text-lightGrayishBlue1'>{item.name}</p>
                                                </div>
                                                <button>
                                                  <img src="./src/assets/icon-cross.svg" alt=" "/>
                                                </button>
                                              </li>);

  const updateStorage = (newJson) => {
    localStorage.setItem("tasks", newJson);
  }
  
  const taskHandler = (e) => {
    if(e.key === "Enter" && taskName !== null){
      const taskObject = {
                            id: nanoid(),
                            name: taskName,
                            isActive: true,                      
      }
      setTaskName(null);
      setTaskList([...taskList, taskObject]);
      inputRef.current.value = " ";
    }
  }

  useEffect(()=>{
    const newJson = JSON.stringify(taskList);  
    updateStorage(newJson)
  })

  return (
    <>
      <div className='relative py-12 w-10/12 md:w-6/12'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl text-white tracking-letterSpacing1 font-bold'>TODO</h1>
          <img className='relative -top-0.5' src="./src/assets/icon-sun.svg" alt=" "/>
        </div>
        <div className='flex gap-4 px-6 py-3 bg-darkGrayishBlue3 rounded'> 
          <button className='p-2 border border-darkGrayishBlue2 rounded-full'>
              <img className='invisible' src="./src/assets/icon-check.svg" alt=" "/>
          </button>
          <input className='text-lg text-lightGrayishBlue1 bg-transparent' type="text" placeholder='Create a new todo...' ref={inputRef} onChange={(e)=>{setTaskName(e.target.value)}} onKeyDown={(e)=>{taskHandler(e)}}/>
        </div>
        <div className='mt-4'>
          <div className='absolute flex flex-col justify-between w-full -bottom-100'>
            <ul className='rounded-t divide-y divide-darkGrayishBlue2 bg-darkGrayishBlue3'>{mappedTaskList}</ul>
            <div className='flex justify-between px-6 py-3 text-darkGrayishBlue1 bg-darkGrayishBlue3 border-t border-t-darkGrayishBlue2 rounded-b'>
              <p>items left</p>
              <button>Clear Completed</button>              
            </div>
            <div className='flex justify-center gap-4 px-6 py-3 mt-4 text-darkGrayishBlue1 font-bold bg-darkGrayishBlue3 rounded'>
              <button>All</button>
              <button>Active</button>
              <button>Completed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
