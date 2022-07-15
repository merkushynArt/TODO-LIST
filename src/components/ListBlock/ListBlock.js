import React from 'react';
import './listBlock.css';
import {AiFillTag} from 'react-icons/ai';
import { MdDelete } from "react-icons/md";

const ListBlock = ({tasks, setTasks, status}) => {

   const delTask = (id) => {
      setTasks(tasks.filter((elem) => {
         return id!== elem.id
      }))
   }

   const successHandler = (id) => {
      setTasks(tasks.map((el) => {
         if(el.id === id) {
            return {...el, success: !el.success, pending: !el.pending}
         } else {
            return el
         }
      }))
   };

   return (
      <ul className='list'>
         {
            tasks.filter((task) => {
               if(status === 'Pending') {
                  return task.pending
               } else if(status === 'Success') {
                  return task.success
               } else {
                  return task
               }
            }).map((task) => (
               <li className='item' style={{opacity: task.success ? '50%' : '100%'}} key={task.id}>
                  <div className='itemLeft'>
                     <p style={{textDecoration: task.success ? 'red line-through' : 'none'}}>{task.title}</p>
                  </div>
                  <div className='itemRight'>
                     <div className='priority'>
                        <div className='priorityCircle' style={{background: 'red'}}></div>
                        <span>{task.priority} priority</span>
                     </div>
                     <div className='date'>
                        <div className='dateIcon'>
                           <AiFillTag/>
                        </div>
                        <span>{task.date}</span>
                     </div>
                     <div className='action'>
                        <input type="checkbox" checked={task.success} onChange={() => successHandler(task.id)}/>
                        <div className='actionDelete' onClick={() => delTask(task.id)}>
                           <MdDelete/>
                        </div>
                     </div>
                  </div>
               </li>
            ))
         }
      </ul>
   )
}

export default ListBlock