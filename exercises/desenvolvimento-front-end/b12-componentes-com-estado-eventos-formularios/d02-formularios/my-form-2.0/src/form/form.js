import React, { Component } from 'react';

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

    this.handleValidateAddress = this.handleValidateAddress.bind(this);
    this.handleValidateCity = this.handleValidateCity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleValidateCity(event) {
    const { value } = event.target;
    const valueValidNumber = Number(value.charAt(0));
    if (!Number.isNaN(valueValidNumber)) this.setState({ city: '' });
  }

  handleValidateAddress(event) {
    const { value } = event.target;
    const addressWithoutSpecialsChar = value.replace(/[^a-zA-Z0-9 ]/g, '');
    this.setState({ address: addressWithoutSpecialsChar });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    const {
      name, email, cpf, address, city, state, type, curriculumSummary,
    } = this.state;

    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend className="form-label">Dados Pessoais</legend>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={this.handleChange}
              maxLength="40"
              placeholder="Nome"
              aria-label="nome"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={this.handleChange}
              maxLength="50"
              placeholder="Email"
              aria-label="email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="cpf"
              id="cpfInput"
              className="form-control"
              value={cpf}
              onChange={this.handleChange}
              maxLength="11"
              placeholder="CPF"
              aria-label="cpf"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="address"
              className="form-control"
              value={address}
              onChange={this.handleChange}
              onBlur={this.handleValidateAddress}
              maxLength="200"
              placeholder="Endereço"
              aria-label="endereço"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="city"
              className="form-control"
              value={city}
              onChange={this.handleChange}
              onBlur={this.handleValidateCity}
              maxLength="28"
              placeholder="Cidade"
              aria-label="cidade"
              required
            />
          </div>
          <div className="mb-3">
            <select
              name="state"
              className="form-select"
              value={state}
              onChange={this.handleChange}
              required
            >
              <option value="" disabled>Selecione o Estado</option>
              <option value="es">Espirito Santo</option>
              <option value="mg">Minas Gerais</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="sp">São Paulo</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <label htmlFor="homeInput" className="form-check-label">
                Casa
                <input
                  type="radio"
                  name="type"
                  id="homeInput"
                  className="form-check-input"
                  value="home"
                  checked={type === 'home'}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
            <div className="form-check form-check-inline">
              <label htmlFor="apartmentInput" className="form-check-label">
                Apartamento
                <input
                  type="radio"
                  name="type"
                  id="apartmentInput"
                  className="form-check-input"
                  value="apartment"
                  checked={type === 'apartment'}
                  onChange={this.handleChange}
                  required
                />
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend className="form-label">Ultimo Emprego</legend>
          <div className="mb-3">
            <textarea
              name="curriculumSummary"
              className="form-control"
              value={curriculumSummary}
              onChange={this.handleChange}
              maxLength="1000"
              rows="4"
              placeholder="Resumo do Currículo"
              aria-label="Resumo do Currículo"
              required
            />
          </div>
        </fieldset>
      </form>
    );
  }
}

export default Form;
