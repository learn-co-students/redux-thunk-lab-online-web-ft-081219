import React, { Component } from 'react';
import {connect} from 'react-redux'
import CatList from './CatList'
import {fetchCats} from './actions/catActions'

class App extends Component {  
  
  componentDidMount() {
    console.log(this.props)
    this.props.fetchCats()
  }

  handleLoad = () => {
    if(this.props.loading) {
      return <div><h1>Loading...</h1></div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  
  render() {
    console.log(this.props.loading)
    console.log(this.props.catPics)
    return (
      <div className='App'>
        <hi>Cat Book</hi>
       {this.handleLoad()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

