import React from 'react';

function EditNote({ editId, note, setNote }) {
  const updateHandler = () => {
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
    console.log(updateNote);
    setNote(updateNote);
  }

  return (
    <div>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">EditNotes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="editTitle" placeholder="Enter your title" />
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">Description</label>
                  <textarea id="editDescription" rows="3" className="form-control" placeholder="Enter your description"></textarea>
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
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandler}>Edit Note</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditNote;