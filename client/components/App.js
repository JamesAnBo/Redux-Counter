import React from 'react'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.addToCount = this.addToCount.bind(this)
    this.subtractFromCount = this.subtractFromCount.bind(this)
  }

  addToCount () {
  this.props.store.dispatch(
    { type: 'ADD_TO_COUNT', state: this.props.state }
  )
  }

  subtractFromCount () {
  this.props.store.dispatch(
    { type: 'SUBTRACT_FROM_COUNT', state: this.props.state }
  )
  }

  render () {
    return (
      <div>
        <h1>{this.props.state.count}</h1>
        <button onClick={this.addToCount}>Add</button>
        <button onClick={this.subtractFromCount}>Subtract</button>
      </div>
    )
  }
}
