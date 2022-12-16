import React from 'react';
import Form from './components/Form';
import Notes from './components/Notes';
import EditNote from './components/EditNote';
import { useState } from 'react';

export default function App() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [note, setNote] = useState(getNotesFromLs)
  const [editId, setEditId] = useState("")

  localStorage.setItem("note", JSON.stringify(note))

  return (
    <div>
      <EditNote editId={editId} note={note} setNote={setNote}/>
      <Form title={title} setTitle={setTitle} description={description} setDescription={setDescription} note={note} setNote={setNote} />
      <div className="note_details">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <br></br>
            <h1 className="mb-3">Your Notes</h1>
            {
              note.length === 0 ? <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Notes</h5>
                  <p className="card-text">No notes available</p>
                </div>
              </div> : note.map((element) => {
                return (
                  <Notes element={element} key={element.id} note={note} setNote={setNote} setEditId={setEditId}/>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
  function getNotesFromLs() {
    const notes = JSON.parse(localStorage.getItem("note"));

    if(notes) {
      return notes
    }else {
      return [];
    }
  }
}
