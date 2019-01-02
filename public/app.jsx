/**
 * React Component. Good practice to use uppercase on the react component
 * You can only return one element, error will be thrown if multiple root
 * html elements are returned
 */

var React = require('react');
var ReactDOM = require('react-dom');

/* Custom Components */
var Greeter = require('Greeter');

var firstName = 'Christian';

ReactDOM.render(<Greeter name={firstName} message="Message from prop!"/>, document.getElementById('app'));
