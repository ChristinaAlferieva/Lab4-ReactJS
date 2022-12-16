import React from 'react';

function Notes({element, note, setNote, setEditId}) {
    console.log(element)
    const removeHandler = (id) => {
        const newNote = note.filter((element) => {
            if(element.id!==id) {
                return element;
            }
        })
        setNote(newNote)
    }

    const editHandler = (id) => {
        setEditId(id)
        note.filter((element) => {
            if(element.id===id) {
                document.getElementById("editTitle").value = element.title;
                document.getElementById("editDescription").value = element.description;
            }
        })
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="card-body" style={{textTransform:"capitalize"}}>
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                        editHandler(element.id)
                    }}>
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2" onClick={() => {
                        removeHandler(element.id)
                    }} >Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Notes;