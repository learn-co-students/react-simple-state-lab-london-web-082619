import React, { Component } from 'react';
import Cell from './Cell'
import { pattern2 } from './data.js'

 class Matrix extends Component {
  

  genRow = (vals) => (
    // vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    vals.map(val => <Cell value={val}/>)
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


Matrix.defaultProps = {
  values: pattern2
}

export default Matrix

// Matrix.defaultProps = {
//   values: (() => {
//     const singleRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'];
//     const defRows = [];
//     let i = 0;
//     while(i < 10) {
//       defRows.push(singleRow);
//       i++;
//     }
//     return defRows;
//   })()
// }