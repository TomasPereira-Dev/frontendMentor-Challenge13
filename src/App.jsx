import { useCallback, useEffect, useRef, useState } from 'react'
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
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const [switcherIcon, setSwitcherIcon] = useState("./src/assets/icon-sun.svg");
  const [listCounter, setListCounter] = useState(0);
  const [listFilter, setListFilter] = useState("all");
  const newJson = JSON.stringify(taskList);

  const updateStorage = useCallback((newJson => {
    localStorage.setItem("tasks", newJson);
  }), [])

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

  const checkHandler = (itemId) => {
    const taskListCopy = taskList.slice();
    for(let i = 0; i < taskListCopy.length; i++){
      if(taskListCopy[i].id === itemId){
         if(taskListCopy[i].isActive === false){
            taskListCopy[i].isActive = true;
         }else{
            taskListCopy[i].isActive = false;
         }
      }
      setTaskList(taskListCopy);
    }
  }

  const darkModeHandler = () => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("dark");
    if(htmlElement.classList.contains("dark")){
      setSwitcherIcon("./src/assets/icon-moon.svg");
    }else{
      setSwitcherIcon("./src/assets/icon-sun.svg");
    }
  }

  const deleteHandler = (itemId) => {
    const taskListCopy = taskList.slice();
    for(let i = 0; i < taskListCopy.length; i++){
      if(taskListCopy[i].id === itemId){
        taskListCopy.splice(i, 1);
      }
    }
    setTaskList(taskListCopy)
  }

  const counterHandler = useCallback(() => {
    let counter = 0;
    for(let i = 0; i < taskList.length; i++){
      if(taskList[i].isActive === true) {
        counter++
      }
    }
    setListCounter(counter)
  }, [taskList])

  const filterHandler = useCallback(() => {
    const taskListCopy = taskList.slice();
    if(listFilter === true){
      for(let i = 0; i < taskListCopy.length; i++){
        console.log(taskListCopy[i].isActive)
        if(taskListCopy[i].isActive === false){
            taskListCopy.splice(i, 1);
            console.log(taskListCopy[i].isActive)
        }
      }
      setFilteredTaskList(taskListCopy);   
    } 
    if(listFilter === false){
      for(let i = 0; i < taskListCopy.length; i++){
        console.log(taskListCopy[i].isActive)
        if(taskListCopy[i].isActive === true){
          taskListCopy.splice(i, 1);
        }
      }
      setFilteredTaskList(taskListCopy);
    }
  },[taskList, listFilter])
 
  const mappedTaskList = taskList.map(item => 
    <li className={`flex justify-between px-6 py-3 ${item.isActive ? `no-underline` : `line-through`}`} key={item.id}>
      <div className='flex gap-4 items-center'>
        <button className='p-2 border dark:border-darkGrayishBlue2 rounded-full' onClick={() => checkHandler(item.id)}>
          <img className='invisible' src="./src/assets/icon-check.svg" alt=" "/>
        </button>
        <p className={`text-darkGrayishBlue4 dark:text-lightGrayishBlue1`}>{item.name}</p>
      </div>
      <button onClick={() => {deleteHandler(item.id)}}>
        <img src="./src/assets/icon-cross.svg" alt=" "/>
      </button>
    </li>);

    const mappedFilteredList = filteredTaskList.map(item => 
      <li className={`flex justify-between px-6 py-3 ${item.isActive ? `no-underline` : `line-through`}`} key={item.id}>
      <div className='flex gap-4 items-center'>
        <button className='p-2 border dark:border-darkGrayishBlue2 rounded-full' onClick={() => checkHandler(item.id)}>
          <img className='invisible' src="./src/assets/icon-check.svg" alt=" "/>
        </button>
        <p className={`text-darkGrayishBlue4 dark:text-lightGrayishBlue1`}>{item.name}</p>
      </div>
      <button onClick={() => {deleteHandler(item.id)}}>
        <img src="./src/assets/icon-cross.svg" alt=" "/>
      </button>
    </li>);
    

  useEffect(() => {  
    updateStorage(newJson)
    counterHandler()
    filterHandler()
    
  },[filterHandler, counterHandler, updateStorage, newJson])

  return (
    <>
      <div className='relative py-12 w-10/12 md:w-6/12'>
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl text-white tracking-letterSpacing1 font-bold'>TODO</h1>
          <button onClick={darkModeHandler}>
            <img className='relative -top-0.5' src={switcherIcon} alt= " "/>
          </button>
        </div>
        <div className='flex gap-4 px-6 py-3 bg-lightGray1 dark:bg-darkGrayishBlue3 rounded'> 
          <button className='p-2 border dark:border-darkGrayishBlue2 rounded-full'>
              <img className='invisible' src="./src/assets/icon-check.svg" alt=" "/>
          </button>
          <input className='relative top-0.5 w-full text-lg text-darkGrayishBlue4 dark:text-lightGrayishBlue1 bg-transparent outline-none caret-brightBlue caret' type="text" placeholder='Create a new todo...' ref={inputRef} onChange={(e)=>{setTaskName(e.target.value)}} onKeyDown={(e)=>{taskHandler(e)}}/>
        </div>
        <div className='mt-4'>
          <div className='absolute flex flex-col justify-between w-full -bottom-100'>
            <ul className='bg-lightGray1 dark:bg-darkGrayishBlue3 divide-y dark:divide-darkGrayishBlue2 rounded-t'>{listFilter === "all" ? mappedTaskList : mappedFilteredList}</ul>
            <div className='flex justify-between px-6 py-3 text-darkGrayishBlue1 bg-lightGray1 dark:bg-darkGrayishBlue3 border-t dark:border-t-darkGrayishBlue2 rounded-b'>
              <p>{`${listCounter} items left`}</p>
              <div className='hidden md:flex md:gap-2'>
                <button onClick={() => setListFilter("all")}>All</button>
                <button onClick={() => setListFilter(true)}>Active</button>
                <button onClick={() => setListFilter(false)}>Completed</button>
              </div>
              <button>Clear Completed</button>              
            </div>
            <div className='flex justify-center gap-4 px-6 py-3 mt-4 text-darkGrayishBlue1 font-bold bg-lightGray1 dark:bg-darkGrayishBlue3 rounded md:hidden'>
              <button onClick={() => setListFilter("all")}>All</button>
              <button onClick={() => setListFilter(true)}>Active</button>
              <button onClick={() => setListFilter(false)}>Completed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
