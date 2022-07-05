import React from 'react';
import './listBlock.css';
import {AiFillTag} from 'react-icons/ai';
import { MdDelete } from "react-icons/md";

const ListBlock = ({tasks}) => {
   return (
      <ul className='list'>
         {
            tasks.map((task) => (
               <li className='item' key={task.id}>
            <div className='itemLeft'>
               <p>{task.title}</p>
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
                  <input type="checkbox" />
                  <div className='actionDelete'>
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