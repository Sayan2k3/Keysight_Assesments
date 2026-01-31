import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import MyErrorBoundary from './ErrorBoundary';
// import Form from './form';
// import UncontrolledForm from './uncontrolform';
import { fragment } from 'react';

ReactDOM.render(<fragment><App /></fragment>,document.getElementById('root'));



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// //import App from './App';
 
// function Books(props){
//     const left = (
//         <ul>
//             {books.map((book) =>
//                 <li key={book.id}>
//                   {book.title}
//                 </li>
//             )}
//             </ul>
//     
//     const right =  books.map((book) =>
//         <div key={book.id}>
//          <h2> {book.title} </h2>
//          <p>{book.content} </p>
//         </div>
//     )
//     return(
//         <div>
//             <div>{left} </div>
//             <br/>
//             <div>{right} </div>
//         </div>
//     )
// }
// const books = [
//     {
//         id:1,
//         title:"ABC",
//         content:"fiction book"
//     },
//     {
//         id:2,
//         title:"XYZ",
//         content:"mystrry book"
//     },
//     {
//         id:3,
//         title:"MNP",
//         content:"fiction book"
//     }
// ]
 
// ReactDOM.render(
//   <Books books={books} />,document.getElementById("root")
// );
 

