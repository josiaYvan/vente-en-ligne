import React, { Component } from "react";

export default class BoutonInsérer extends Component {
  constructor(props) {
    super(props);
    this.state = { elems: [] }; //Tableau d'objets {txt,ukey}
  }
  getUniqueKey() {
    //retourner une clé unique
    var key = Math.random() + " "; //Retourner une chaîne de caractères
    return key;
  }
  insertElem() {
    var elems = this.state.elems;
    var txt = "Element" + (elems.length + 1);
    var ukey = this.getUniqueKey(); //clé unique associée à l'élement
    var elem = { txt: txt, ukey: ukey };
    elems.push(elem);
    this.setState({ elems: elems });
  }
  removeElem(objElem) {
    //objet de classe element
    console.log(objElem); // Element à supprimer
    var elems = this.state.elems;
    elems = elems.filter(function (elem) {
      if (objElem.ukey != elem.ukey) return true; //Conserver l'élément
    });
    this.setState({ elems: elems });
  }
  render() {
    return (
      <div className="container center">
        <button onClick={this.insertElem.bind(this)} className="btn blue">
          Insérer
        </button>
        <ListeElements elems={this.state.elems} app={this} />
      </div>
    );
  }
}

class Element extends React.Component {
  constructor(props) {
    super(props);
    this.ukey = props.ukey;
    this.state = { style: {}, removed: false };
  }

  mouseOver() {
    var style = { color: "red", fontStyle: "italic", cursor: "pointer" };
    this.setState({ style: style });
  }
  mouseOut() {
    var style = { color: " ", fontStyle: " ", cursor: "default" };
    this.setState({ style: style });
  }
  //   removeElem() {
  //     this.setState({ removed: true });
  //   }
  handlerRemoveElem() {
    this.props.app.removeElem(this); //this : objet de classe Element
  }

  render() {
    return this.state.removed ? null : (
      <li
        style={this.state.style}
        onMouseOver={this.mouseOver.bind(this)}
        onMouseOut={this.mouseOut.bind(this)}
      >
        <span>{this.props.txt}</span>
        <button className="btn red" onClick={this.handlerRemoveElem.bind(this)}>
          -
        </button>
      </li>
    );
  }
}

class ListeElements extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        {this.props.elems.map((elem, index) => {
          var { ukey, txt } = elem;
          return (
            <Element key={ukey} ukey={ukey} txt={txt} app={this.props.app} />
          );
        })}
      </ul>
    );
  }
}
