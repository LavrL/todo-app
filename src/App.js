//Improvement from this tutorial: https://medium.com/@aghh1504/1-simple-react-todo-list-52186b62976b
import React from 'react';
import List from './List';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeList = this.onChangeList.bind(this);
    this.state = {
      term : '', // what we are passing
      listItem: [], //massive of all passed things
      message: 'To Do List' //just message
    }
  }

  onChangeList(event) {
    this.setState({
      term: event.target.value
    });
  }

  onSubmit = (event) => {
    event.preventDefault()
    if (this.state.term) {
      this.setState({
        listItem: [...this.state.listItem, this.state.term],
        term: '',
        message: 'To Do List'
      });
    } else {
      let warning = 'You need to fill the field';
      this.setState({
        message: warning
      });
    }
  }

  render() {
    console.log(...this.state.listItem);
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <h1>{this.state.message}</h1>
          <input type="text" onChange={this.onChangeList} value={this.state.term} />
          <button>add</button>
        </form>
        <List listItem={this.state.listItem} />
      </div>
    );
  }
}