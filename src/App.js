import React from "react";
import { Button } from "react-bootstrap";
import FormBlock from "./components/FormBlock/FormBlock";
import ListBlock from "./components/ListBlock/ListBlock";
import StatusBlock from "./components/StatusBlock/StatusBlock";
import './style.css';

function App() {
   return (
      <div className="App">
         <div className="container">
            <div className="App__content">
               <h1 className="App__title">TODO-LIST</h1>
               <StatusBlock/>
               <FormBlock/>
               <ListBlock/>
               <p className="App__clear">Clear All</p>
            </div>
         </div>
      </div>
   );
}

export default App;
