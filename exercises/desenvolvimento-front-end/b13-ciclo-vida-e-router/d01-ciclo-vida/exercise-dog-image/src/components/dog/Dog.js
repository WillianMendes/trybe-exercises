import React, {Component} from 'react';
import './dog.css';

class Dog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            status: '',
            loading: true,
        }

        this.newDog = this.newDog.bind(this);
    }

    async componentDidMount() {
        this.newDog().then();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        localStorage.setItem('prevDog', prevState.message);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !nextState.message.includes('terrier');
    }

    async newDog() {
        this.setState(
            { loading: true },
            async () => {
                const dogDataResponse = await fetch('https://dog.ceo/api/breeds/image/random');
                const dog = await dogDataResponse.json();

                this.setState({
                    message: dog.message,
                    status: dog.status,
                    loading: false,
                });

                this.getNameDog(this.state.message);
        });
    }

    getNameDog(url) {
        const doguinho = url.split('/')[4].replace('-', ' ').toUpperCase();
        alert(doguinho);
        const nameDoguinho = prompt('Dê um nome ao doguinho');
        alert('O nome do doguinho é ' + nameDoguinho);
    }

    render() {
        const { loading, message } = this.state;
        return (
            <div className="dog-box">
                {
                    loading ?
                    <span>Carregando...</span> :
                    <div className="box-container">
                        <div className="box-img mb-3">
                            <img src={message} alt={message} />
                        </div>
                        <button className="btn btn-primary" onClick={this.newDog} type="button">Novo</button>
                    </div>
                }
            </div>
        )
    }
}

export default Dog;