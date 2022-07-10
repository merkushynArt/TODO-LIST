import React, { useState } from "react";
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

   return (
      <div className="App">
         <div className="container">
            <div className="App__content">
               <h1 className="App__title">TODO-LIST</h1>
               <StatusBlock tasks={tasks} />
               <FormBlock setTasks={setTasks} tasks={tasks} />
               <ListBlock setTasks={setTasks} tasks={tasks}/>
               <p className="App__clear">Clear All</p>
            </div>
         </div>
      </div>
   );
}

export default App;
