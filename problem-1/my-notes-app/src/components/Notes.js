import React from 'react';

function Notes() {
    return (
        <div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                    </button>
                    <button className="btn btn-danger mx-2">Remove</button>
                </div>
            </div>
        </div>
    )
}

export default Notes;