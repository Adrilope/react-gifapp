import React from 'react';
import ReactDOM from 'react-dom';
import GifExpertApp from './GifExpertApp';

import './index.css';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <GifExpertApp />
// );


const root = document.querySelector('#root')
ReactDOM.render(<GifExpertApp />, root)


