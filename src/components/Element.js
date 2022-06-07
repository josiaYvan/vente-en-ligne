import React, { Component } from "react";

export default class Element extends Component {
  constructor(props) {
    super(props);
    this.ukey = props.ukey;
    this.state = {
      removed: false,
    };
  }

  handlerRemoveElem() {
    this.props.app.removeElem(this); //this : objet de classe Element
  }
  handlerAddElem() {
    this.props.app.ajout(this);
  }
  handleDeleteOne() {
    this.props.app.deleteOne(this);
  }
  render() {
    return this.state.removed ? null : (
      <div className="collection-item avatar">
        <i className="circle blue white-text">{this.props.qtt}</i>
        <span className="title">
          {" "}
          {this.props.name}
          {this.props.qtt > 1 ? "s" : null}{" "}
        </span>
        <p className="grey-text">
          {" "}
          <b>{Math.floor(this.props.prix * 100) / 100} $</b>{" "}
        </p>
        <div className="secondary-content">
          <span
            className="green btn-small btn-floating pointing"
            onClick={this.handlerAddElem.bind(this)}
          >
            <i title="Ajouter la quantité" className="material-icons ">
              add
            </i>
          </span>
          <span
            className="orange-text pointer"
            onClick={this.handleDeleteOne.bind(this)}
          >
            <i title="Réduire la quantité" className="material-icons">
              indeterminate_check_box
            </i>
          </span>
          <span className="pointer" onClick={this.handlerRemoveElem.bind(this)}>
            <i
              title="Supprimer cet article"
              className="material-icons red-text"
            >
              delete
            </i>
          </span>
        </div>
      </div>
    );
  }
}
