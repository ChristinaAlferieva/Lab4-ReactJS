import React from 'react';
import Notes from './components/Notes';
import EditNote from './components/EditNote';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  //useStates
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [note, setNote] = useState(getNotesFromLS)
  const [editId, setEditId] = useState("")

  //Put the notes into local storage
  localStorage.setItem("note", JSON.stringify(note))

  //Add the edit note and from pages to the home page
  return (
    <div style={body}>
      <EditNote editId={editId} note={note} setNote={setNote} />
      <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription} note={note} setNote={setNote} />
      <div className="row justify-content-left" style={{padding: "50px"}}>
        <div className="col-md-6">
          <div className="my_notes">
            <br></br>
            <hr className="line" style={lineBreak}></hr>
            {/* Dispplays all the notes and displays message if no notes have been added */}
            <h2 style={heading}>My Notes</h2>
            {
              note.length === 0 ? <div className="noteDetails">
                <div className="card-body">
                  <p className="card-text">No notes available yet</p>
                </div>
              </div> : note.map((element) => {
                return (
                  <Notes element={element} key={element.id} note={note} setNote={setNote} setEditId={setEditId} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
  //Gets the notes from local storage
  function getNotesFromLS() {
    const notes = JSON.parse(localStorage.getItem("note"));

    if (notes) {
      return notes
    } else {
      return [];
    }
  }
}

//CSS for the main page
const body = {
  background: "#fff0f5",
  fontSize: "18px"
}

const heading = {
  fontWeight: "bold",
  fontStyle: "italic",
  fontSize: "40px"
}

const lineBreak = {
  borderTop: "3px solid #bbb"
}

export default App;