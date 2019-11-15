import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern2 } from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={pattern2} />, document.getElementById('root'));
