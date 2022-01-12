import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ExpandedReview from './components/ExpandedReview';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/reviews' />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route
            path='/reviews/:review_id'
            element={<ExpandedReview />}
          ></Route>
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
