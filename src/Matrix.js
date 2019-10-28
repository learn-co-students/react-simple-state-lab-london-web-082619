import React, { Component } from 'react';
// import { deflateRaw } from 'zlib';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
    
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
let cell = []
for(let i = 0; i < 10; i++) {
  cell.push("#F00")
}
Matrix.defaultProps ={
  values: (()=> {
    return (new Array(10).fill(cell))
  })()
}