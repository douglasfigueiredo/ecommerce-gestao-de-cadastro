import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, div#root {
    font-family: Arial, Helvetica, sans-serif;
    background: #fff;
    width: 100%;
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    display: flex;
    flex-direction: column;
    
  }

  .react-modal-overlay {
    background: rgba(0,0,0, 0.5);

    position: fixed;
    top:0;
    bottom:0;
    right:0;
    left:0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    width: 100%;
    max-width: 680px;
    background: #fff;
    padding: 3rem;
    position:relative;
    border-radius: 0.24rem;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    width: 20px;
    height: 20px;
    border:0;
    font-size: 1rem;
    color: #5f568e;
    font-weight: 600;
    cursor: pointer;
    background: transparent;
  }

  
`;

export default GlobalStyle;