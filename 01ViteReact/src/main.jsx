import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <>
        <div>
            <h1>Custom app !</h1>
        </div>
         </>
    )
}

// const ReactElement = {
//     type : 'a',
//     props : {
//         href: 'https://www.amazon.in',
//         target : '_blank'
//     },
//     children: 'Click me to visit amazon'
// }

const anotherUser = "Xander Viskoii"

const ReactElement = React.createElement( //Syntax of React is predefined
    'a', //tag
    {href: "https://www.google.com", target: "_blank"}, //Giving properties in object without name
    'Click me to visit google', //Writing text
    anotherUser
)



const anotherElement = (
    <a href="https://www.google.in" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
//    anotherElement,
   ReactElement
//    <> 
//      <MyApp />,
//      <App /> 
//   </> 
   
//    MyApp()
//    ReactElement
    
  
)
