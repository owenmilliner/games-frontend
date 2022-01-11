import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Reviews from './components/Reviews';
import ExpandedReview from './components/ExpandedReview';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
        </style>
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
