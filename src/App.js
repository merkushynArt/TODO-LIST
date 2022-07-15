import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import FormBlock from "./components/FormBlock/FormBlock";
import ListBlock from "./components/ListBlock/ListBlock";
import StatusBlock from "./components/StatusBlock/StatusBlock";
import './style.css';


function App() {
   const [tasks, setTasks] = useState([
      {
         id: 1,
         title: 'Сходить в магазин',
         priority: 'medium',
         date: 'jul 19',
         success: false,
         pending: true,
         tags: ['home'],
         description: ''
      }
   ]);

   const [status, setStatus] = useState('Total');

   return (
      <div className="App">
         <div className="container">
            <div className="App__content">
               <h1 className="App__title">TODO-LIST</h1>
               <StatusBlock tasks={tasks} setStatus={setStatus}/>
               <FormBlock setTasks={setTasks} tasks={tasks} />
               {
                  tasks.length === 0 && status === 'Total' ? <p>Список задач пуст</p> 
                     : tasks.filter(el => el.pending).length === 0 && status === 'Pending' ?
                        <p>Список ожидающих задач пуст</p>
                     : tasks.filter((el) => el.success).length === 0 && status === 'Success' ?
                        <p>Список выполненых задач пуст</p>
                     :
                     <>
                        <ListBlock status={status} setTasks={setTasks} tasks={tasks} setStatus={setStatus} />
                        <p className="App__clear" onClick={() => setTasks([])}>
                           Clear All
                           <MdDelete/>
                        </p>
                     </>
                  
               }
               
            </div>
         </div>
      </div>
   );
}

export default App;
