import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            firstName: '',
            lastName: '',
            email: ''
        };

        this.state = {
            num: 0
        };
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const {firstName, lastName, email } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="firstName">FirstName</label>
                <input 
                    type="text" 
                    name="firstName" 
                    id="firstName"
                    value={firstName} 
                    onChange={this.handleChange} />
                <label for="lastName">LastName</label>
                <input 
                    type="text" 
                    name="lastName" 
                    id="lastName"
                    value={lastName} 
                    onChange={this.handleChange} />
                <label for="email">Email</label>
                <input 
                    type="text" 
                    name="email" 
                    id="email"
                    value={email} 
                    onChange={this.handleChange} />
                <button type="submit" onClick={() => this.setState({ num: this.state.num + 1 })}>
                    Add User
                </button>
            </form>
        );
    }
}

export default Form;
