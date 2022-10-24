import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from './components/App';
import { CarritoProvider } from './context/carritoContext';
// import "./utilities/cargaBDD.js"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CarritoProvider>
        <App />
    </CarritoProvider>
    
);


