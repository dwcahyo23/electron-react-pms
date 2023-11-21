import React from 'react'
import ReactDOM from 'react-dom/client'
// import './assets/index.css'
// import './styles/app-components.css'
// import './styles/app-base.css'
// import './styles/app-utilities.css'
// import './styles/main.css'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
