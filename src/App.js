import React from 'react'
import Comp01_Tsk05 from './tsk05-comp01'
import Tsk06_Comp01 from './Tsk06_Comp01';

function App() {
  const task_02=()=>{
    return "Hello World";
  }
const mobile=['samsung','htp','Micromax','Apple'];
const mobilelist=mobile.map((item)=><li>{item}</li> );

const mobileOs=['Android','Balckberry','iphone','windows phone'];
const mobilelist_1=mobileOs.map((item)=> <li>{item}</li>);
function Task_04(props){
  return <h3>Hello, {props.name}</h3>
}
const element=<Task_04 name="Lucky"/>
  return (
    <div>
        <h2>Task_01</h2>
        <p>Q1. a. Make a functional component as a child of App.js and print Hello world!. Try using named and default exports.</p>
        <h3>Hello World</h3>
        <hr />
        <h2>Task 02</h2>
        <p>Q2. b. Do the same using arrow functions.</p>
        <p><h3>{task_02()}</h3></p>
        <hr />
        <h2>Task 03</h2>
        <p>Q3. Print the following data with two components MobileOS and MobileManufacturers using functional components.</p>
        <h3>Mobile-manufacture</h3>
        <p>{mobilelist}</p>
        <h3>mobile-os</h3>
        <p>{mobilelist_1}</p>
        <hr />
        <h2>Task 04</h2>
        <p>Q4. c.  Make a functional component as child of App.js and pass your name as prop, then "Hello "name" must be printed.</p>
        <p>{element}</p>
        <hr />
        <h2>Task 05</h2>
        <p>Q5. Make the following component structure using functional components.</p>
        <p><Comp01_Tsk05/></p>
        
        <hr />
      <h2>Task 06</h2>
      <p>Q6. Make the component structure as given in the attachment.</p>
      <p><Tsk06_Comp01/></p>
      <hr />
      
    </div>
  );
}

export default App;