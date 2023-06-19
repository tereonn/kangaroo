// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
import { TestDto } from '@kangaroo/types';
import styles from './app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const [data, setData] = useState('loading');
  useEffect(() => {
    fetch('http://localhost:3000/api?foo=hello')
      .then((resp) => resp.json())
      .then((data: TestDto) => {
        setData(data.foo);
      });
  }, []);
  return (
    <div>
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
              Current data: {data}
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;