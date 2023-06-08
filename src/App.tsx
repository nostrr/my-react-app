import React from 'react';
import './App.css';
import logo from "./logo.svg";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";



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

function MainPage() {
  return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Hello french.cafe :)!
          </p>
          <div>
            {/*<Link className="button" to="books">Books</Link>*/}
            {/*<FormButton/>*/}
          </div>
        </header>
      </div>
  );
}

export default App;
