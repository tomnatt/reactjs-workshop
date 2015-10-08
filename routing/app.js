const { Router, Route, Link } = ReactRouter;

class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/repos/jackfranklin">Jack's Github</Link>
        <Link to="/repos/tomnatt">Tom's Github</Link>
        <p>This is my app</p>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <p>Home page</p>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <p>About Me</p>
    );
  }
}

class Blog extends React.Component {
  render() {
    return (
      <p>This is a blog</p>
    );
  }
}

class Repos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  fetchData(username) {
    $.getJSON(`https://api.github.com/users/${username}/repos`).then((data) => {
      this.setState({ repos: data });
    });
  }

  // called first load
  componentWillMount() {
    this.fetchData(this.props.params.username);
  }

  // called subsequent loads
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.username !== this.props.params.username) {
      this.fetchData(nextProps.params.username);
    }
  }

  render() {
    const repos = this.state.repos.map((repo) => {
      return <li key={repo.name}>{ repo.name }</li>;
    });

    return (
      <ul>{repos}</ul>
    );
  }
}

ReactDOM.render((
  <Router>
    <Route path="" component={App}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/repos/:username" component={Repos} />
    </Route>
  </Router>
), document.getElementById('app'));
