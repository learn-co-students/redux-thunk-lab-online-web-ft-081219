// write your CatList component here
import React, {Component} from 'react'

export default class CatList extends Component {

    renderCatPics = () => {
        console.log(this.props.catPics)
        return this.props.catPics.map(pic => {
        return <img 
        src={pic.url} 
        alt='cat' 
        key={pic.id} 
        width='333'
        height='333' />
        })
    }

    render() {
        return(
        <div>{this.renderCatPics()}</div>
        )
    }
}
