import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>404: Page not found.</h1>
      <p>
        I'm sorry, it appears you have wandered off too far, there is nothing
        here!
      </p>
      <Link to={`/reviews`}>
        <button className='redirect'>Take me back!</button>
      </Link>
    </div>
  );
};

export default NotFound;
