//GET ALL notes

export const getNotes = () => {
  //return(dispatch){} - is called redux thunk
  //anytime we have a async action(in action file) like fetch, and we are using dispatch, we need a THUNK
  // returns the dispatch
  return(dispatch) => {
    fetch('/api/notes')
      .then( res => res.json() )
      .then( notes => dispatch({ type: 'NOTES', notes }))
  }

}

//ADD a note
//XCOs?XEO? to replace fetch
export const addNote = (title, body, lender, em, sd, dd, fa, sm) => {
  return(dispatch) => {
    fetch('/api/notes', {
      method: 'POST',
      headers:{
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, lender, em, sd, dd, fa, sm })
    }).then( res => res.json() )
      .then( note => dispatch({type: 'ADD_NOTE', note }))
  }

}

// Update a note

export const updateNote = ( id, title, body, lender, em, sd, dd, fa, sm ) => {
  return(dispatch) => {
    fetch(`/api/notes/${id}`, {
      method: 'PUT',
      headers:{
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, lender, em, sd, dd, fa, sm })
    }).then( res => res.json() )
      .then( note => dispatch({type: 'UPDATE_NOTE', note}));
  }

}

// delete a note
export const deleteNote = (id) => {
  return (dispatch) => {
    fetch(`/api/notes/${id}`, {
      method: 'DELETE'
    }).then( () => dispatch({ type: 'DELETE_NOTE', id }) )
  }
}
