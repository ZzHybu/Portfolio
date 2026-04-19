import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App';
import './styles/index.css' // (or whatever your css import is)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 👇 Add the basename right here! */}
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)