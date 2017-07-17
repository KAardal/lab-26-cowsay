
import React from 'react';
import ReactDom from 'react-dom';
import cowsay from 'cowsay-browser';
import faker from 'faker';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: cowsay.say({text: faker.lorem.sentence()})
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick(e) {
    this.setState((state) => {
      return {content: cowsay.say({text: faker.lorem.sentence()})}
    });
  };

  render() {
    return(
      <div>
        <h1>Cowsay!</h1>
        <pre>{this.state.content}</pre>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }
};

ReactDom.render(<App />, document.getElementById('root'));
