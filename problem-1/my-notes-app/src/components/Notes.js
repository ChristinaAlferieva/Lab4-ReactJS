import React from 'react';

function Notes({element, note, setNote, setEditId}) {
    const deleteNoteHandler = (id) => {
        const newNote = note.filter((element) => {
            if(element.id!==id) {
                return element;
            }
        })
        setNote(newNote)
    }

    const editNoteHandler = (id) => {
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
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.description}</p>
                    <button type="button" className="editBtn" style={editBtn} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                        editNoteHandler(element.id)
                    }}>
                        Edit
                    </button>
                    <button className="deleteBtn" style={deleteBtn} onClick={() => {
                        deleteNoteHandler(element.id)
                    }} >Delete</button>
                </div>
            </div>
        </div>
    )
}

const editBtn = {
    fontStyle: "italic",
	position: "absolute",
	height: "26px",
	left: "14px",
	lineHeight: "26px",
	cursor: "pointer",
    background: "#C0C0C0",
    border: "10px"
}

const deleteBtn = {
    fontStyle: "italic",
	position: "absolute",
	float: "right",
	top: "6px",
	right: "6px",
	cursor: "pointer",
    background: "#C0C0C0",
    border: "10px"
}
export default Notes;