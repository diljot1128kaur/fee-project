import React, { useState } from 'react';
import './App.css';


function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div className="container">
      <h1 className="title">Notes App</h1>
      <div className="input-container">
        <input
          className="note-input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your note"
        />
        <button className="add-button" onClick={handleAddNote}>Add Note</button>
      </div>
      <ul className="notes-list">
        {notes.map((note, index) => (
          <li className="note-item" key={index}>
            <span>{note}</span>
            <button className="delete-button" onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;