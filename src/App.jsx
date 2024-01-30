// // const { useState } = require("react");
//  import React,{useState} from "react";
//  import "./App.css" ;
// export default function App(){

//     const [todos,setTodos]=useState([]);
//     const [input, setInput] = useState('');

//     const handelerchange = (e) =>{
//         setInput(e.target.value);
//     }

//     const addTodo = () => {
//         if(input !==""){
//             setTodos(
//                 [
//                     ...todos,
//                     input
//                 ]
//             )
//             setInput('');
//         }
//     }

//     const Delete = (index) =>{

//         const newTodos = [...todos];
//         newTodos.splice(index,1);
//         setTodos(newTodos);

//     }

//     return(
//         <div className="App">
//             <div className="box1"><h1>ToDoList</h1></div>
//             <div className="todo-container">
//                 <input type="text" value={input} onChange={handelerchange} placeholder="Add a new task"/>
//                 <button onClick={addTodo}>Add</button>
//             </div>
//             <ul className="todolist" >
//                 {todos.map((todo,index)=>(
//                     <li key={index} >
//                         {todo}
//                         <button onClick={() => Delete(index)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [editIndex, setEditIndex] = useState(null);

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTodo = () => {
//     if (inputValue !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

//   const handleEditTodo = (index) => {
//     setEditIndex(index);
//     setInputValue(todos[index]);
//   };

//   const handleSaveTodo = () => {
//     const newTodos = [...todos];
//     newTodos[editIndex] = inputValue;
//     setTodos(newTodos);
//     setInputValue('');
//     setEditIndex(null);
//   };

//   return (
//     <div className="App">
//       <h1>To-Do List</h1>
//       {editIndex !== null ? (
//         <div className="todo-container">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Edit task"
//           />
//           <button onClick={() => handleSaveTodo()}>Save</button>
//         </div>
//       ) : (
//         <div className="todo-container">
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             placeholder="Add a new task"
//           />
//           <button onClick={handleAddTodo}>Add</button>
//         </div>
//       )}
//       <ul className="todo-list">
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => handleDeleteTodo(index)}>Delete</button>
//             <button onClick={() => handleEditTodo(index)}>Edit</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////////////////////////////////////

import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editValue, setEditValue] = useState(''); // وضعیت جدید برای ویرایش تسک ها

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEditTodo = (index, todo) => { // تابع برای ویرایش تسک
    setEditValue(todo); // مقدار متن تسک برای ویرایش را ذخیره می‌کنیم
    handleDeleteTodo(index); // تسک را از لیست حذف می‌کنیم
  };

  const handleSaveTodo = () => { // تابع برای ذخیره ویرایش تسک
    if (editValue !== '') {
      setTodos([...todos, editValue]); // ویرایش شده را به لیست اضافه می‌کنیم
      setEditValue(''); // مقدار ویرایش را بر می‌گردانیم به حالت اولیه
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleEditTodo(index, todo)}>Edit</button> {/* دکمه برای ویرایش تسک */}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {editValue && (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSaveTodo}>Save</button>
        </div>
      )}
    </div>
  );
}

export default App;



















                                        // ***************** part 5 ***************
// import { useState } from "react"
// export default function Main(){
//   const [data, setData] = useState([])

//   useEffect(()=>{
//       fetch('https://randomuser.me/api/?results=20')
//       .then(res => res.json())
//       .then(para =>{
//           setData(para.results)
//       })

//   }, [])

//   return(
//       <div className="container">
//           <h1>hello</h1>
//           <ul>
//               {data.map(function(val){
//                   return <li>{val.gender}</li>
//               })}
//           </ul>
//       </div>
//   )
// }



                                // ********************* part5 tamrin **********************
// import { useState } from "react";

// export default function Main(){
//   const [data, setData] = useState([])

//   useEffect(()=>{
//       fetch('https://randomuser.me/api/?results=20')
//       .then(res => res.json())
//       .then(para =>{
//           setData(para.results)
//       })

//   }, [])

//   return(
//       <div className="container">
//           <h1>hello</h1>
//           <ul>
//               {data.map(function(val){
//                   return <li>{val.gender}</li>
//               })}
//           </ul>
//       </div>
//   )
// }



                                        // ******************** part4 tamrin ***********************

// import { useState } from "react";


// export default function Main(){
//     const [fullName, setFullName] = useState('ahmad hassan zadeh')
//     return(
//         <div className="row">
//             <h1>wlc to prop</h1>
//             <Para3 name={fullName} />
//         </div>
//     )
// }

// function Para3({name}){
//     return(
//         <Para2 name={name}/>
//     )
// }

// function Para2({name}){
//     return(
//         <>
//             <Para1 name={name} />
//         </>
//     )
// }


// function Para1({name}){
//     return(
//         <div className="row">
//             <h2>{name}</h2>
//         </div>
//     )
// }


                                            // ****************** prop part3 tamrin*****************

// export default function Main({fullName , age}){
//     return(
//         <div className="row">
//             <h1>{fullName} : {age}</h1>
//         </div>
//     )
// }



                                                      // ************************* part2 tamrin **********************
//     export default function Main(){

//       const [data,setData]=useState('yasaman joon')

//       function para(){

//         setData('yalda kosholooo')
//       }
//       return(
//     <div className="row">
//       <button onClick={para}>Click to change</button>
//       <h1>{data}</h1>
//     </div>
//       )
// }

                                                         //  *************************  part1 tamrin *********************


// export default function Main(){

//     const [data,useData]= useState('yasi')
//     const [name,useName]= useState(['yasaman','samin','mobina'])
//     const [para,usePara]= useState({
//       name: 'yas',
//       age:18
//     })

//     const [yas,setYas]=useState(
//       [
//         {
//         id:1,
//         title:"sample text 1"
//       },
//         {
//         id:2,
//         title:"sample text 2"
//       },
//         {
//         id:3,
//         title:"sample text 3"
//       },
//         {
//         id:4,
//         title:"sample text 4"
//       }
//     ]
//     )
//     return(
//       <div className="row">
//         <h1> may name is : {data}</h1>
//         <h1> {name[2]} - {name[0]}</h1>
//         <h3>
//           {
//             name.map(function(val){
//               return(
//                 <em> { val }</em>
//               )
//             })
//           }
//         </h3>
//         <h1>{para.name} - {para.age}</h1>
//         <h2>
//         {
//             name.map((val)=>{
//               return(
//                 <em> { val }</em>
//               )
//             })
//           }
//         </h2>

//         <ul>
//           {yas.map(function(val){
//             return(
//               <li> {val.id} - {val.title}</li>
//             )
//           })}
//         </ul>
//       </div>
//     )
// }