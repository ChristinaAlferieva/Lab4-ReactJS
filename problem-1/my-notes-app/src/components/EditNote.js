import React from 'react';

function EditNote({ editId, note, setNote }) {
  //Allows the user to edit the note
  const updateNoteHandler = () => {
    const updateNote = note.map((element) => {
      if (editId === element.id) {
        return ({
          ...element, title: document.getElementById("editTitle").value,
          description: document.getElementById("editDescription").value
        })
      } else {
        return element;
      }
    })
    setNote(updateNote);
  }

  //The note form opens a window to allow the user to update the note
  return (
    <div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">Edit Note</h1>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="editTitle" />
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">Description</label>
                  <textarea id="editDescription" rows="3" className="form-control"></textarea>
                </div>
                <div className="mb-3">
                  <label for="colour" className="form-label">Colour:</label>
                  <select id="colour" name="colour">
                    <option value="pink" selected>Pink</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="green">Green</option>
                  </select>
                </div>
              </form>
            </div>
            <div>
              <button type="button" className="btn" style={editBtn} data-bs-dismiss="modal" onClick={updateNoteHandler}>Edit Note</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//CSS for the edit button
const editBtn = {
  marginLeft: "300px",
  padding: "10px 6px",
	position: "relative",
	display: "block",
	width: "120px",
	borderRadius: "6px",
	marginBottom: "18px",
	border: "0",
	background: "#ff1493",
	color: "white",
	fontSize: "14px",
	cursor: "pointer"
}

export default EditNote;