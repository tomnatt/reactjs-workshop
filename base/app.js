// ES5 version
// var HelloWorld = React.createClass({
//   render: function() {
//     return (<p>Hello World</p>);
//   }
// });

// ES6 version
class HelloWorld extends React.Component {
  render() {
    return (
      <p>Hello World</p>
    )
  }
}

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);
