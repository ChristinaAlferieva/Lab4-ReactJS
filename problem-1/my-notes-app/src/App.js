import React from 'react';
import Notes from './components/Notes';
import EditNote from './components/EditNote';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [note, setNote] = useState(getNotesFromLS)
  const [editId, setEditId] = useState("")

  localStorage.setItem("note", JSON.stringify(note))

  return (
    <div style={body}>
      <EditNote editId={editId} note={note} setNote={setNote} />
      <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription} note={note} setNote={setNote} />
      <div className="row justify-content-left" style={{padding: "50px"}}>
        <div className="col-md-6">
          <div className="my_notes">
            <br></br>
            <hr className="line" style={lineBreak}></hr>
            <h2 style={heading}>My Notes</h2>
            {
              note.length === 0 ? <div className="noteDetails">
                <div className="card-body">
                  <h5 className="card-title">Notes</h5>
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
  function getNotesFromLS() {
    const notes = JSON.parse(localStorage.getItem("note"));

    if (notes) {
      return notes
    } else {
      return [];
    }
  }
}

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