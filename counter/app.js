class MyApp extends React.Component {
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <Counter />
      </div>
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount(e) {
    e.preventDefault();
    this.setState({ count: ++this.state.count });
  }

  render() {
    return (
      <div>
        <p>Current Count: { this.state.count }</p>
        <a onClick={ (event) => this.incrementCount(event) }>Increment Me</a>
      </div>
    );
  }
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('app')
);
