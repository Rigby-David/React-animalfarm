import './App.css';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import { animals } from './data.js';

function App() {
  return (
    <div className="App">
      <Header greeting='farmer!' />
      <Main animal={animals}/>
      <Footer email='rigby335@hotmail.com'/>
    </div>
  );
}

export default App;
