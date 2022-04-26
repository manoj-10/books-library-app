import axios from 'axios';
import React, { useState } from 'react';
import './AddBooks.css';

function AddBooks(){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [genre, setGenre] = useState("")
    const [summary, setSummary] = useState("")

    const addBook = () => {
        let formJSON = {
            title: title,
            author: author,
            genre: genre,
            summary: summary
        }
        const url = "http://localhost:3000/books"
        axios.post(url, formJSON).then((res)=> console.log(res)).catch(err => console.log(err))
    }
    return(
        <div className='addBooks'>
            <h1> Add Books </h1>
            <form>
                <label className='addBooks_label'>Title:</label>
                <br/>
                <input type='text' className='addBooks_input' value={title} onChange={e => setTitle(e.target.value)}/>
                <br/>
                <label className='addBooks_label'>Author:</label>
                <br/>
                <input type='text' className='addBooks_input' value={author} onChange={e => setAuthor(e.target.value)}/>
                <br/>
                <label className='addBooks_label'>Genre:</label>
                <br/>
                <input type='text' className='addBooks_input' value={genre} onChange={e => setGenre(e.target.value)}/>
                <br/>
                <label className='addBooks_label'>Summary:</label>
                <br/>
                <input type='text' className='addBooks_input' value={summary} onChange={e => setSummary(e.target.value)}/>
                <br/>
                <button onClick={addBook} type='submit' className='addBook_button'>Add Book</button>
            </form>
        </div>
    )
}

export default AddBooks;