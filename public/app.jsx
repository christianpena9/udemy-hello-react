/**
 * React Component. Good practice to use uppercase on the react component
 * You can only return one element, error will be thrown if multiple root
 * html elements are returned
 */
var Greeter = React.createClass({
    getDefaultProps: function() {
        return {
            name: 'React',
            message: 'This is the default message'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name
        };
    },
    onButtonClick: function (e) {
        e.preventDefault();

        var nameRef = this.refs.name;
        var name = nameRef.value;
        nameRef.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }
    },
    render: function() {
        var name = this.state.name;
        var message = this.props.message;

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var firstName = 'Christian';

ReactDOM.render(<Greeter name={firstName} message="Message from prop!"/>, document.getElementById('app'));
