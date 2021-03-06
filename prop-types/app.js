class MyApp extends React.Component {
  render() {
    // favouriteNumber requires a number so define like this
    return (
      <Person name="Jack" favouriteNumber={3} />
    )
  }
};

class Person extends React.Component {
  render() {
    return (
      <ul>
        <li>Name: { this.props.name }</li>
        <li>Location: { this.props.location }</li>
        <li>Favourite Number: { this.props.favouriteNumber }</li>
      </ul>
    );
  }
}

Person.propTypes = {
  name: React.PropTypes.string.isRequired,
  location: React.PropTypes.string,
  favouriteNumber: React.PropTypes.number.isRequired
};

Person.defaultProps = {
  location: "London"
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('app')
);
