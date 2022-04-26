import axios from 'axios';
import React from 'react';
import './Card.css';

function Card({id,title,author,genre,summary}){
    const updateButton = () => {
        const url = `http://localhost:3000/books/${id}`
        axios.put(url, {title: "xyz"}).then((res) => console.log(res))
        window.location.reload()
  
    }

    const deleteButton = () => {
        const url = `http://localhost:3000/books/${id}`
        axios.delete(url).then((res) => console.log(res)).catch(err => err)
        window.location.reload()
    }

    return(
        <div className='card'>
            <h4 className='card_title'>{title}</h4>
            <div className='card_description'>
                <p>Author: {author}  </p>
                <p>Genre: {genre}  </p>
            </div>
            <p className='card_summary'>{summary}</p>
            <div className='card_buttons'>
                <button onClick={updateButton} type='submit' className='button'>Edit</button>
                <button onClick={deleteButton} type='submit' className='button'>Delete</button>
            </div>
        </div>
    )
}

export default Card