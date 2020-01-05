import React, { Component } from 'react';


export default class Catlist extends Component {

  renderCats = () => {
    return this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id}></img>)
  }

  render() {
    return (
      <div>
        {this.renderCats()}
      </div>
    );
  }

}
