import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';

const NoteForm = ({ dispatch }) => {
  let title, body, lender, em, sd, dd, fa, sm, form;
//n in ref stands for node, setting a variable equal to the entire input element

  return (
    <div>
      <h5 className="center">Add A Note</h5>
      <form
        ref={ n => form = n }
        onSubmit={ e => {
          e.preventDefault();
          if (title.value){
            dispatch(addNote(title.value, 
                             body.value, 
                             lender.value, 
                             em.value,
                             sd.value,
                             dd.value,
                             fa.value,
                             sm.value,
                             ))
          }
          form.reset();
        }}
      >
        <input ref={ n => title = n } placeholder="Title" />
        <input ref={ n => lender = n } placeholder="Lender" />
        <input ref={ n => em = n } placeholder="EM" />
        <input ref={ n => sd = n } placeholder="SD" />
        <input ref={ n => dd = n } placeholder="DD" />
        <input ref={ n => fa = n } placeholder="FA" />
        <input ref={ n => sm = n } placeholder="SM" />
        <textarea ref={ n => body = n } placeholder="Note Body"></textarea>

        <button className="btn">Save</button>
      </form>
    </div>
  )
}

// MSTP - grabs state out of store, pass in as a prop

export default connect()(NoteForm);
