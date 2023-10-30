import { useState } from 'react';
import './App.css';

function App() {
  const [tasks,setTasks]=useState([])
  const [task,setTask]=useState("")

  const addTasks =()=>{
    if(task!==""){
      setTasks([...tasks,task])
      setTask("");
  }
    }
    const deleteTasks=(index)=>{
      const updatedList =[...tasks]
      // delete updatedList[index];
      updatedList.splice(index,1)
      setTasks(updatedList)
    }
    const editTasks =(index)=>{
      const editList=[...tasks]
      editList.splice(index,1)
      setTasks(editList)
    }
    
  return (
    <div className='flex flex-col items-center'>
   
       <h1 className='font-bold m-14 text-4xl' >Simple Todo App</h1>
    <div className='p-9 '>
      <input type='text' className='border m-4 p-3 bg-slate-100 rounded shadow' value={task} onChange={(e)=>{setTask(e.target.value);
      }}
      placeholder='Add new list'/>
      <button onClick={addTasks} className='bg-green-500 text-white p-3 m-3 rounded-lg hover:bg-green-700'>Add list</button>
    </div>
      <div>
        {tasks?.length > 0 ?(
            <ul>
               {
                tasks.map((task,index)=>(
                  <div className='flex bg-slate-100 m-4 py-4 pl-12 pr-12 rounded ' key={index}>
                    <li className='self-center font-semibold pr-10 mr-3 grow'>{task}</li>
                    <button onClick={()=>{deleteTasks(index)}} className=' fill-red-600'><i class="fa-solid fa-trash"></i></button>
                    <button onClick={()=>{editTasks(index)}} className=' fill-red-600'><i class="fa-solid fa-edit m-6 grow"></i></button>

                    </div>
                  
                 
                  
                ))
               }
            </ul>
        ):(
          
          <div>
                    <p> No tasks found </p>
          </div>
         
          

        )}
      </div>
    </div>
  );
}

export default App;
