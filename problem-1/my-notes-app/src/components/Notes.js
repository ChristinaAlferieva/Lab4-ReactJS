import React from 'react';

function Notes({element}) {
    console.log(element)
    const removeHandler = (id) => {
        
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="card-body" style={{textTransform:"capitalize"}}>
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.desc}</p>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
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