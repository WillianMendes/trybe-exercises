import React from "react";

class Pokemon extends React.Component{
    render() {
        const { name, type, averageWeight, image } = this.props;
        return (
            <div className="poke-card">
                <div className="poke-card-img">
                    <img src={image} alt={name}/>
                </div>
                <div className="poke-card-body">
                    <p className="poke-card-attr">{name}</p>
                    <p className="poke-card-attr">{type}</p>
                    <p className="poke-card-attr">{averageWeight.value}{averageWeight.measurementUnit}</p>
                </div>
            </div>
        );
    }
}

export default Pokemon;