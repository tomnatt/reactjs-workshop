# ReactJS Notes
Workshop 8/10/15

## Libraries

`npm install -g serve`
For serving in development.

`lib/babel-browser.js`
Compiles ES6 to ES5 which is more widely supported (also supports ES7).
This transpiles on the fly - useful in development, would be part of build pipeline for deployment.

## Notes

Every React component has to return a single element (can just put them in a div).

`props` (properties) don't change
`state` do change

React queues changes before rendering so:

```
this.setState({ count: ++this.state.count });
console.log(this.state.count);
```

MAY not give the expected value of `this.state.count`

In `refs` we reach into the DOM for auto-focus. This should be very very rarely needed.

Testing React components is really easy and nice to do (quote).

`fetching-data` requires jquery only for the ajax call - React does not require jquery.

`propTypes` is most useful for maintenance - keeps track of your objects, particularly useful if you haven't worked on the project for a while.

Use React as a progressive enhancement tool rather than to build the page. Either on top of a Node server or on top of static HTML?

Potentially an example of this:
https://github.com/gocardless/splash-pages

## Real projects and production

`jspm` for package management which uses `systemjs` for dependency management behind the scenes.

```
jspm init
jspm install react
jspm install npm:react-dom@@0.14

# bundle for production
jspm bundle-sfx app/main.js --minify
```

Example of this: https://github.com/jackfranklin/jspm-es6-react-example

(update repo from upstream)