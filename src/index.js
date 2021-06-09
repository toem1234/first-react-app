import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './About';
import Contact from './Contact';
import ServiceClassComponent from './ServiceClassComponent';
import ServiceFunctionalComponent from './ServiceFunctionalComponent';

ReactDOM.render(
  <StrictMode>
    <div style={{ textAlign: 'center', margin: '15px auto' }}>
      <ServiceClassComponent /> | <ServiceFunctionalComponent />
    </div>
    <App />
    <About />
    <Contact />
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
