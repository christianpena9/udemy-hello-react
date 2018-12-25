/**
 * React Component. Good practice to use uppercase on the react component
 * You can only return one element, error will be thrown if multiple root
 * html elements are returned
 */
var Greeter = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Hello React</h1>
                <p>this is from the component</p>
            </div>
        );
    }
});

ReactDOM.render(<Greeter/>, document.getElementById('app'));
