import React, { Component } from 'react'

class ToTopOnMount extends Component {
  componentDidMount(prevProps) {
    window && window.scrollTo(0, 0)
  }

  render(){
  	return null
  }
}

export default ToTopOnMount
