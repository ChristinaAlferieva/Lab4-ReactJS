import React from 'react';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Notes from './components/Notes';
import EditModal from './components/EditModal';

export default function App() {
  return (
    <div>
      <EditModal />
      <NavBar/>
      <Form />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">Your Notes</h1>
            <Notes />
          </div>
        </div>
      </div>
    </div>
  )
}
