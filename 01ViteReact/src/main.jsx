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

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <>
    <MyApp />
    <App />
   </>
//   MyApp()
  
)
