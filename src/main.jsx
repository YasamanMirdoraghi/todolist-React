
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




                                                 //  ********************** part3 ***********************
// import React from "react";
// import ReactDOM from "react-dom";
// // import Temp from './App'

// const data = {
//     name:'ali ',
//     age : 20,
//     lname : 'alianee'
// }

// function Main({fullName, age}){
//     return(
//         <div className="row">
//             <h1>{fullName} : {age}</h1>

//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quibusdam?</p>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Main fullName='parsa ghorbanian' age='20'/>)









                                  // ******************** part2 *********************
// import React from "react";
// import ReactDOM from "react-dom";
// // import Temp from './App'

// const data = {
//     name:'ali ',
//     age : 20,
//     lname : 'alianee'
// }

// function Main(prop){
//     return(
//         <div className="row">
//             <h1>{prop.name1}</h1>
//             <h1>{prop.lname}</h1>
//             <h1>{prop.age}</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quibusdam?</p>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Main name1={data.name} lname={data.lname} age={data.age}/>)



                                                                // ******************** part1 ********************
// import React from "react";
// import ReactDOM from "react-dom";
// // import Temp from './App'


// function Main(prop){
//     return(
//         <div className="row">
//             <h1>{prop.fullName}</h1>
//             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quibusdam?</p>
//         </div>
//     )
// }


// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Main fullName='parsa ghorbanian' />)