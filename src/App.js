import './App.css';
import Footer from './Footer/Footer.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';


function App() {
  return (
    <div className="App">
      <Header greeting='farmer!' />
      <Main animal/>
      <Footer email='rigby335@hotmail.com'/>
    </div>
  );
}

export default App;
