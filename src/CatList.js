// write your CatList component here
import React,{Component} from 'react'

export default class CatList extends Component {
    display_cats = () => {
        console.log("printin cats")
        console.log(this.props.catPics)
       return this.props.catPics.map(e=> <img src={e.url}/>)
    }
    render(){
        return (<div>
            
            {this.display_cats()}

            
        </div>)
    }
}