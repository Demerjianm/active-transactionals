import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions/notes';
import UpdateForm from './UpdateForm';

class Note extends React.Component {
  state = { edit: false }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }
  // in render check if this.state.edit is true
  //if it is, render a edit form
  //once form is submitted, dispatch the editNote action
  //reset component edit state to false  - call toggleEdit

  // toggleLoad = (controlName) => {
  //   this.setState({ [controlName]: !this.state.controlName })
  // }

  deleteNote = () => {
    let { dispatch, note, lender, em, sd, dd, fa, sm, history } = this.props;
    dispatch(deleteNote(note._id));
    history.push('/notes');
// let p = this.props;
// debugger
// but debugger is not recognizing this.props
//so add let p = this.props so debugger has access to p

  }

  render() {
    let { note: { title, body, updatedAt, createdAt }} = this.props;

    return (
      <div>
      { this.state.edit?
        <UpdateForm
          toggleEdit={this.toggleEdit}
          note={this.props.note}
          history={this.props.history}
        />
        :
        <div className="container">
          <h4 className="center">{title}</h4>
          <span className="grey-text">{`Created: ${createdAt}`}</span>
          <br />
          <span className="grey-text">{`Updated: ${updatedAt}`}</span>
          <p>{body}</p>
          <div style={{ cursor: 'pointer' }}>
            <i className="blue-text material-icons" onClick={this.toggleEdit}>edit</i>
            <i className="red-text material-icons" onClick={this.deleteNote}>delete</i>
          </div>
        </div>
      }
      </div>

    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n._id === props.match.params.id) || {} }
}
//params.id come from the url
//look up find

export default connect(mapStateToProps)(Note);
