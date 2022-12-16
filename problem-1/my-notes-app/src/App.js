import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Notes from './components/Notes';
import EditModal from './components/EditModal';

export default function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [note, setNote] = useState(getNotesFromLs)

  localStorage.setItem("note", JSON.stringify(note))

  return (
    <div>
      <EditModal />
      <NavBar />
      <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} note={note} setNote={setNote} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">Your Notes</h1>
            {
              note.length === 0 ? <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Message</h5>
                  <p className="card-text">No notes available.</p>
                </div>
              </div> : note.map((element) => {
                return (
                  <Notes element={element} key={element.id} note={note} setNote={setNote}/>
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
