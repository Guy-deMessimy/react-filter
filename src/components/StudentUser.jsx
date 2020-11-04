import React, { Component } from 'react';

class StudentUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFailedOnly: false,
      studentList: [
        {
          note: 18,
          name: 'Young Allen',
          gender: 'female'
        },
        {
          note: 15,
          name: 'Weaver Yates',
          gender: 'male'
        },
        {
          note: 4,
          name: 'Patrica Reilly',
          gender: 'female'
        },
        {
          note: 12,
          name: 'Schroeder Hewitt',
          gender: 'male'
        },
        {
          note: 10,
          name: 'Holmes Kennedy',
          gender: 'male'
        },
        {
          note: 19,
          name: 'Holt Smith',
          gender: 'male'
        },
        {
          note: 9,
          name: 'Reyna Rollins',
          gender: 'female'
        },
        {
          note: 5,
          name: 'Craig Golden',
          gender: 'male'
        },
        {
          note: 4,
          name: 'Bentley Owens',
          gender: 'male'
        },
        {
          note: 16,
          name: 'Mia Hall',
          gender: 'female'
        }
      ]
    };
    this.handleShowFailedOnlyClick = this.handleShowFailedOnlyClick.bind(this);
  }

  handleShowFailedOnlyClick() {
    this.setState({ showFailedOnly: !this.state.showFailedOnly });
  }
  // render showFailedonly button at OFF
  // apply filter at studentList stock in state
  // if state is not true (!this.state.showFailedOnly = true) = this is the case on the first random
  // so the filter is inactif - Js don't read the right element (student.note <10) and function rendom all students
  // if active filter (!this.state.showFailedOnly = true) = the second condition is read
  // function rendom students with note <10
  render() {
    return (
      <div>
        <button onClick={this.handleShowFailedOnlyClick}>
          Show only failed results: {this.state.showFailedOnly ? 'ON' : 'OFF'}
        </button>
        <h2>Exam results</h2>
        <ul>
        {this.state.studentList
        .filter(student => !this.state.showFailedOnly || student.note < 10)
        .map((student, index) => (
            <li key={index}>
              Name: {student.name} Note: {student.note}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentUser;
