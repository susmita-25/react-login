import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomeComponent from './components/home/home.component';
import {Route, BrowserRouter} from 'react-router-dom';
const routes = (
  
  <BrowserRouter>
  <div>
    <Route exact path="/" component={App} />
    <Route exact path="/home" component={HomeComponent} />
  </div>
  </BrowserRouter>
)

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
