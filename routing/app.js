const { Router, Route, Link, IndexRoute, IndexLink } = ReactRouter;

class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink activeClassName="active" to="/">Home</IndexLink>
        <Link activeClassName="active" to="/about">About Me</Link>
        <Link activeClassName="active" to="/blog">Blog</Link>
        <Link activeClassName="active" to="/repos/jackfranklin">Jack's Github</Link>
        <Link activeClassName="active" to="/repos/tomnatt">Tom's Github</Link>
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

// there is a specific element for defining an Index
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="blog" component={Blog} />
      <Route path="repos/:username" component={Repos} />
    </Route>
  </Router>
), document.getElementById('app'));
