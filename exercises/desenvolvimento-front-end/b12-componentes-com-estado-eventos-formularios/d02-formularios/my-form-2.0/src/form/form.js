import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: undefined
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
        const { name } = this.props;

        return (
            <form action="#">
                <fieldset>
                    <label htmlFor="nameInput"> Nome:
                        <input type="text" name="name" id="nameInput" value={ name } onChange={ this.handleChange } maxLength="40" required />
                    </label>
                </fieldset>
            </form>
        );
    }
}

export default Form;
