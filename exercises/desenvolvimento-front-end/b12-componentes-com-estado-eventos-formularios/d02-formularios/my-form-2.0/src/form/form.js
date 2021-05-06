import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
          name: '',
          email: '',
          cpf: '',
          address: '',
          city: '',
          state: '',
          curriculumSummary: '',
        };

        this.validateAddress = this.validateAddress.bind(this);
        this.handleValidateCity = this.handleValidateCity.bind(this);
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

    handleValidateCity(event) {
        const { value } = event.target;
        if (!isNaN(value.charAt(0))) this.setState({ city: '' });
    }

    handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        const { name, email, cpf, address, city, state, type, curriculumSummary } = this.state;

        return (
            <form action="#" onSubmit={ this.handleSubmit }>
                <fieldset>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={ name }
                            onChange={ this.handleChange }
                            maxLength="40"
                            placeholder="Nome"
                            aria-label="nome"
                            required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label"> Email:
                            <input type="email" name="email" id="emailInput" className="form-control" value={ email } onChange={ this.handleChange } maxLength="50" required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpfInput" className="form-label"> CPF:
                            <input type="text" name="cpf" id="cpfInput" className="form-control" value={ cpf } onChange={ this.handleChange } maxLength="11" required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="addressInput" className="form-label"> Endereço:
                            <input type="text" name="address" id="addressInput" className="form-control" value={ address } onChange={ this.handleChange } maxLength="200" required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cityInput" className="form-label"> Cidade:
                            <input type="text" name="city" id="cityInput" className="form-control" value={ city } onChange={ this.handleChange } onBlur={ this.handleValidateCity } maxLength="28" required />
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stateSelect" className="form-label"> Estados:
                            <select name="state" id="stateSelect" className="form-select" value={ state } onChange={ this.handleChange } required>
                                <option value="es">Espirito Santo</option>
                                <option value="mg">Minas Gerais</option>
                                <option value="rj">Rio de Janeiro</option>
                                <option value="sp">São Paulo</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        Tipo:
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" name="type" id="homeInput" className="form-check-input" value="home" checked={ type === "home" } onChange={ this.handleChange }/> Casa
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input type="radio" name="type" id="apartmentInput" className="form-check-input" value="apartment" checked={ type === "apartment" } onChange={ this.handleChange }/> Apartamento
                            </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <textarea name="curriculumSummary" id="curriculumSummaryInput" value={curriculumSummary} maxLength="1000" required/>
                </fieldset>
            </form>
        );
    }
}

export default Form;
