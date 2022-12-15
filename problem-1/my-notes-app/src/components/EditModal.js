import React from 'react';

function EditModal() {
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
                  <input type="text" className="form-control" id="edittitle" placeholder="Enter your title" />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Description</label>
                  <textarea name="editdesc" id="desc" rows="3" className="form-control" placeholder="Enter your description"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Edit Note</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditModal;