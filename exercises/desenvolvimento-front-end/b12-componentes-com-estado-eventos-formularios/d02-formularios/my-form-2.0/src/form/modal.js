import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { onModalClosed } = this.props;
    onModalClosed(event.target.value);
  }

  render() {
    const {
      data: {
        name, email, cpf, address, city, state, type,
        curriculumSummary, role, jobDescription, modalIsOpen,
      },
    } = this.props;

    return (
      <div className="mt-4 p-2 border border-dark">
        <div className="row">
          <h1 className="h1">Meu Currículo</h1>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Nome: </span>
            <span>{name}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">E-mail: </span>
            <span>{email}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">CPF: </span>
            <span>{cpf}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Endereço: </span>
            <span>{address}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Cidade: </span>
            <span>{city}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Estado: </span>
            <span className="text-uppercase">{state}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Tipo: </span>
            <span>{type}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Resumo do Currículo: </span>
            <span>{curriculumSummary}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Cargo: </span>
            <span>{role}</span>
          </div>
          <div className="col-sm-12 col-md-6 mb-2">
            <span className="fw-bold">Descrição do Cargo: </span>
            <span>{jobDescription}</span>
          </div>
        </div>
        <button className="btn btn-outline-danger mt-3" type="button" onClick={this.handleClick}>Fechar</button>
      </div>
    );
  }
}

export default Modal;
