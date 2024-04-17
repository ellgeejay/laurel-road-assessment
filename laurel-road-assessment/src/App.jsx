import './App.css';
import { Routes, Route } from 'react-router-dom';
import Personal from './components/Personal';
import Education from './components/Education';
import Income from './components/Income';
import Confirmation from './components/Confirmation';
import ActiveLastBreadcrumb from './components/ActiveLastBreadcrumb';

function App() {
  return (
    <>
      <div>
        <ActiveLastBreadcrumb />
      </div>
      {/* establishing routes to traverse through in our app */}
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<Personal />}
          />
          <Route
            path='/education'
            element={<Education />}
          />
          <Route
            path='/income'
            element={<Income />}
          />
          <Route
            path='/confirmation'
            element={<Confirmation />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
