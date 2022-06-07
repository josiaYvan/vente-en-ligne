import React, { Component } from "react";
import "../css/App.css";
import POKEMONS from "../models/data";
import ListeElements from "./ListeElements";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pannier: [],
      qtt: 0,
    };
  }
  getUniqueKey() {
    var key = Math.random();
    return key;
  }
  ajout(obj) {
    var pannier = this.state.pannier;
    var isIn = this.state.pannier.find((n) => n.ukey === obj.ukey);
    if (isIn != undefined) {
      // add this article
      isIn.qtt += 1;
      // algo ADD
      if (isIn == pannier.at(0)) {
        isIn.prix += 500;
      } else if (isIn == pannier.at(1)) {
        isIn.prix += 300;
      } else if (isIn == pannier.at(2)) {
        isIn.prix += 450;
      } else if (isIn == pannier.at(3)) {
        isIn.prix += 195;
      } else if (isIn == pannier.at(4)) {
        isIn.prix += 265;
      } else if (isIn == pannier.at(5)) {
        isIn.prix += 610;
      } else if (isIn == pannier.at(6)) {
        isIn.prix += 425;
      } else if (isIn == pannier.at(7)) {
        isIn.prix += 505;
      } else if (isIn == pannier.at(8)) {
        isIn.prix += 520;
      } else if (isIn == pannier.at(9)) {
        isIn.prix += 325;
      } else if (isIn == pannier.at(10)) {
        isIn.prix += 410;
      } else if (isIn == pannier.at(11)) {
        isIn.prix += 275;
      }
    } else {
      // create an article in bag
      var ukey = obj.ukey;
      var name = obj.name;
      var prix = obj.prix;
      var qtt = 1;
      var elem = { ukey: ukey, name: name, prix: prix, qtt };

      pannier.push(elem);
    }
    this.setState({ pannier: pannier });
  }
  deleteOne(obj) {
    var pannier = this.state.pannier;
    var isIn = this.state.pannier.find((n) => n.ukey === obj.props.ukey);
    // return null;
    var prix = obj.props.prix;
    if (isIn.name == pannier.at(0).name) {
      prix -= 500;
      console.log(prix);
    } else if (isIn.name == pannier.at(1).name) {
      prix -= 300;
      console.log(prix);
    } else if (isIn.name == pannier.at(2).name) {
      prix -= 450;
      console.log(prix);
    } else if (isIn.name == pannier.at(3).name) {
      prix -= 195;
      console.log(prix);
    } else if (isIn.name == pannier.at(4).name) {
      prix -= 265;
      console.log(prix);
    } else if (isIn.name == pannier.at(5).name) {
      prix -= 610;
      console.log(prix);
    } else if (isIn.name == pannier.at(6).name) {
      prix -= 425;
      console.log(prix);
    } else if (isIn.name == pannier.at(7).name) {
      prix -= 505;
      console.log(prix);
    } else if (isIn.name == pannier.at(8).name) {
      prix -= 520;
      console.log(prix);
    } else if (isIn.name == pannier.at(9).name) {
      prix -= 325;
      console.log(prix);
    } else if (isIn.name == pannier.at(10).name) {
      prix -= 410;
      console.log(prix);
    } else if (isIn.name == pannier.at(11).name) {
      prix -= 275;
      console.log(prix);
    }
  }
  removeElem(n) {
    var pannier = this.state.pannier;
    pannier = pannier.filter((f) => {
      if (n.ukey != f.ukey) return true;
    });
    this.setState({ pannier: pannier });
  }
  TotalPrix() {
    var total = 0;
    for (let i = 0; i < this.state.pannier.length; i++) {
      total += this.state.pannier[i].prix;
    }
    // pour faciliter la lecture des chiffres
    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  TotalQtt() {
    var total = 0;
    for (let i = 0; i < this.state.pannier.length; i++) {
      total += this.state.pannier[i].qtt;
    }
    return total;
  }

  render() {
    return (
      <div className="container">
        <h2 className="center">Achetez vos POKEMONS </h2>
        <div className="row">
          <div className="col s6 m4 fixed">
            <h3 className="center">.Pannier.</h3>
            <ListeElements elems={this.state.pannier} app={this} />
            <div className="">
              <p>Prix Total:</p>{" "}
              <div className="flow-text">
                {" "}
                <b> {this.TotalPrix()} $</b>
              </div>
            </div>
            <div className="">
              <p>
                Nombre de vos articles: <b> {this.TotalQtt()}</b>
              </p>
            </div>
          </div>
          <div className="col s6 m8">
            <div className="">
              <h3 className="center">.Articles.</h3>
              <div className="card-stacked">
                <div className="row">
                  {POKEMONS.map(({ id, name, picture, created, prix, qtt }) => (
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
                          <Btn ukey={id} name={name} prix={prix} app={this} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ukey: props.ukey,
      name: props.name,
      prix: props.prix,
    };
  }

  show() {
    this.props.app.ajout(this.state);
  }

  render() {
    return (
      <span className="btn blue" onClick={this.show.bind(this)}>
        <i className="material-icons large">add_shopping_cart</i>
      </span>
    );
  }
}
