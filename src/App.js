import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './Nav';
import List from './List';
import AddBooks from './AddBooks';
import axios from 'axios';

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    const url = "http://localhost:3000/books"

    await  axios.get(url).then((result) => setState(result))
  }
  return (
    <div className="App">
      <Nav/>
      <div className='app-body'>
        <List state={state} />
        <AddBooks/>

      </div>
    </div>
  );
}

export default App;
