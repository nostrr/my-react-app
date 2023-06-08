import React from 'react';
import './App.css';
import logo from "./logo.svg";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello french.cafe :)!
                </p>
            </header>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <div className="App">
                <Outlet/>
            </div>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            }
        ]
    }
])

const App = () => <RouterProvider router={router}/>



export default App;
