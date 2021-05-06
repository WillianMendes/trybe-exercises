import React, {Component} from 'react';

class Dog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            status: '',
            loading: true,
        }
    }

    async componentDidMount() {
        const dogDataResponse = await fetch('https://dog.ceo/api/breeds/image/random');
        const dogDataJson = await dogDataResponse.json();
        this.newDog(dogDataJson);
    }

    newDog(dog) {
        this.setState({
            message: dog.message,
            status: dog.status,
            loading: true,
        }, () => {
            this.setState({ loading: false });
        });
    }

    render() {
        const { loading, message } = this.state;
        return (
            <div>
                {loading ? <span>Carregando...</span> : <img src={message} alt={message} />}
            </div>
        )
    }
}

export default Dog;