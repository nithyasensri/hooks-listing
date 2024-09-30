
import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import Mainheader from './App';
import 'bootstrap/dist/css/bootstrap.css'


function Main() {
  return (<>
    <Mainheader />
  </>)
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
    <Main />
  </div>,
);

