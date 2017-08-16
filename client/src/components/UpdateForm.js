import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNote } from '../actions/notes';

class UpdateForm extends Component {

  state = { note: {} }

  componentDidMount = () => {
    this.setState({ note: this.props.note })
  }

  handleChange = (e) => {
    let { id, value } = e.target;
    this.setState({ note: { ...this.state.note, [id]: value }});
  }

  // <form
  //   ref={ n => form = n }
  //   onSubmit={ e => {
  //     e.preventDefault();
  //     if (title.value){
  //       dispatch(addNote(title.value, body.value))
  //     }
  //     form.reset();
  //   }}
  // >
  render(){
    let form;
    let { dispatch, history } = this.props;
    let { note: { title, body, lender, em, sd, dd, fa, sm, _id } } = this.state;
    return (
      <div className='container'>
        <h5 className="center">Update Note</h5>
        <form
          onSubmit={ e => {
            e.preventDefault();
            dispatch(updateNote(_id, title, body, lender, em, sd, dd, fa, sm))
            history.push('/notes')
          }}
        >
          <input id='title' value={title} onChange={this.handleChange}/>
          <input id='lender' value={lender} onChange={this.handleChange} placeholder="Lender" />
          <input id='em' value={em} onChange={this.handleChange} type='date' placeholder="EM" />
          <input id='sd' value={sd} onChange={this.handleChange} placeholder="SD" />
          <input id='dd' value={dd} onChange={this.handleChange} placeholder="DD" />
          <input id='fa' value={fa} onChange={this.handleChange} placeholder="FA" />
          <input id='sm' value={sm} onChange={this.handleChange} placeholder="SM" />
          <textarea id='body' value={body} onChange={this.handleChange}></textarea>
          <button className="btn">Update</button>
        </form>
      </div>

    )
  }
}



export default connect()(UpdateForm);
