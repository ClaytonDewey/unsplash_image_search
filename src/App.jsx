import { Form } from 'react-bootstrap';
import './index.css';
import { useRef } from 'react';

const App = () => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('submitted');
  };

  return (
    <div className='container'>
      <h1 className='title'>Image Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Type something to search...'
            className='search-input'
            ref={searchInput}
          />
        </Form>
      </div>
    </div>
  );
};

export default App;

/* 
https://www.freecodecamp.org/news/how-to-build-an-image-search-app-using-react/
Here, we have added <Form onSubmit={handleSearch}> and inside the handleSearch method we used the event.preventDefault method.
*/
