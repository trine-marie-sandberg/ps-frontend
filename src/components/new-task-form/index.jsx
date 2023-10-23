import { useState, useEffect } from 'react';

export function TaskForm(show) {

    const [title, setTitle] = useState('');
    const [descriptions, setDescription] = useState('');
    const [urls, setUrls] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [deadline, setDeadline] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleSubmit = async (event) => {

      event.preventDefault();
      const newTask = {
        title,
        descriptions,
        category,
        deadline,
        author,
        urls,
        price
      }
      const postOptions = {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: {
            'Content-Type': 'application/json'    
        }
      }
      const response = await fetch("http://10.0.0.68:5000/add/", postOptions);
      const json = await response.json();
      // console.log(`THE RETURN OBJECT: ${json}`)

      setTitle("");
      setDescription("");
      setCategory("");
      setDeadline("");
      setAuthor("");
      setUrls("");
      setPrice(0);
    };

    function close() {
      const formContainer = document.getElementById("form-container");
      const form = document.getElementById("new-task-form");
      form.style.display = "none";
      formContainer.style.display = "none";
    }
  
    return (
      <form onSubmit={handleSubmit} id='new-task-form'>
        <p onClick={close} className='close-btn'>Close X</p>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={descriptions}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="deadline">Deadline:</label>
          <input
            type="date"
            id="deadline"
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
          />
        </div>
  
        <div className="form-field">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="urls">Urls:</label>
          <input
            type="text"
            id="urls"
            value={urls}
            onChange={(event) => setUrls(event.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
  
        <button type="submit">Submit</button>
      </form>
    );
  }