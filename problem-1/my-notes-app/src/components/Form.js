import React from 'react';

function Form() {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <form style={{border:"2px solid #ced4da", borderRadius:"10px", padding:"30px"}}>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" placeholder="Enter your title"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Description</label>
                                <textarea name="desc" id="desc" rows="3" className="form-control" placeholder="Enter your description"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Add Notes</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Form;