import { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './screen/Counter';
import Login from './screen/Login';
import { Note } from './screen/Note';
export class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path='login' element={<Login />} />
          <Route path='counter' element={<Counter message={`The Count Value is `} />} />
          <Route path='note' element={<Note />} />
        </Routes>
        <nav>
          <ul>
            <h1>React with TypeSript </h1>
            <li>
              <Link style={{ fontSize: '24px' }} to="counter">Counter</Link>
            </li>
            <li>
              <Link style={{ fontSize: '24px' }} to="login">Login</Link>
            </li>
            <li>
              <Link style={{ fontSize: '24px' }} to="note">Notes</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}