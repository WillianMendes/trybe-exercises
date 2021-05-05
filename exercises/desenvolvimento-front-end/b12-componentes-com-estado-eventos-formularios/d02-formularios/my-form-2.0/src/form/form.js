import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: undefined,
          email: undefined
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { name, email } = this.props;

        return (
            <form action="#" onSubmit={ this.handleSubmit }>
                <fieldset>
                    <label htmlFor="nameInput"> Nome:
                        <input type="text" name="name" id="nameInput" value={ name } onChange={ this.handleChange } maxLength="40" required />
                    </label>
                    <label htmlFor="emailInput"> Email:
                        <input type="email" name="email" id="emailInput" value={ email } onChange={ this.handleChange } maxLength="50" required />
                    </label>
                </fieldset>
            </form>
        );
    }
}

export default Form;
