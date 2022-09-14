import React, { Component } from "react";
import data from "../dataGlasses.json";
export default class GlassComponent extends Component {
    state = {
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    };

    loadGlassList = () => {
        return data.map((glass) => {
            return (
                <div className="col-2 py-1">
                    <button
                        onClick={() => {
                            this.changeGlass(glass.id);
                        }}
                    >
                        <img className="img-fluid" src={glass.url} alt="" />
                    </button>
                </div>
            );
        });
    };

    changeGlass = (id) => {
        let newGlass = data.find((glass) => {
            return glass.id === id;
        });
        this.setState(newGlass);
    };

    render() {
        return (
            <div className="container">
                <div className="glass__model d-flex py-5">
                    <div className="try__glass">
                        <img
                            className="img-fluid"
                            src="./glassesImage/model.jpg"
                            alt=""
                        />
                        <div className="glass--wear">
                            <img
                                className="img-fluid"
                                src={this.state.url}
                                alt=""
                            />
                        </div>
                        <div className="glass__detail">
                            <h2>{this.state.name}</h2>
                            <span>{this.state.price}$</span>
                            <p>{this.state.desc}</p>
                        </div>
                    </div>
                    <img
                        className="img-fluid"
                        src="./glassesImage/model.jpg"
                        alt=""
                    />
                </div>
                <div className="glass__list">
                    <div className="row">{this.loadGlassList()}</div>
                </div>
            </div>
        );
    }
}
