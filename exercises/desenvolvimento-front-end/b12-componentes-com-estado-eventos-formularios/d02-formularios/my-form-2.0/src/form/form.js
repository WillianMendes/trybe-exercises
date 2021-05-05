import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: undefined,
          email: undefined,
          cpf: undefined,
          address: undefined
        };

        this.validateAddress = this.validateAddress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateAddress(address) {
        const addressWithoutSpecialsChar = address.replace(/[^a-zA-Z0-9 ]/g, "");
        this.setState({ address: addressWithoutSpecialsChar });
    }

    handleChange(event) {
        const { name, value } = event.target;

        if (name === 'address') this.validateAddress(value);

        this.setState({[name]: value});
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { name, email, cpf, address } = this.props;

        return (
            <form action="#" onSubmit={ this.handleSubmit }>
                <fieldset>
                    <label htmlFor="nameInput"> Nome:
                        <input type="text" name="name" id="nameInput" value={ name } onChange={ this.handleChange } maxLength="40" required />
                    </label>
                    <label htmlFor="emailInput"> Email:
                        <input type="email" name="email" id="emailInput" value={ email } onChange={ this.handleChange } maxLength="50" required />
                    </label>
                    <label htmlFor="cpfInput"> CPF:
                        <input type="text" name="cpf" id="cpfInput" value={ cpf } onChange={ this.handleChange } maxLength="11" required />
                    </label>
                    <label htmlFor="addressInput"> Endereço:
                        <input type="text" name="address" id="addressInput" value={ address } onChange={ this.handleChange } maxLength="200" required />
                    </label>
                </fieldset>
            </form>
        );
    }
}

export default Form;
