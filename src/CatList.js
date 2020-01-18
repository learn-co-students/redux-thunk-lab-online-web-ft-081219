// write your CatList component here
import React, { Component } from 'react';

class CatList extends Component {
    render() {
        const pics = this.props.catPics.map(pic => <img src={pic.url} alt="no img" key={pic.id} />)
        // const { url } = this.props.catpics
        return (
            <div>
                {/* <img src={url} alt="no img" /> */}
                {pics}
            </div>
        )
    }
}


export default CatList