import React from 'react';

function Form({ title, setTitle, description, setDescription, note, setNote }) {
    const inputDetailsHandler = (e) => {
        if (e.target.id === "title") {
            setTitle(e.target.value)
        } else {
            setDescription(e.target.value)
        }
    }

    const addNoteHandler = (e) => {
        e.preventDefault()
        if (title !== "" && description !== "") {
            setNote((note) => {
                return (
                    [...note, {
                        title: title,
                        description: description,
                        id: new Date()
                    }]
                )
            })
        }
        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <div className="note_details" style={body}>
                <div className="row justify-content-left" style={{padding: "50px"}}>
                    <div className="col-md-6">
                        <h2 style={heading}>Create a new note</h2>
                        <form>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title:</label>
                                <input type="text" className="form-control" id="title" value={title} onChange={inputDetailsHandler} />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description:</label>
                                <textarea name="description" id="description" rows="3" className="form-control" value={description} onChange={inputDetailsHandler}></textarea>
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
                            <button type="submit" className="btn" style={btnstyle} onClick={addNoteHandler}>Add Note</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

const btnstyle =  {
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

const body = {
    background: "#fff0f5",
    fontSize: "18px"
}

const heading = {
    fontWeight: "bold",
	fontStyle: "italic",
    fontSize: "40px"
}

export default Form;