import React, { Component } from 'react';
import { getNotes } from '../actions/notes';
// if no default in the file importing from, we use {} around what we are importing
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import NoteForm from './NoteForm';

class Notes extends Component {
  componentDidMount() {
    this.props.dispatch(getNotes());
  }

  displayNotes = () => {
     return this.props.notes.map( note => {
      return (
        <li key={note._id} className="collection-item">
          <div>
            { note.title }
            <span className="secondary-content">
              <Link to={`/notes/${note._id}`}>
                <i className="material-icons">send</i>
              </Link>
            </span>
          </div>
        </li>
      )
    });
  }

  render() {
    return(
      <div className='container'>
       <div class="col s7 push-s5">
        <h4>Transactions</h4>
        </div>
        <hr />
        <div className='row'>
          <div className='col s12 m6'>
            <NoteForm />
          </div>
          <div className='col s12 m6'>
            <ul className='collection'>
              { this.displayNotes() }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

// Example Redux Store
// {
//   notes: [{}, {}, {}],
//   user: { name: 'jake', age: 27, gender: 'Male'},
//   cars: [{}, {}, {}, {}, {}, {}]
// }

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes);
