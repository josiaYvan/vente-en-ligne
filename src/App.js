import React, { Component } from "react";
import POKEMONS from "./models/data";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pannier: [],
      idIcremente: 0,
    };
  }

  ajout = (e) => {
    const val = this.state.pannier.find((elem) => elem.name === e.target.value);
    if (val !== undefined) {
      // console.log(this.state.pannier.find((elem) => elem.id === val.id));
    } else {
      this.setState({
        idIcremente: this.state.idIcremente + 1,
      });
      let id = this.state.idIcremente;
      this.setState({
        pannier: this.state.pannier.concat({
          id: id,
          name: e.target.value,
          prix: e.target.id,
          qtt: 1,
        }),
      });
    }
  };

  delete = (e) => {
    this.setState({
      pannier: this.state.pannier.filter(function (f) {
        return f.name !== e.target.value;
      }),
    });
  };

  render() {
    return (
      <div>
        <h1 className="center">logo</h1>
        <div className="container">
          <div className="row">
            <div className="col s6 m4 fixed">
              <h3 className="center">.Panniers.</h3>
              <p>
                <b>
                  <u>Votre pannier:</u>
                </b>
              </p>
              <div className="collection scrolled ">
                {this.state.pannier.map((value, index) => (
                  <div key={index} className="collection-item">
                    {" "}
                    <span className="badge">
                      {value.prix} {value.qtt}{" "}
                    </span>{" "}
                    <div className="collection-title">
                      {value.name} {value.id}{" "}
                    </div>
                    <i>
                      <button
                        className="btn small"
                        value={value.name}
                        onClick={this.delete}
                      >
                        -
                      </button>
                    </i>{" "}
                  </div>
                ))}
              </div>
            </div>
            <div className="col s6 m8">
              <div className="">
                <h3 className="center">.Articles.</h3>
                <div className="card-stacked">
                  <div className="row">
                    {POKEMONS.map(
                      ({ id, name, picture, created, prix, qtt }) => (
                        <div className="col s6" key={id}>
                          <div className="card horizontal">
                            <div className="card-image">
                              <img src={picture} alt={name} />
                              <h5 className="center"> {prix} $ </h5>
                            </div>
                            <div className="card-stacked">
                              <div className="card-content">
                                <h5> {name} </h5>
                                <p>
                                  <small> {created.toString()} </small>
                                </p>
                              </div>
                              <button
                                className="btn pulse"
                                value={name}
                                id={prix}
                                onClick={this.ajout}
                              >
                                ajouter
                              </button>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
