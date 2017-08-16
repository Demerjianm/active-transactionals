import React from 'react';
import { connect } from 'react-redux';
import { getNotes } from '../actions/notes';
import { Route } from 'react-router-dom';
import Notes from './Notes';
import Note from './Note';

class SetNotes extends React.Component {
  componentDidMount() {
    this.props.dispatch(getNotes());
  };

  render() {
    return (
      <div>
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/notes/:id" component={Note} />
      </div>
    )
  }
}

export default connect()(SetNotes);
