import React, { Component } from "react";
import Element from "./Element";

class ListeElements extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="collection scrolled with-header">
        <div className="collection-header fixed">
          <div className="row">
            <span className="col m3">Quantité</span>
            <span className="col m6 center">
              <b>Nom de l'article</b> <br />{" "}
              <label className="" htmlFor="">
                & Prix
              </label>
            </span>
            <span className="col m3">Action</span>
          </div>
        </div>
        {this.props.elems.map(({ ukey, name, prix, qtt }) => {
          return (
            <Element
              key={ukey}
              ukey={ukey}
              name={name}
              prix={prix}
              qtt={qtt}
              app={this.props.app}
            />
          );
        })}
      </div>
    );
  }
}
export default ListeElements;
