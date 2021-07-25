import Header from "./components/Header";

import Logo from "./assets/images/logo.png";
import GlobalStyle from './styles/global';

import Routes from "./routes";
function App() {
  return (
    <>
    <GlobalStyle />   
    <Header logo={Logo} title='EL.VINO' /> 
    <Routes />
    </>
  );
}

export default App;
